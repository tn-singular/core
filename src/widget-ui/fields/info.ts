import { textFieldParser } from './text'
import type { FieldInput, Parser } from '../types'

type InfoField = {
  type: 'info'
  id: string
  title: string
  defaultValue: string
  disabled?: boolean
  hidden?: boolean
  parser: Parser<string>
}

export function createInfoField(str: string, options?: FieldInput<InfoField>): InfoField {
  const field = {
    type: 'info',
    defaultValue: str,
    parser: textFieldParser,
    ...options,
  }

  // @ts-expect-error some fields are functions that will be unwrapped later
  return field
}
