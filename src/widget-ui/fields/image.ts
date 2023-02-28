import type { BaseFieldInput } from './shared'
import { textFieldParser } from './text'
import type { Parser } from '../types'

export interface ImageFieldInput extends BaseFieldInput {
  parser: Parser<string>
}

export interface ImageField extends ImageFieldInput {
  type: 'image'
  id: string
  defaultValue: string
}

export function createImageField(url?: string, options?: Partial<ImageFieldInput>): ImageField {
  const field = {
    type: 'image',
    defaultValue: url ?? '',
    parser: textFieldParser,
    ...options,
  }

  // @ts-expect-error some fields are functions that will be unwrapped later
  return field
}
