/* eslint-disable @typescript-eslint/no-explicit-any */
export function keys(obj) {
    return Object.keys(obj);
}
export function entries(obj) {
    return Object.entries(obj);
}
export function fromEntries(entries) {
    return Object.fromEntries(entries);
}
export function mapValues(obj, mapper) {
    return fromEntries(entries(obj).map(([key, value]) => [key, mapper(key, value)]));
}
export function mapEntries(obj, mapper) {
    return fromEntries(entries(obj).map(([key, value]) => mapper(key, value)));
}
export function unfoldDefault(valueOrFunction, id, input) {
    return typeof valueOrFunction === 'function' ? valueOrFunction(id, input) : valueOrFunction;
}
export const prefixKeys = (field, keyPrefix) => {
    return mapEntries(field, (key, value) => [`${keyPrefix}${String(key)}`, value]);
};
//# sourceMappingURL=utils.js.map