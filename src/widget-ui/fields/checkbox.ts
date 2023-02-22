import type { FieldInput } from '../types'

type CheckboxField = {
  type: 'checkbox'
  id: string
  title: string
  defaultValue: boolean
  disabled?: boolean
  hidden?: boolean
}

export function createCheckboxField(
  boolean: boolean,
  options?: FieldInput<CheckboxField>
): CheckboxField {
  const field = {
    type: 'checkbox',
    defaultValue: boolean,
    ...options,
  }

  // @ts-expect-error some fields are functions that will be unwrapped later
  return field
}
