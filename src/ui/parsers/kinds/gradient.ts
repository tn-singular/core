import { colorToRgbaString } from './color'
import type { Serializable } from '../../../types/utils'
import type { UIField } from '../../types/fields'
import type { Parser } from '../parsers'
import utils from '../utils'

function isGradientObject(
  value: Serializable | undefined
): value is Extract<UIField, { type: 'gradient' }>['defaultValue'] {
  return !!(value && typeof value === 'object' && 'stops' in value)
}

export const gradientToString = ((value) => {
  if (!isGradientObject(value)) {
    utils.parserWarning(value, 'gradient')
    return ''
  }

  if (value.type === 'solid') {
    return colorToRgbaString(value.solidColor)
  }

  if (value.type === 'linear') {
    return `linear-gradient(${value.angle}deg, ${value.stops
      .map(
        (stop) =>
          `${stop.color}${Math.round(stop.opacity * 255)
            .toString(16)
            .padStart(2, '0')} ${(Math.min(Math.max(stop.offset, 0), 1) * 100).toFixed(2)}%`
      )
      .join(', ')})`
  }

  // TODO test and finish
  return `radial-gradient(${value.stops
    .map(
      (stop) =>
        `${stop.color}${Math.round(stop.opacity * 255)
          .toString(16)
          .padStart(2, '0')} ${(Math.min(Math.max(stop.offset, 0), 1) * 100).toFixed(2)}%`
    )
    .join(', ')})`
}) satisfies Parser
