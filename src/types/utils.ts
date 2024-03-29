// Primitives *****
export type Seconds = number
export type Milliseconds = number
export type UnitInterval = number
export type Tinycolor = { r: number; g: number; b: number; a: number }
export type Hex = `#${string}`
export type Serializable = string | number | boolean | object
export type Alignment = 'left' | 'right' | 'center' | 'justify'

// Generics *****
export type Expand<T> = T extends T ? { [K in keyof T]: T[K] } : never
// export type Simplify<T> = { [KeyType in keyof T]: T[KeyType] } & {} // <- Alternative to Expand

export type ExpandRecursively<T> = T extends object
  ? T extends T
    ? { [K in keyof T]: ExpandRecursively<T[K]> }
    : never
  : T

export type AllKeys<T> = T extends unknown ? keyof T : never

export type AddMissingProps<T, K extends PropertyKey = AllKeys<T>> = T extends unknown
  ? T & Record<Exclude<K, keyof T>, never>
  : never

export type SetOptional<T, K extends keyof T> = Expand<Partial<Pick<T, K>> & Omit<T, K>>

export type Optionals<T> = { [K in keyof T as T extends Record<K, unknown> ? never : K]: T[K] }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type DistributiveOmit<T, K extends PropertyKey> = T extends any ? Omit<T, K> : never

export type UnionToIntersection<U> = Expand<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never
>
