export function ensure<T>() {
  return <U extends T>(it: U) => it
}
