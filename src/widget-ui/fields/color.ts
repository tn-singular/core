import { hexToRGBA } from '../../color/color'
import type { Hex, Tinycolor } from '../../types/utils'
import { colorToRgba } from '../parsers'
import type { FieldInput, Parser } from '../types'
import { parserWarning } from '../utils'

type ColorField = {
  type: 'color'
  id: string
  title: string
  defaultValue: Tinycolor
  disabled?: boolean
  hidden?: boolean
  parser: Parser<Tinycolor>
}

export function createColorField(
  color: Tinycolor | Hex = '#cccccc',
  options?: FieldInput<ColorField>
): ColorField {
  const field = {
    type: 'color',
    defaultValue: colorToRgba(color),
    parser: colorFieldParser,
    ...options,
  }

  // @ts-expect-error some fields are functions that will be unwrapped later
  return field
}

export const colorFieldParser = ((value) => {
  if (typeof value === 'string') {
    const hex = value.startsWith('#') ? value.substring(1) : value
    const rgba = hexToRGBA(hex)
    if (!rgba) {
      parserWarning(hex, 'hexToRGBA')
      return { r: 0, g: 0, b: 0, a: 0 }
    }
    return rgba
  }
  if (typeof value === 'object' && 'r' in value && 'g' in value && 'b' in value) {
    return { r: value.r, g: value.g, b: value.b, a: 'a' in value ? value.a : 1 } as Tinycolor
  }
  parserWarning(value, 'color')
  return { r: 0, g: 0, b: 0, a: 0 }
}) satisfies Parser

export const colorFieldParserToString = ((value) => {
  const { r, g, b, a } = colorToRgba(value)
  return `rgba(${r}, ${g}, ${b}, ${a})`
}) satisfies Parser
