import type { BaseFieldInput } from './shared'
import type { Parser } from '../types'
import { parserWarning } from '../utils'

export interface TextFieldInput extends BaseFieldInput {
  parser: Parser<string>
}

export interface TextField extends TextFieldInput {
  type: 'text'
  id: string
  defaultValue: string
}

export function createTextField(str?: string, options?: Partial<TextFieldInput>): TextField {
  const field = {
    type: 'text',
    defaultValue: str ?? '',
    parser: textFieldParser,
    ...options,
  }

  // @ts-expect-error some fields are functions that will be unwrapped later
  return field
}

export const textFieldParser = ((value) => {
  if (value === undefined) {
    return ''
  }
  if (typeof value === 'string') {
    return value
  }
  return value.toString()
}) satisfies Parser
