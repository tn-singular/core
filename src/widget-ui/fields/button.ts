import type { BaseFieldInput } from './shared'

export type ButtonFieldInput = BaseFieldInput

export interface ButtonField extends ButtonFieldInput {
  type: 'button'
  id: string
  defaultValue?: never
}

export function createButtonField(options?: Partial<ButtonFieldInput>): ButtonField {
  const field = {
    type: 'button',
    ...options,
  }

  // @ts-expect-error some fields are functions that will be unwrapped later
  return field
}
