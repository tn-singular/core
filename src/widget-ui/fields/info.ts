import type { BaseFieldInput } from './shared'
import { textFieldParser } from './text'
import type { Parser } from '../types'

export interface InfoFieldInput extends BaseFieldInput {
  parser: Parser<string>
}

export interface InfoField extends InfoFieldInput {
  type: 'info'
  id: string
  defaultValue: string
}

export function createInfoField(str: string, options?: Partial<InfoFieldInput>): InfoField {
  const field = {
    type: 'info',
    defaultValue: str,
    parser: textFieldParser,
    ...options,
  }

  // @ts-expect-error some fields are functions that will be unwrapped later
  return field
}
