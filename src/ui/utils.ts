import type { Expand } from '../types/utils'
import type { UIFieldDefinition, UIGroupDefinition, Alignment } from '../types/widget'
import { ensure } from '../utils/ts-helpers'

export function makeFields<T extends Record<string, UIFieldDefinition>>(fields: T) {
  return ensure<Record<string, UIFieldDefinition>>()(fields)
}

export function makeGroups<T extends Record<string, UIGroupDefinition>>(groups: T) {
  return ensure<Record<string, UIGroupDefinition>>()(groups)
}

export function makeDefinition<
  F extends Record<string, UIFieldDefinition>,
  G extends Record<string, UIGroupDefinition>
>(fields: F, groups?: G) {
  return groups
    ? {
        model: {
          fields: fieldsToEntries(fields),
          groups: groupsToEntries(groups),
        },
      }
    : {
        model: {
          fields: fieldsToEntries(fields),
        },
      }
}

export function childIds<T extends Record<string, UIFieldDefinition>>(
  fields: T,
  include?: (keyof T)[]
) {
  const allKeys = Object.keys(fields) as (keyof T)[]
  return include ? allKeys.filter((key) => include.includes(key)) : allKeys
}

export function fieldsToEntries(collection: Record<string, UIFieldDefinition | UIGroupDefinition>) {
  return Object.entries(collection).map(([id, definition]) => ({
    id,
    ...definition,
  }))
}

export function groupsToEntries(collection: Record<string, UIFieldDefinition | UIGroupDefinition>) {
  return Object.entries(collection).map(([id, definition]) => ({
    id,
    title: id,
    ...definition,
  }))
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function parseOnValueProperty(value: any, definition: WidenDefaults<UIFieldDefinition>) {
  if (definition.type === 'number') {
    value = Number(value)
    if (Number.isNaN(value)) {
      console.warn(SingularWidget.tileName, '- NaN:', definition, value)
    }
    return value
  }

  if (definition.type === 'font') {
    // bold property unused
    delete value.bold
  }
}

export type GetButtonFields<T> = keyof {
  [K in keyof T as T[K] extends Record<'defaultValue', unknown> ? never : K]: T[K]
}

export type GetTransientFields<T> = keyof {
  [K in keyof T as T[K] extends Record<'defaultValue', unknown>
    ? never
    : K extends `show${string}`
    ? K
    : never]: T[K]
}

export type GetControlFields<T> = Expand<{
  [K in keyof T as T[K] extends Record<'defaultValue', unknown> ? K : never]: T[K] extends Record<
    'defaultValue',
    infer T
  >
    ? WidenDefaults<T>
    : never
}>

type WidenDefaults<T> = T extends boolean
  ? boolean
  : T extends Record<'alignment', string>
  ? {
      [K in keyof T]: K extends 'alignment' ? Alignment : T[K]
    }
  : T

type AllKeys<T> = T extends unknown ? keyof T : never

type AddMissingProps<T, K extends PropertyKey = AllKeys<T>> = T extends unknown
  ? T & Record<Exclude<K, keyof T>, never>
  : never

export type MergeProps<T> = {
  [K in keyof AddMissingProps<T>]: AddMissingProps<T>[K]
}
