import type { Signal } from '@preact/signals-core'
import { signal } from '@preact/signals-core'

export function shallowSignalify<T extends Record<string, unknown>>(subject: T) {
  return Object.fromEntries(
    Object.entries(subject).map(([key, value]) => [key, signal(value)])
  ) as {
    [K in keyof T]: Signal<T[K]>
  }
}
