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
    if (definition.type === 'timecontrol') {
        return {
            ms: value.value,
            UTC: value.UTC,
            isRunning: value.isRunning,
        };
    }
    if (definition.type === 'json') {
        return JSON.parse(value);
    }
    return value;
}
const defaultGradientSettings = {
    type: 'solid',
    solidColor: { r: 0, g: 0, b: 0, a: 1 },
    stops: [
        { color: '#000000', offset: 0, opacity: 1 },
        { color: '#000000', offset: 1, opacity: 0 },
    ],
    offset: 0,
    angle: 0,
    scale: 100,
    spreadMethod: 'pad',
    keepAspect: false,
    centerX: 50,
    centerY: 50,
    radius: 50,
    focalAngle: 0,
    focalDistance: 0,
};
function isSolidGradientSettings(settings) {
    return 'color' in settings;
}
export function gradientField(type, { title, disabled, hidden, ..._settings }) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const settings = _settings;
    if (isSolidGradientSettings(settings)) {
        let solidColor = { r: 0, g: 0, b: 0, a: 1 };
        let stops = [];
        if (typeof settings.color === 'string') {
            solidColor = hexToRgba(settings.color);
            stops = [
                { color: settings.color, offset: 0, opacity: 1 },
                { color: settings.color, offset: 1, opacity: 0 },
            ];
        }
        else {
            const hexColor = rgbToHex(settings.color, { alpha: false });
            solidColor = settings.color;
            stops = [
                { color: hexColor, offset: 0, opacity: 1 },
                { color: hexColor, offset: 1, opacity: 0 },
            ];
        }
        return {
            type: 'gradient',
            title,
            disabled,
            hidden,
            defaultValue: {
                ...defaultGradientSettings,
                solidColor,
                stops,
                type,
                ...settings,
            },
        };
    }
    else {
        if (settings.stops.length === 0) {
            throw new Error(`Provide at least 1 color stop`);
        }
        return {
            type: 'gradient',
            title,
            disabled,
            hidden,
            defaultValue: {
                ...defaultGradientSettings,
                solidColor: hexToRgba(settings.stops[0].color),
                type,
                ...settings,
            },
        };
    }
}
function componentToHex(c) {
    return c?.toString(16).padStart(2, '0') ?? '';
}
function rgbToHex(color, settings) {
    const base = `#${componentToHex(color.r)}${componentToHex(color.g)}${componentToHex(color.b)}`;
    const hex = 'a' in color && settings.alpha ? `${base}${componentToHex(color.a)}` : base;
    return hex;
}
const hexRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?/;
function hexToRgba(hex) {
    const result = hex.match(hexRegex);
    if (!result) {
        throw new Error(`Invalid hex code provided: ${hex}`);
    }
    return {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
        a: result[4] ? toPrec(parseInt(result[4], 16) / 255) : 1,
    };
}
function toPrec(number, precision = 2) {
    const factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
}
//# sourceMappingURL=utils.js.map