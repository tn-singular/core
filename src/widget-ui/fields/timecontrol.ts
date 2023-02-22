import type { FieldInput, Parser } from '../types'
import { parserWarning } from '../utils'

type TimeControlField = {
  type: 'timecontrol'
  id: string
  title: string
  defaultValue: {
    ms: number
    UTC: number
    isRunning: boolean
  }
  disabled?: boolean
  hidden?: boolean
  parser: Parser<TimeControlField['defaultValue']>
}

export function createTimeControlField(options?: FieldInput<TimeControlField>): TimeControlField {
  const field = {
    type: 'timecontrol',
    defaultValue: {
      ms: 0,
      UTC: Date.now(),
      isRunning: false,
    },
    parser: timeControlFieldParser,
    ...options,
  }

  // @ts-expect-error some fields are functions that will be unwrapped later
  return field
}

export const timeControlFieldParser = ((value) => {
  const asString = value && value.toString()
  if (!asString) {
    parserWarning(value, 'string')
    return ''
  }
  return asString
}) satisfies Parser
