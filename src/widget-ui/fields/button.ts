import type { FieldInput } from '../types'

type ButtonField = {
  type: 'button'
  id: string
  title: string
  defaultValue?: never
  disabled?: boolean
  hidden?: boolean
}

export function createButtonField(options?: Omit<FieldInput<ButtonField>, 'id'>): ButtonField {
  const field = {
    type: 'button',
    ...options,
  }

  // @ts-expect-error some fields are functions that will be unwrapped later
  return field
}
