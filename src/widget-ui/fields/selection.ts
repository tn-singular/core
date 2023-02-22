import { textFieldParser } from './text'
import type { FieldInput, Parser } from '../types'
import { camel2title } from '../utils'

type SelectionField = {
  type: 'selection'
  id: string
  title: string
  defaultValue: string
  disabled?: boolean
  hidden?: boolean
  parser: Parser<string>
  selections: {
    id: string
    title: string
  }[]
}

export function createSelectionField(
  selection: string,
  selections: string[],
  options?: FieldInput<SelectionField>
): SelectionField {
  const field = {
    type: 'selection',
    defaultValue: selection,
    parser: textFieldParser,
    selections: selections.map((option) => ({ id: option, title: camel2title(option) })),
    ...options,
  }

  // @ts-expect-error some fields are functions that will be unwrapped later
  return field
}
