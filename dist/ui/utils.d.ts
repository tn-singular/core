import type { Expand } from '../types/utils';
import type { UIFieldDefinition, UIGroupDefinition, Alignment, GradientField, Tinycolor, BasicField } from '../types/widget';
export declare function makeFields<T extends Record<string, UIFieldDefinition>>(fields: T): T;
export declare function makeGroups<T extends Record<string, UIGroupDefinition>>(groups: T): T;
export declare function makeDefinition<F extends Record<string, UIFieldDefinition>, G extends Record<string, UIGroupDefinition>>(fields: F, groups?: G): {
    model: {
        fields: ({
            title: string;
            disabled?: boolean | undefined;
            hidden?: boolean | undefined;
            defaultValue: string;
            type: "label";
            id: string;
        } | {
            title: string;
            disabled?: boolean | undefined;
            hidden?: boolean | undefined;
            defaultValue: string;
            type: "text";
            id: string;
        } | {
            title: string;
            disabled?: boolean | undefined;
            hidden?: boolean | undefined;
            defaultValue: string;
            type: "textarea";
            rows: number;
            cols: number;
            id: string;
        } | {
            title: string;
            disabled?: boolean | undefined;
            hidden?: boolean | undefined;
            defaultValue: {
                fontData: {
                    family: string;
                    weight: string;
                };
                alignment: Alignment;
                italic: boolean;
                underline: boolean;
            };
            type: "font";
            id: string;
        } | {
            title: string;
            disabled?: boolean | undefined;
            hidden?: boolean | undefined;
            defaultValue: string;
            type: "json";
            width: number;
            height: number;
            id: string;
        } | {
            title: string;
            disabled?: boolean | undefined;
            hidden?: boolean | undefined;
            type: "number";
            defaultValue: number;
            min?: number | undefined;
            max?: number | undefined;
            step?: number | undefined;
            unit?: string | undefined;
            format?: string | undefined;
            id: string;
        } | {
            title: string;
            disabled?: boolean | undefined;
            hidden?: boolean | undefined;
            type: "color";
            defaultValue: Tinycolor;
            id: string;
        } | {
            title: string;
            disabled?: boolean | undefined;
            hidden?: boolean | undefined;
            type: "gradient";
            defaultValue: {
                type: "solid" | "linear" | "radial";
                solidColor: Tinycolor;
                stops: {
                    color: `#${string}`;
                    offset: number;
                    opacity: number;
                }[];
                offset: string | number;
                angle: string | number;
                scale: string | number;
                spreadMethod: "pad" | "reflect" | "repeat";
                keepAspect: boolean;
                centerX: string | number;
                centerY: string | number;
                radius: string | number;
                focalAngle: string | number;
                focalDistance: string | number;
            };
            id: string;
        } | {
            title: string;
            disabled?: boolean | undefined;
            hidden?: boolean | undefined;
            defaultValue: string;
            type: "image";
            id: string;
        } | {
            title: string;
            disabled?: boolean | undefined;
            hidden?: boolean | undefined;
            type: "checkbox";
            defaultValue: boolean;
            id: string;
        } | {
            title: string;
            disabled?: boolean | undefined;
            hidden?: boolean | undefined;
            type: "selection";
            defaultValue: string;
            selections: {
                id: string;
                title: string;
            }[];
            id: string;
        } | {
            title: string;
            disabled?: boolean | undefined;
            hidden?: boolean | undefined;
            type: "button";
            defaultValue?: undefined;
            id: string;
        } | {
            title: string;
            disabled?: boolean | undefined;
            hidden?: boolean | undefined;
            defaultValue: string;
            type: "composition";
            id: string;
        } | {
            title: string;
            disabled?: boolean | undefined;
            hidden?: boolean | undefined;
            type: "timecontrol";
            defaultValue: {
                ms: number;
                UTC: number;
                isRunning: boolean;
            };
            id: string;
        } | {
            width: "double" | "single";
            toolTip: string;
            childIds: string[];
            activeID?: string | undefined;
            id: string;
        })[];
        groups: ({
            title: string;
            disabled?: boolean | undefined;
            hidden?: boolean | undefined;
            defaultValue: string;
            type: "label";
            id: string;
        } | {
            title: string;
            disabled?: boolean | undefined;
            hidden?: boolean | undefined;
            defaultValue: string;
            type: "text";
            id: string;
        } | {
            title: string;
            disabled?: boolean | undefined;
            hidden?: boolean | undefined;
            defaultValue: string;
            type: "textarea";
            rows: number;
            cols: number;
            id: string;
        } | {
            title: string;
            disabled?: boolean | undefined;
            hidden?: boolean | undefined;
            defaultValue: {
                fontData: {
                    family: string;
                    weight: string;
                };
                alignment: Alignment;
                italic: boolean;
                underline: boolean;
            };
            type: "font";
            id: string;
        } | {
            title: string;
            disabled?: boolean | undefined;
            hidden?: boolean | undefined;
            defaultValue: string;
            type: "json";
            width: number;
            height: number;
            id: string;
        } | {
            title: string;
            disabled?: boolean | undefined;
            hidden?: boolean | undefined;
            type: "number";
            defaultValue: number;
            min?: number | undefined;
            max?: number | undefined;
            step?: number | undefined;
            unit?: string | undefined;
            format?: string | undefined;
            id: string;
        } | {
            title: string;
            disabled?: boolean | undefined;
            hidden?: boolean | undefined;
            type: "color";
            defaultValue: Tinycolor;
            id: string;
        } | {
            title: string;
            disabled?: boolean | undefined;
            hidden?: boolean | undefined;
            type: "gradient";
            defaultValue: {
                type: "solid" | "linear" | "radial";
                solidColor: Tinycolor;
                stops: {
                    color: `#${string}`;
                    offset: number;
                    opacity: number;
                }[];
                offset: string | number;
                angle: string | number;
                scale: string | number;
                spreadMethod: "pad" | "reflect" | "repeat";
                keepAspect: boolean;
                centerX: string | number;
                centerY: string | number;
                radius: string | number;
                focalAngle: string | number;
                focalDistance: string | number;
            };
            id: string;
        } | {
            title: string;
            disabled?: boolean | undefined;
            hidden?: boolean | undefined;
            defaultValue: string;
            type: "image";
            id: string;
        } | {
            title: string;
            disabled?: boolean | undefined;
            hidden?: boolean | undefined;
            type: "checkbox";
            defaultValue: boolean;
            id: string;
        } | {
            title: string;
            disabled?: boolean | undefined;
            hidden?: boolean | undefined;
            type: "selection";
            defaultValue: string;
            selections: {
                id: string;
                title: string;
            }[];
            id: string;
        } | {
            title: string;
            disabled?: boolean | undefined;
            hidden?: boolean | undefined;
            type: "button";
            defaultValue?: undefined;
            id: string;
        } | {
            title: string;
            disabled?: boolean | undefined;
            hidden?: boolean | undefined;
            defaultValue: string;
            type: "composition";
            id: string;
        } | {
            title: string;
            disabled?: boolean | undefined;
            hidden?: boolean | undefined;
            type: "timecontrol";
            defaultValue: {
                ms: number;
                UTC: number;
                isRunning: boolean;
            };
            id: string;
        } | {
            width: "double" | "single";
            toolTip: string;
            childIds: string[];
            activeID?: string | undefined;
            id: string;
            title: string;
        })[];
    };
} | {
    model: {
        fields: ({
            title: string;
            disabled?: boolean | undefined;
            hidden?: boolean | undefined;
            defaultValue: string;
            type: "label";
            id: string;
        } | {
            title: string;
            disabled?: boolean | undefined;
            hidden?: boolean | undefined;
            defaultValue: string;
            type: "text";
            id: string;
        } | {
            title: string;
            disabled?: boolean | undefined;
            hidden?: boolean | undefined;
            defaultValue: string;
            type: "textarea";
            rows: number;
            cols: number;
            id: string;
        } | {
            title: string;
            disabled?: boolean | undefined;
            hidden?: boolean | undefined;
            defaultValue: {
                fontData: {
                    family: string;
                    weight: string;
                };
                alignment: Alignment;
                italic: boolean;
                underline: boolean;
            };
            type: "font";
            id: string;
        } | {
            title: string;
            disabled?: boolean | undefined;
            hidden?: boolean | undefined;
            defaultValue: string;
            type: "json";
            width: number;
            height: number;
            id: string;
        } | {
            title: string;
            disabled?: boolean | undefined;
            hidden?: boolean | undefined;
            type: "number";
            defaultValue: number;
            min?: number | undefined;
            max?: number | undefined;
            step?: number | undefined;
            unit?: string | undefined;
            format?: string | undefined;
            id: string;
        } | {
            title: string;
            disabled?: boolean | undefined;
            hidden?: boolean | undefined;
            type: "color";
            defaultValue: Tinycolor;
            id: string;
        } | {
            title: string;
            disabled?: boolean | undefined;
            hidden?: boolean | undefined;
            type: "gradient";
            defaultValue: {
                type: "solid" | "linear" | "radial";
                solidColor: Tinycolor;
                stops: {
                    color: `#${string}`;
                    offset: number;
                    opacity: number;
                }[];
                offset: string | number;
                angle: string | number;
                scale: string | number;
                spreadMethod: "pad" | "reflect" | "repeat";
                keepAspect: boolean;
                centerX: string | number;
                centerY: string | number;
                radius: string | number;
                focalAngle: string | number;
                focalDistance: string | number;
            };
            id: string;
        } | {
            title: string;
            disabled?: boolean | undefined;
            hidden?: boolean | undefined;
            defaultValue: string;
            type: "image";
            id: string;
        } | {
            title: string;
            disabled?: boolean | undefined;
            hidden?: boolean | undefined;
            type: "checkbox";
            defaultValue: boolean;
            id: string;
        } | {
            title: string;
            disabled?: boolean | undefined;
            hidden?: boolean | undefined;
            type: "selection";
            defaultValue: string;
            selections: {
                id: string;
                title: string;
            }[];
            id: string;
        } | {
            title: string;
            disabled?: boolean | undefined;
            hidden?: boolean | undefined;
            type: "button";
            defaultValue?: undefined;
            id: string;
        } | {
            title: string;
            disabled?: boolean | undefined;
            hidden?: boolean | undefined;
            defaultValue: string;
            type: "composition";
            id: string;
        } | {
            title: string;
            disabled?: boolean | undefined;
            hidden?: boolean | undefined;
            type: "timecontrol";
            defaultValue: {
                ms: number;
                UTC: number;
                isRunning: boolean;
            };
            id: string;
        } | {
            width: "double" | "single";
            toolTip: string;
            childIds: string[];
            activeID?: string | undefined;
            id: string;
        })[];
        groups?: undefined;
    };
};
export declare function childIds<T extends Record<string, UIFieldDefinition>>(fields: T, include?: (keyof T)[]): (keyof T)[];
export declare function fieldsToEntries(collection: Record<string, UIFieldDefinition | UIGroupDefinition>): ({
    title: string;
    disabled?: boolean | undefined;
    hidden?: boolean | undefined;
    defaultValue: string;
    type: "label";
    id: string;
} | {
    title: string;
    disabled?: boolean | undefined;
    hidden?: boolean | undefined;
    defaultValue: string;
    type: "text";
    id: string;
} | {
    title: string;
    disabled?: boolean | undefined;
    hidden?: boolean | undefined;
    defaultValue: string;
    type: "textarea";
    rows: number;
    cols: number;
    id: string;
} | {
    title: string;
    disabled?: boolean | undefined;
    hidden?: boolean | undefined;
    defaultValue: {
        fontData: {
            family: string;
            weight: string;
        };
        alignment: Alignment;
        italic: boolean;
        underline: boolean;
    };
    type: "font";
    id: string;
} | {
    title: string;
    disabled?: boolean | undefined;
    hidden?: boolean | undefined;
    defaultValue: string;
    type: "json";
    width: number;
    height: number;
    id: string;
} | {
    title: string;
    disabled?: boolean | undefined;
    hidden?: boolean | undefined;
    type: "number";
    defaultValue: number;
    min?: number | undefined;
    max?: number | undefined;
    step?: number | undefined;
    unit?: string | undefined;
    format?: string | undefined;
    id: string;
} | {
    title: string;
    disabled?: boolean | undefined;
    hidden?: boolean | undefined;
    type: "color";
    defaultValue: Tinycolor;
    id: string;
} | {
    title: string;
    disabled?: boolean | undefined;
    hidden?: boolean | undefined;
    type: "gradient";
    defaultValue: {
        type: "solid" | "linear" | "radial";
        solidColor: Tinycolor;
        stops: {
            color: `#${string}`;
            offset: number;
            opacity: number;
        }[];
        offset: string | number;
        angle: string | number;
        scale: string | number;
        spreadMethod: "pad" | "reflect" | "repeat";
        keepAspect: boolean;
        centerX: string | number;
        centerY: string | number;
        radius: string | number;
        focalAngle: string | number;
        focalDistance: string | number;
    };
    id: string;
} | {
    title: string;
    disabled?: boolean | undefined;
    hidden?: boolean | undefined;
    defaultValue: string;
    type: "image";
    id: string;
} | {
    title: string;
    disabled?: boolean | undefined;
    hidden?: boolean | undefined;
    type: "checkbox";
    defaultValue: boolean;
    id: string;
} | {
    title: string;
    disabled?: boolean | undefined;
    hidden?: boolean | undefined;
    type: "selection";
    defaultValue: string;
    selections: {
        id: string;
        title: string;
    }[];
    id: string;
} | {
    title: string;
    disabled?: boolean | undefined;
    hidden?: boolean | undefined;
    type: "button";
    defaultValue?: undefined;
    id: string;
} | {
    title: string;
    disabled?: boolean | undefined;
    hidden?: boolean | undefined;
    defaultValue: string;
    type: "composition";
    id: string;
} | {
    title: string;
    disabled?: boolean | undefined;
    hidden?: boolean | undefined;
    type: "timecontrol";
    defaultValue: {
        ms: number;
        UTC: number;
        isRunning: boolean;
    };
    id: string;
} | {
    width: "double" | "single";
    toolTip: string;
    childIds: string[];
    activeID?: string | undefined;
    id: string;
})[];
export declare function groupsToEntries(collection: Record<string, UIFieldDefinition | UIGroupDefinition>): ({
    title: string;
    disabled?: boolean | undefined;
    hidden?: boolean | undefined;
    defaultValue: string;
    type: "label";
    id: string;
} | {
    title: string;
    disabled?: boolean | undefined;
    hidden?: boolean | undefined;
    defaultValue: string;
    type: "text";
    id: string;
} | {
    title: string;
    disabled?: boolean | undefined;
    hidden?: boolean | undefined;
    defaultValue: string;
    type: "textarea";
    rows: number;
    cols: number;
    id: string;
} | {
    title: string;
    disabled?: boolean | undefined;
    hidden?: boolean | undefined;
    defaultValue: {
        fontData: {
            family: string;
            weight: string;
        };
        alignment: Alignment;
        italic: boolean;
        underline: boolean;
    };
    type: "font";
    id: string;
} | {
    title: string;
    disabled?: boolean | undefined;
    hidden?: boolean | undefined;
    defaultValue: string;
    type: "json";
    width: number;
    height: number;
    id: string;
} | {
    title: string;
    disabled?: boolean | undefined;
    hidden?: boolean | undefined;
    type: "number";
    defaultValue: number;
    min?: number | undefined;
    max?: number | undefined;
    step?: number | undefined;
    unit?: string | undefined;
    format?: string | undefined;
    id: string;
} | {
    title: string;
    disabled?: boolean | undefined;
    hidden?: boolean | undefined;
    type: "color";
    defaultValue: Tinycolor;
    id: string;
} | {
    title: string;
    disabled?: boolean | undefined;
    hidden?: boolean | undefined;
    type: "gradient";
    defaultValue: {
        type: "solid" | "linear" | "radial";
        solidColor: Tinycolor;
        stops: {
            color: `#${string}`;
            offset: number;
            opacity: number;
        }[];
        offset: string | number;
        angle: string | number;
        scale: string | number;
        spreadMethod: "pad" | "reflect" | "repeat";
        keepAspect: boolean;
        centerX: string | number;
        centerY: string | number;
        radius: string | number;
        focalAngle: string | number;
        focalDistance: string | number;
    };
    id: string;
} | {
    title: string;
    disabled?: boolean | undefined;
    hidden?: boolean | undefined;
    defaultValue: string;
    type: "image";
    id: string;
} | {
    title: string;
    disabled?: boolean | undefined;
    hidden?: boolean | undefined;
    type: "checkbox";
    defaultValue: boolean;
    id: string;
} | {
    title: string;
    disabled?: boolean | undefined;
    hidden?: boolean | undefined;
    type: "selection";
    defaultValue: string;
    selections: {
        id: string;
        title: string;
    }[];
    id: string;
} | {
    title: string;
    disabled?: boolean | undefined;
    hidden?: boolean | undefined;
    type: "button";
    defaultValue?: undefined;
    id: string;
} | {
    title: string;
    disabled?: boolean | undefined;
    hidden?: boolean | undefined;
    defaultValue: string;
    type: "composition";
    id: string;
} | {
    title: string;
    disabled?: boolean | undefined;
    hidden?: boolean | undefined;
    type: "timecontrol";
    defaultValue: {
        ms: number;
        UTC: number;
        isRunning: boolean;
    };
    id: string;
} | {
    width: "double" | "single";
    toolTip: string;
    childIds: string[];
    activeID?: string | undefined;
    id: string;
    title: string;
})[];
export declare function parseOnValueProperty(value: any, definition: WidenDefaults<UIFieldDefinition>): any;
declare type GradientSettings = GradientField['defaultValue'];
declare type SolidGradientSettings = {
    color: `#${string}` | Tinycolor;
};
declare type LinearGradientSettings = {
    stops: GradientSettings['stops'];
} & Partial<Pick<GradientSettings, 'offset' | 'angle' | 'scale' | 'spreadMethod' | 'keepAspect'>>;
declare type RadialGradientSettings = {
    stops: GradientSettings['stops'];
} & Partial<Pick<GradientSettings, 'centerX' | 'centerY' | 'radius' | 'spreadMethod' | 'focalAngle' | 'focalDistance' | 'keepAspect'>>;
declare type GradientFieldSettings = {
    solid: SolidGradientSettings;
    linear: LinearGradientSettings;
    radial: RadialGradientSettings;
};
export declare function gradientField<T extends keyof GradientFieldSettings>(type: T, { title, disabled, hidden, ..._settings }: GradientFieldSettings[T] & BasicField): GradientField;
export declare type GetButtonFields<T> = keyof {
    [K in keyof T as T[K] extends Record<'defaultValue', unknown> ? never : K]: T[K];
};
export declare type GetTransientFields<T> = keyof {
    [K in keyof T as T[K] extends Record<'defaultValue', unknown> ? never : K extends `show${string}` ? K : never]: T[K];
};
export declare type GetControlFields<T> = Expand<{
    [K in keyof T as T[K] extends Record<'defaultValue', unknown> ? K : never]: T[K] extends Record<'defaultValue', infer T> ? WidenDefaults<T> : never;
}>;
declare type WidenDefaults<T> = T extends boolean ? boolean : T extends Record<'alignment', string> ? {
    [K in keyof T]: K extends 'alignment' ? Alignment : T[K];
} : T;
declare type AllKeys<T> = T extends unknown ? keyof T : never;
declare type AddMissingProps<T, K extends PropertyKey = AllKeys<T>> = T extends unknown ? T & Record<Exclude<K, keyof T>, never> : never;
export declare type MergeProps<T> = {
    [K in keyof AddMissingProps<T>]: AddMissingProps<T>[K];
};
export {};
