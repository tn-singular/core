import type { FieldInput, Parser } from '../types'
import { parserWarning } from '../utils'

type NumberField = {
  type: 'number'
  id: string
  title: string
  defaultValue: number
  disabled?: boolean
  hidden?: boolean
  parser: Parser<number>

  /**
   * minimum value allowed
   */
  min?: number

  /**
   * maximum value allowed
   */
  max?: number

  /**
   * step for value changes when using up and down arrows
   */
  step?: number

  /**
   * show a unit string in the input field next to the number
   */
  unit?: string

  /**
   * number format, defines how many digits are shown
   */
  format?: string
}

export function createNumberField(number: number, options?: FieldInput<NumberField>): NumberField {
  const field = {
    type: 'number',
    defaultValue: number,
    parser: numberFieldParser,
    ...options,
  }

  // @ts-expect-error some fields are functions that will be unwrapped later
  return field
}

export const numberFieldParser = ((value) => {
  const asNum = Number(value)
  if (Number.isNaN(asNum)) {
    parserWarning(value, 'number')
    return 0
  }
  return asNum
}) satisfies Parser
