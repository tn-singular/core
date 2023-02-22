import type { UIFieldInput } from './types/fields';
import type { Serializable } from '../types/utils';
export declare function keys<T extends object>(obj: T): (keyof T)[];
export declare function entries<T extends object>(obj: T): {
    [K in keyof T]: [K, T[K]];
}[keyof T][];
export declare function fromEntries<K extends PropertyKey, T = any>(entries: Iterable<readonly [K, T]>): {
    [k in K]: T;
};
export declare function mapValues<T extends object, R>(obj: T, mapper: (key: keyof T, value: T[keyof T]) => R): { [k in keyof T]: R; };
export declare function mapEntries<T extends object, R extends [PropertyKey, unknown]>(obj: T, mapper: (key: keyof T, value: T[keyof T]) => R): {
    [x: string]: unknown;
    [x: number]: unknown;
    [x: symbol]: unknown;
};
export declare function unfoldDefault<T extends Serializable | undefined, I extends UIFieldInput = UIFieldInput>(valueOrFunction: T | ((...args: any[]) => T), id: string, input?: I): T;
export declare const prefixKeys: <T extends Record<string, UIFieldInput>, KP extends string>(field: T, keyPrefix: KP) => { [K in keyof T as `${KP extends infer Pre ? Pre : never}${K extends string ? K : never}`]: T[K]; };
