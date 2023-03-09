import type { BaseFieldInput } from './shared'
import type { Hex, Tinycolor, UnitInterval } from '../../types/utils'
import { colorToRgba } from '../parsers'
import type { Parser } from '../types'
import { parserWarning } from '../utils'

export interface GradientDefaultValue {
  type: 'solid' | 'linear' | 'radial'
  solidColor: Tinycolor
  stops: {
    color: Hex
    offset: UnitInterval
    opacity: UnitInterval
  }[]
  offset: number
  angle: number
  scale: number
  centerX: number
  centerY: number
  radius: number
  focalAngle: number
  focalDistance: number
  spreadMethod: 'pad' | 'reflect' | 'repeat'
  keepAspect: boolean
}

export interface GradientFieldInput extends BaseFieldInput {
  defaultValue: GradientDefaultValue
  parser: Parser<string>
}

export interface GradientField extends GradientFieldInput {
  type: 'gradient'
  id: string
}

export function createGradientField(
  stops: Hex[] = ['#00ffff', '#ff00ff'],
  options?: Partial<GradientFieldInput>
): GradientField {
  const field = {
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
    parser: gradientFieldParser,
    ...options,
  }

  // @ts-expect-error some fields are functions that will be unwrapped later
  return field
}

export const gradientFieldParser = ((value) => {
  const asString = value && value.toString()
  if (!asString) {
    parserWarning(value, 'string')
    return ''
  }
  return asString
}) satisfies Parser
