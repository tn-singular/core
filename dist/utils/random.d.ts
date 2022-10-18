/**
 * A deterministic pseudo-random number generator.
 * Pass in the same seed and get the same pseudorandom number.
 * See: https://remotion.dev/docs/random
 */
export declare const random: (seed: number | string | null, dummy?: unknown) => number;
export declare function shuffleArrayInPlace(array: unknown[]): void;
