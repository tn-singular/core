export function round(value: number, dp = 2) {
  const order = 10 ** dp
  return Math.floor(value * order) / order
}

export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}
