/* eslint-disable @typescript-eslint/ban-types */

import type { UIGroupInput, UIField, Parsers, Model, WidenFieldValue } from './types'
import { camel2title, mapValues } from './utils'
import type { AddMissingProps, Serializable } from '../types/utils'

export function defineUI<T extends Record<string, UIGroupInput>>(ui: T) {
  type FieldsUnion = T[keyof T]['fields']
  type AllFields = AddMissingProps<FieldsUnion>
  type Fields = { [K in keyof AllFields]: AllFields[K] }

  type Controls = {
    [K in keyof Fields as Fields[K] extends { type: 'button' } ? never : K]: WidenFieldValue<
      Fields[K]['selections'] extends {}
        ? Fields[K]['selections'][number]['id']
        : Fields[K]['parser'] extends {}
        ? ReturnType<Fields[K]['parser']>
        : Fields[K]['defaultValue']
    >
  }

  type ButtonKey = keyof {
    [K in keyof Fields as Fields[K] extends { type: 'button' } ? K : never]: K
  }

  const uiWithDefaults = mapValues(ui, (groupId, groupDefinition) => {
    const fields = mapValues(groupDefinition.fields, (fieldId, fieldInput) => {
      const input = fieldInput as Partial<UIField>
      return {
        id: fieldId,
        title: camel2title(fieldId),
        ...input,
      }
    })

    return {
      id: groupId,
      title: camel2title(String(groupId)),
      ...groupDefinition,
      fields,
    }
  }) as Record<string, UIGroupInput>

  // Collect all fields
  const allFieldEntries = Object.entries(uiWithDefaults).flatMap(([_key, value]) =>
    Object.entries(value.fields)
  )
  const buttonEntries = allFieldEntries.filter(([_key, value]) => value.type === 'button')
  const controlEntries = allFieldEntries.filter(([_key, value]) => value.type !== 'button')

  // Collect button ids in array
  const buttons = buttonEntries.map(([key]) => key) as ButtonKey[]

  // Create key/value store of field key / initial/default value
  const controls: Controls = Object.fromEntries(
    controlEntries.map(([key, value]) => {
      const defaultValue = value.defaultValue as Serializable
      return [key, 'parser' in value ? value.parser(defaultValue) : defaultValue]
    })
  ) as Controls

  const parsers: Parsers = Object.fromEntries(
    controlEntries
      .map(([key, value]) => [key, 'parser' in value && value.parser])
      .filter(([_key, value]) => Boolean(value))
  )

  // Restructure the ui with defaults to fit Singular's model
  const model = uiModel(uiWithDefaults, allFieldEntries)

  return {
    model,
    buttons,
    controls,
    parsers,
  }
}

function uiModel(ui: Record<string, UIGroupInput>, fieldEntries: [string, UIField][]): Model {
  return {
    groups: Object.entries(ui).map(([key, value]) => {
      const { fields, ...uiGroupDefinition } = value
      return {
        id: key,
        width: 'single',
        title: camel2title(key),
        ...uiGroupDefinition,
        childIds: Object.keys(fields).filter((key) => key !== uiGroupDefinition.activeId),
      }
    }),
    fields: fieldEntries.map(([_, value]) => {
      if ('parser' in value) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { parser, ...fieldDefinition } = value
        return fieldDefinition
      }
      return value
    }),
  }
}
