import type { BaseFieldInput } from './shared'
import { textFieldParser } from './text'
import type { Parser } from '../types'

export interface TextAreaFieldInput extends BaseFieldInput {
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

export interface TextAreaField extends TextAreaFieldInput {
  type: 'textarea'
  id: string
  defaultValue: string
}

export function createTextAreaField(
  str?: string,
  options?: Partial<TextAreaFieldInput>
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
