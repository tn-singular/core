import type { Parser } from './types'
import { parserWarning } from './utils'
import { hexToRGBA } from '../color/color'
import type { Tinycolor } from '../types/utils'

export const colorToRgba = ((value) => {
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

export const colorToRgbaString = ((value) => {
  const { r, g, b, a } = colorToRgba(value)
  return `rgba(${r}, ${g}, ${b}, ${a})`
}) satisfies Parser
