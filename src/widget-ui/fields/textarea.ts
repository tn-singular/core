import { textFieldParser } from './text'
import type { FieldInput, Parser } from '../types'

type TextAreaField = {
  type: 'textarea'
  id: string
  title: string
  defaultValue: string
  disabled?: boolean
  hidden?: boolean
  parser: Parser<string>

  /**
   * number of rows
   */
  rows: number

  /**
   * number of columns
   */
  cols: number
}

export function createTextAreaField(
  str?: string,
  options?: FieldInput<TextAreaField>
): TextAreaField {
  const field = {
    type: 'textarea',
    defaultValue: str ?? '',
    parser: textFieldParser,
    rows: 3,
    cols: 10,
    ...options,
  }

  // @ts-expect-error some fields are functions that will be unwrapped later
  return field
}
