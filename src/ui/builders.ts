import { camel2title, uiDefaults } from './defaults'
import { colorToRgba } from './parsers/kinds/color'
import type { FieldTypes, UIField, UIFieldInput } from './types/fields'
import { fromEntries } from './utils'
import type { Expand, Hex } from '../types/utils'

type FieldOptions<T extends FieldTypes> = Expand<
  Partial<Omit<Extract<UIField, { type: T }>, 'type' | 'defaultValue' | 'selections'>>
>

// Provides good defaults and simple inputs to create a UIFieldInput - uiDefaults are applied after this step
const uiBuilders = {
  text: (str?: string, options?: FieldOptions<'text'>) => ({
    type: 'text',
    ...(str !== undefined && { defaultValue: str }),
    ...options,
  }),
  textarea: (str?: string, options?: FieldOptions<'textarea'>) => ({
    type: 'textarea',
    ...(str !== undefined && { defaultValue: str }),
    ...options,
  }),
  number: (num: number, options?: FieldOptions<'number'>) => ({
    type: 'number',
    defaultValue: num,
    ...options,
  }),
  image: (url?: string, options?: FieldOptions<'image'>) => ({
    type: 'image',
    ...(url !== undefined && { defaultValue: url }),
    ...options,
  }),
  checkbox: (boolean: boolean, options?: FieldOptions<'checkbox'>) => ({
    type: 'checkbox',
    defaultValue: boolean,
    ...options,
  }),
  button: (options?: FieldOptions<'button'>) => ({
    type: 'button',
    ...options,
  }),
  selection: <T extends string[]>(selections: T, options?: FieldOptions<'selection'>) => ({
    type: 'selection',
    defaultValue: selections[0],
    selections: selections.map((option) => ({ id: option, title: camel2title(option) })),
    ...options,
  }),
  font: (family?: string, weight?: number, options?: FieldOptions<'font'>) => ({
    type: 'font',
    ...(family !== undefined && {
      defaultValue: {
        alignment: 'center',
        italic: false,
        underline: false,
        fontData: {
          family,
          weight: (weight ?? 500).toString(),
        },
      },
    }),
    parser: options?.parser ?? uiDefaults.fields.font.parser,
    ...options,
  }),
  color: (hex: Hex = '#cccccc', options?: FieldOptions<'color'>) => ({
    type: 'color',
    defaultValue: colorToRgba(hex),
    parser: options?.parser ?? uiDefaults.fields.color.parser,
    ...options,
  }),
  gradient: (stops: Hex[] = ['#00ffff', '#ff00ff'], options?: FieldOptions<'gradient'>) => ({
    type: 'gradient',
    defaultValue: {
      type: 'linear',
      solidColor: colorToRgba(stops[0]),
      stops: stops.map((stop, i) => ({
        offset: Math.round(100 * (i / (stops.length - 1))) / 100,
        opacity: 1,
        color: stop,
      })),
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
    },
    parser: options?.parser ?? uiDefaults.fields.gradient.parser,
    ...options,
  }),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} satisfies Partial<Record<FieldTypes, (...args: any[]) => UIFieldInput>>

export function createRepeatedProperties<Keys extends string, R>(
  n: number,
  mapper: (i: number) => [key: string, value: R]
) {
  return fromEntries(Array.from({ length: n }).map((_, i) => mapper(i))) as Record<Keys, R>
}

export { uiBuilders as ui }
