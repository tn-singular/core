import type { Tinycolor } from '../types/widget'

export function tinyRGBA(col: Tinycolor, alpha?: number) {
  return `rgba(${col.r}, ${col.g}, ${col.b}, ${alpha ?? col.a})`
}
