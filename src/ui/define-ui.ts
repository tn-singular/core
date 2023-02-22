/* eslint-disable @typescript-eslint/ban-types */

import type { UiFieldsDefaults } from './defaults'
import { uiDefaults, camel2title } from './defaults'
import type { Parser } from './parsers/parsers'
import type { UIField } from './types/fields'
import type { UIGroupInput, UIGroup } from './types/group'
import type { Model } from './types/model'
import { mapValues, unfoldDefault } from './utils'
import type {
  AddMissingProps,
  WidenFieldValue,
  UnionToIntersection,
  Serializable,
} from '../types/utils'

export function defineUI<T extends Record<string, UIGroupInput>>(ui: T) {
  // Merge fields accross all groups
  type FieldsUnion = T[keyof T]['fields']
  type AllFields = AddMissingProps<FieldsUnion>
  type Fields = { [K in keyof AllFields]: AllFields[K] }

  // Maps to a Record of each field id with its defaultValue (or default provided by uiDefaults), minus buttons
  type Controls = {
    [K in keyof Fields as Fields[K] extends { type: 'button' } ? never : K]: WidenFieldValue<
      Fields[K]['selections'] extends {}
        ? Fields[K]['selections'][number]['id']
        : // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Fields[K]['parser'] extends (...args: any) => any
        ? ReturnType<Fields[K]['parser']>
        : Fields[K]['defaultValue'] extends {}
        ? Fields[K]['defaultValue']
        : UiFieldsDefaults[Fields[K]['type']]['defaultValue']
      // : UiFieldsDefaults[Fields[K]["type"]]["parser"] extends (...args: any) => any
      // ? ReturnType<UiFieldsDefaults[Fields[K]["type"]]["parser"]>
    >
  }

  // Maps to a Record of each field id with its parser
  type Parsers = Record<string, Parser>

  // Maps to a record of only button fields
  type Buttons = {
    [K in keyof Fields as Fields[K] extends { type: 'button' } ? K : never]: UnionToIntersection<
      (Fields[K] | UiFieldsDefaults[Fields[K]['type']])[][number]
    >
  }

  // Apply ui input on top of defaults
  const uiWithDefaults = applyUiDefaults(ui)

  // Collect all fields
  const allFieldEntries = Object.entries(uiWithDefaults).flatMap(([_key, value]) =>
    Object.entries(value.fields)
  )
  const buttonEntries = allFieldEntries.filter(([_key, value]) => value.type === 'button')
  const controlEntries = allFieldEntries.filter(([_key, value]) => value.type !== 'button')

  // Collect button ids in array
  const buttons = buttonEntries.map(([key]) => key) as (keyof Buttons)[]

  // Create key/value store of field key / initial/default value
  const controls: Controls = Object.fromEntries(
    controlEntries.map(([key, value]) => [
      key,
      // value.defaultValue,
      'parser' in value ? value.parser!(value.defaultValue as Serializable) : value.defaultValue,
    ])
  ) as Controls

  const parsers: Parsers = Object.fromEntries(
    controlEntries
      .map(([key, value]) => [key, 'parser' in value && value.parser])
      .filter(([_key, value]) => Boolean(value))
  ) as Parsers

  // Restructure the ui with defaults to fit Singular's model
  const model = uiModel(uiWithDefaults, allFieldEntries)

  return {
    model,
    buttons,
    controls,
    parsers,
  }
}

function applyUiDefaults<T extends Record<string, UIGroupInput>>(ui: T): Record<keyof T, UIGroup> {
  return mapValues(ui, (groupId, groupDefinition) => {
    const defaultGroupValues = uiDefaults.group

    const fields = mapValues(groupDefinition.fields, (fieldId, fieldInput) => {
      const defaultFieldsValues = uiDefaults.fields[fieldInput.type]

      return {
        id: fieldId,
        // Add defaults (applying functions requiring the fieldId where necessary)
        // Skip the parser field, as it is a function that should not be invoked
        ...mapValues(defaultFieldsValues, (key, fieldValue) => {
          if ((key as string) === 'parser') return fieldValue
          return unfoldDefault(fieldValue, fieldId, fieldInput)
        }),
        // Add provided key/values
        ...fieldInput,
      }
    })

    return {
      id: groupId,
      ...mapValues(defaultGroupValues, (_key, groupValue) =>
        unfoldDefault(groupValue, groupId as string)
      ),
      ...groupDefinition,
      fields,
    }
  }) as Record<keyof T, UIGroup>
}

function uiModel(ui: Record<string, UIGroup>, fieldEntries: [string, UIField][]): Model {
  return {
    groups: Object.values(ui).map((value) => {
      const { fields, title, ...uiGroupDefinition } = value
      return {
        ...uiGroupDefinition,
        title: camel2title(title),
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
