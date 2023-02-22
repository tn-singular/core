import { textFieldParser } from './text'
import type { FieldInput, Parser } from '../types'

type ImageField = {
  type: 'image'
  id: string
  title: string
  defaultValue: string
  disabled?: boolean
  hidden?: boolean
  parser: Parser<string>
}

export function createImageField(url?: string, options?: FieldInput<ImageField>): ImageField {
  const field = {
    type: 'image',
    defaultValue: url ?? '',
    parser: textFieldParser,
    ...options,
  }

  // @ts-expect-error some fields are functions that will be unwrapped later
  return field
}
