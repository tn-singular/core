import { ensure } from '../utils/ts-helpers';
export function makeFields(fields) {
    return ensure()(fields);
}
export function makeGroups(groups) {
    return ensure()(groups);
}
export function makeDefinition(fields, groups) {
    return groups
        ? {
            model: {
                fields: fieldsToEntries(fields),
                groups: groupsToEntries(groups),
            },
        }
        : {
            model: {
                fields: fieldsToEntries(fields),
            },
        };
}
export function childIds(fields, include) {
    const allKeys = Object.keys(fields);
    return include ? allKeys.filter((key) => include.includes(key)) : allKeys;
}
export function fieldsToEntries(collection) {
    return Object.entries(collection).map(([id, definition]) => ({
        id,
        ...definition,
    }));
}
export function groupsToEntries(collection) {
    return Object.entries(collection).map(([id, definition]) => ({
        id,
        title: id,
        ...definition,
    }));
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function parseOnValueProperty(value, definition) {
    if (definition.type === 'number') {
        value = Number(value);
        if (Number.isNaN(value)) {
            console.warn(SingularWidget.tileName, '- NaN:', definition, value);
        }
        return value;
    }
    if (definition.type === 'font') {
        // bold property unused
        delete value.bold;
        return value;
    }
    return value;
}
//# sourceMappingURL=utils.js.map