import type { BaseFieldInput } from './shared'
import type { Parser } from '../types'
import { parserWarning } from '../utils'

export type TimeControlDefaultValue = {
  ms: number
  UTC: number
  isRunning: boolean
}

export interface TimeControlFieldInput extends BaseFieldInput {
  parser: Parser<TimeControlDefaultValue>
}

export interface TimeControlField extends TimeControlFieldInput {
  type: 'timecontrol'
  id: string
  defaultValue: TimeControlDefaultValue
}

export function createTimeControlField(options?: Partial<TimeControlFieldInput>): TimeControlField {
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
