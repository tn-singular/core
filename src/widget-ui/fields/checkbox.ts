import type { BaseFieldInput } from './shared'

export type CheckboxFieldInput = BaseFieldInput

export interface CheckboxField extends CheckboxFieldInput {
  type: 'checkbox'
  id: string
  defaultValue?: never
}

export function createCheckboxField(
  boolean: boolean,
  options?: Partial<CheckboxFieldInput>
): CheckboxField {
  const field = {
    type: 'checkbox',
    defaultValue: boolean,
    ...options,
  }

  // @ts-expect-error some fields are functions that will be unwrapped later
  return field
}
