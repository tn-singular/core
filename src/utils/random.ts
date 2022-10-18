function mulberry32(a: number) {
  let t = a + 0x6d2b79f5
  t = Math.imul(t ^ (t >>> 15), t | 1)
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296
}

function hashCode(str: string) {
  let i = 0
  let chr = 0
  let hash = 0

  for (i = 0; i < str.length; i++) {
    chr = str.charCodeAt(i)
    hash = (hash << 5) - hash + chr
    hash |= 0 // Convert to 32bit integer
  }

  return hash
}

/**
 * A deterministic pseudo-random number generator.
 * Pass in the same seed and get the same pseudorandom number.
 * See: https://remotion.dev/docs/random
 */
export const random = (seed: number | string | null, dummy?: unknown) => {
  if (dummy !== undefined) {
    throw new TypeError('random() takes only one argument')
  }

  if (seed === null) {
    return Math.random()
  }

  if (typeof seed === 'string') {
    return mulberry32(hashCode(seed))
  }

  if (typeof seed === 'number') {
    return mulberry32(seed * 10000000000)
  }

  throw new Error('random() argument must be a number or a string')
}

export function shuffleArrayInPlace(array: unknown[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}
