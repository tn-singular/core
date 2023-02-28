import type { BaseFieldInput } from './shared'
import { textFieldParser } from './text'
import type { Parser } from '../types'
import { camel2title } from '../utils'

type ImplicitSelection = string
type ExplicitSelection = { id: string; title: string }
type Selection = ImplicitSelection | ExplicitSelection

export interface SelectionFieldInput extends BaseFieldInput {
  parser: Parser<number>
}

export interface SelectionField extends SelectionFieldInput {
  type: 'selection'
  id: string
  defaultValue: string
  selections: ExplicitSelection[]
}

export function createSelectionField(
  selection: string,
  selections: Selection[],
  options?: Partial<SelectionFieldInput>
): SelectionField {
  if (selections.length === 0) {
    throw new Error('There must be at least 1 selection')
  }

  const sels =
    typeof selections[0] === 'string'
      ? (selections as ImplicitSelection[]).map((option) => ({
          id: option,
          title: camel2title(option),
        }))
      : (selections as ExplicitSelection[])

  const field = {
    type: 'selection',
    defaultValue: selection,
    parser: textFieldParser,
    selections: sels,
    ...options,
  }

  // @ts-expect-error some fields are functions that will be unwrapped later
  return field
}
