import type { Expand } from '../types/utils'
import type {
  UIFieldDefinition,
  UIGroupDefinition,
  Alignment,
  GradientField,
  Tinycolor,
  BasicField,
} from '../types/widget'
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
    return value
  }

  if (definition.type === 'timecontrol') {
    return {
      ms: value.value,
      UTC: value.UTC,
      isRunning: value.isRunning,
    }
  }

  if (definition.type === 'json') {
    return JSON.parse(value)
  }

  return value
}

const defaultGradientSettings: GradientSettings = {
  type: 'solid',
  solidColor: { r: 0, g: 0, b: 0, a: 1 },
  stops: [
    { color: '#000000', offset: 0, opacity: 1 },
    { color: '#000000', offset: 1, opacity: 0 },
  ],
  offset: 0,
  angle: 0,
  scale: 100,
  spreadMethod: 'pad',
  keepAspect: false,
  centerX: 50,
  centerY: 50,
  radius: 50,
  focalAngle: 0,
  focalDistance: 0,
}

type GradientSettings = GradientField['defaultValue']
type SolidGradientSettings = { color: `#${string}` | Tinycolor }
type LinearGradientSettings = { stops: GradientSettings['stops'] } & Partial<
  Pick<GradientSettings, 'offset' | 'angle' | 'scale' | 'spreadMethod' | 'keepAspect'>
>
type RadialGradientSettings = { stops: GradientSettings['stops'] } & Partial<
  Pick<
    GradientSettings,
    | 'centerX'
    | 'centerY'
    | 'radius'
    | 'spreadMethod'
    | 'focalAngle'
    | 'focalDistance'
    | 'keepAspect'
  >
>

type GradientFieldSettings = {
  solid: SolidGradientSettings
  linear: LinearGradientSettings
  radial: RadialGradientSettings
}

function isSolidGradientSettings(
  settings: GradientFieldSettings[keyof GradientFieldSettings]
): settings is SolidGradientSettings {
  return 'color' in settings
}

export function gradientField<T extends keyof GradientFieldSettings>(
  type: T,
  { title, disabled, hidden, ..._settings }: GradientFieldSettings[T] & BasicField
): GradientField {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const settings: GradientFieldSettings[T] = _settings as any
  if (isSolidGradientSettings(settings)) {
    let solidColor: GradientSettings['solidColor'] = { r: 0, g: 0, b: 0, a: 1 }
    let stops: GradientSettings['stops'] = []
    if (typeof settings.color === 'string') {
      solidColor = hexToRgba(settings.color)
      stops = [
        { color: settings.color, offset: 0, opacity: 1 },
        { color: settings.color, offset: 1, opacity: 0 },
      ]
    } else {
      const hexColor = rgbToHex(settings.color, { alpha: false })
      solidColor = settings.color
      stops = [
        { color: hexColor, offset: 0, opacity: 1 },
        { color: hexColor, offset: 1, opacity: 0 },
      ]
    }
    return {
      type: 'gradient',
      title,
      disabled,
      hidden,
      defaultValue: {
        ...defaultGradientSettings,
        solidColor,
        stops,
        type,
        ...settings,
      },
    }
  } else {
    if (settings.stops.length === 0) {
      throw new Error(`Provide at least 1 color stop`)
    }

    return {
      type: 'gradient',
      title,
      disabled,
      hidden,
      defaultValue: {
        ...defaultGradientSettings,
        solidColor: hexToRgba(settings.stops[0].color),
        type,
        ...settings,
      },
    }
  }
}

function componentToHex(c?: number) {
  return c?.toString(16).padStart(2, '0') ?? ''
}

function rgbToHex(
  color: Tinycolor | Omit<Tinycolor, 'a'>,
  settings: { alpha: boolean }
): `#${string}` {
  const base: `#${string}` = `#${componentToHex(color.r)}${componentToHex(color.g)}${componentToHex(
    color.b
  )}`
  const hex: `#${string}` =
    'a' in color && settings.alpha ? `${base}${componentToHex(color.a)}` : base
  return hex
}

const hexRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?/
function hexToRgba(hex: `#${string}`): Tinycolor {
  const result = hex.match(hexRegex)
  if (!result) {
    throw new Error(`Invalid hex code provided: ${hex}`)
  }

  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
    a: result[4] ? toPrec(parseInt(result[4], 16) / 255) : 1,
  }
}

function toPrec(number: number, precision = 2) {
  const factor = Math.pow(10, precision)
  return Math.round(number * factor) / factor
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
