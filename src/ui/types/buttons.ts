type ButtonCallback = (id: string) => void;
export type ButtonHandlers<T extends string[] = string[]> = Record<T[number], ButtonCallback>;
