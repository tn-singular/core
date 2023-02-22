import type { Serializable } from '../../../types/utils'
import type { Alignment, UIField } from '../../types/fields'
import type { Parser } from '../parsers'
import utils from '../utils'

function isFontObject(
  value: Serializable | undefined
): value is Extract<UIField, { type: 'font' }>['defaultValue'] {
  return !!(value && typeof value === 'object' && 'fontData' in value)
}

export const fontParser = ((value) => {
  if (!isFontObject(value)) {
    utils.parserWarning(value, 'font')
    return {
      fontData: { family: 'Montserrat', weight: '500' },
      alignment: 'left' as Alignment,
      italic: false,
      underline: false,
    }
  }
  return value
}) satisfies Parser
