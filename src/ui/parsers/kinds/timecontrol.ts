import type { Serializable } from '../../../types/utils'
import type { UIField } from '../../types/fields'
import type { Parser } from '../parsers'
import utils from '../utils'

function isTimecontrolObject(
  value: Serializable | undefined
): value is Extract<UIField, { type: 'timecontrol' }>['defaultValue'] {
  return !!(value && typeof value === 'object' && 'UTC' in value)
}

export const timecontrolParser = ((value) => {
  if (!isTimecontrolObject(value)) {
    utils.parserWarning(value, 'timecontrol')
    return {
      ms: 0,
      UTC: Date.now(),
      isRunning: false,
    }
  }
  return value
}) satisfies Parser
