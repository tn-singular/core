export function lerp(t: number, v0: number, v1: number) {
  return v0 * (1 - t) + v1 * t
}

export function interpolate(t: number, [i0, i1]: [number, number], [o0, o1]: [number, number]) {
  return o0 + ((o1 - o0) / (i1 - i0)) * (t - i0)
}
