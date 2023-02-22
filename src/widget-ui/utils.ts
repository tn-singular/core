/* eslint-disable @typescript-eslint/no-explicit-any */

import type { UIFieldsInput } from './types'
import type { Serializable } from '../types/utils'
// import type { UIFieldInput } from './types/fields';

export const identity = (id: string) => id

export const camel2title = (camelCase: string) =>
  camelCase
    .replace(/(?<!\s)([A-Z0-9](?![A-Z0-9]))/g, (match) => ` ${match}`)
    .replace(/[a-z](?=[0-9])/g, (match) => `${match} `)
    .replace(/^.|\s./g, (match) => match.toUpperCase())
    .trim()

export const parserWarning = (value: Serializable | undefined, targetType: string) =>
  console.warn(`WARN: Cannot parse as ${targetType} -`, value)

export function keys<T extends object>(obj: T): (keyof T)[] {
  return Object.keys(obj) as any
}

export function entries<T extends object>(obj: T): { [K in keyof T]: [K, T[K]] }[keyof T][] {
  return Object.entries(obj) as any
}

export function fromEntries<K extends PropertyKey, T = any>(
  entries: Iterable<readonly [K, T]>
): { [k in K]: T } {
  return Object.fromEntries(entries) as any
}

export function mapValues<T extends object, R>(
  obj: T,
  mapper: (key: keyof T, value: T[keyof T]) => R
) {
  return fromEntries(entries(obj).map(([key, value]) => [key, mapper(key, value)]))
}

export function mapEntries<T extends object, R extends [PropertyKey, unknown]>(
  obj: T,
  mapper: (key: keyof T, value: T[keyof T]) => R
) {
  return fromEntries(entries(obj).map(([key, value]) => mapper(key, value)))
}

export const prefixKeys = <T extends Record<string, UIFieldsInput>, KP extends string>(
  field: T,
  keyPrefix: KP
) => {
  return mapEntries(field, (key, value) => [`${keyPrefix}${String(key)}`, value]) as unknown as {
    [K in keyof T as `${KP extends infer Pre ? Pre : never}${K extends string ? K : never}`]: T[K]
  }
}
