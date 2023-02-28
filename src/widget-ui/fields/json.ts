import type { BaseFieldInput } from './shared'
import type { Parser } from '../types'
import { parserWarning } from '../utils'

export interface JSONFieldInput extends BaseFieldInput {
  parser: Parser<Record<string, unknown>>

  /**
   * width in pixels
   */
  width: number

  /**
   * height in pixels
   */
  height: number
}

export interface JSONField extends JSONFieldInput {
  type: 'json'
  id: string
  defaultValue: Record<string, unknown>
}

export function createJSONField(
  obj: Record<string, unknown>,
  options?: Partial<JSONFieldInput>
): JSONField {
  const field = {
    type: 'json',
    defaultValue: obj ?? {},
    parser: jsonFieldParser,
    width: 0,
    height: 72,
    ...options,
  }

  // @ts-expect-error some fields are functions that will be unwrapped later
  return field
}

export const jsonFieldParser = ((value) => {
  if (!value || typeof value !== 'string') {
    parserWarning(value, 'JSON')
    return {}
  }
  try {
    const parsed = JSON.parse(value)
    if (typeof parsed === 'object' && !Array.isArray(parsed)) {
      parserWarning(value, 'JSON (not an object)')
      return {}
    }
    return parsed as Record<string, unknown>
  } catch {
    parserWarning(value, 'JSON')
    return {}
  }
}) satisfies Parser
