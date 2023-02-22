import type { FieldInput, Parser } from '../types'
import { parserWarning } from '../utils'

type TextField = {
  type: 'text'
  id: string
  title: string
  defaultValue: string
  disabled?: boolean
  hidden?: boolean
  parser: Parser<string>
}

export function createTextField(str?: string, options?: FieldInput<TextField>): TextField {
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
  const asString = value && value.toString()
  if (!asString) {
    parserWarning(value, 'string')
    return ''
  }
  return asString
}) satisfies Parser
