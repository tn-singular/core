import type { Serializable } from 'child_process'

import type { BaseFieldInput } from './shared'
import type { Alignment } from '../../types/utils'
import type { Parser } from '../types'
import { parserWarning } from '../utils'

type Weight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900

type FontData = {
  family: string
  weight: Weight
}

type FontFieldDefaultValue = {
  fontData: FontData
  alignment: Alignment
  italic: boolean
  underline: boolean
}

export interface FontFieldInput
  extends BaseFieldInput,
    FontData,
    Omit<FontFieldDefaultValue, 'fontData'> {
  parser: Parser<FontFieldDefaultValue>
}

export interface FontField {
  type: 'font'
  id: string
  title: string
  defaultValue: FontFieldDefaultValue
  disabled?: boolean
  hidden?: boolean
  parser: Parser<FontField['defaultValue']>
}

export function createFontField({
  family = 'Montserrat',
  weight = 500,
  alignment = 'center',
  italic = false,
  underline = false,
  ...options
}: Partial<FontFieldInput>): FontField {
  const field = {
    type: 'font',
    defaultValue: {
      alignment,
      italic,
      underline,
      fontData: {
        family,
        weight: weight.toString(),
      },
    },
    parser: fontFieldParser,
    ...options,
  }

  // @ts-expect-error some fields are functions that will be unwrapped later
  return field
}

function isFontObject(value?: Serializable): value is FontField['defaultValue'] {
  return !!(value && typeof value === 'object' && 'fontData' in value)
}

export const fontFieldParser = ((value) => {
  if (!isFontObject(value)) {
    parserWarning(value, 'font')
    return {
      fontData: { family: 'Montserrat', weight: '500' },
      alignment: 'left' as Alignment,
      italic: false,
      underline: false,
    }
  }
  return value
}) satisfies Parser
