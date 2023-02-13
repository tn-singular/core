import type { SingularAnimation } from './animation';
export declare type Tinycolor = {
    r: number;
    g: number;
    b: number;
    a: number;
};
export declare type SingularWidgetArgs = {
    onInit: (...args: unknown[]) => unknown;
    onValue: (json: Record<string, unknown>) => unknown;
    onButtonClicked: (buttonId: string) => unknown;
    onEditComp: (...args: unknown[]) => unknown;
    onAnimation?: (event: SingularAnimation['Event']) => unknown;
};
export declare type WidgetUI = {
    model: {
        fields: UIField[];
        groups?: UIGroup[];
    };
};
declare type UIGroup = UIGroupDefinition & {
    id: string;
};
export declare type UIGroupDefinition = {
    /**
     * identifier of the field. This must be unique
     */
    /**
     * text shown in the header of the UI panel
     */
    /**
     * defines the width of the panel
     * anything other than “double” defines a standard width panel
     */
    width: 'double' | 'single';
    /**
     * the tool tip text is shown on *mouseover* on the `i` icon
     */
    toolTip: string;
    /**
     * array containing the IDs of fields defined in the `fields` section.
     */
    childIds: string[];
    /**
     * the ID of a `checkbox` field that will be shown n the header of the panel.
     * NOTE: The `checkbox` field has to be defined as part of the `fields` array before it is attached to a group using the activeID `definition`!
     *
     * @example "useGroup"
     */
    activeID?: string;
};
export declare type UIField = UIFieldDefinition & {
    id: string;
};
export declare type UIFieldDefinition = LabelField | TextField | TextAreaField | FontField | JSONField | NumberField | ColorField | GradientField | ImageField | CheckboxField | SelectionsField | ButtonField | CompositionField | TimeControlField;
declare type StringDefaultValue = {
    /**
     * the value assigned to a field when a new instance of a widget is created
     */
    defaultValue: string;
};
declare type GradientDefaultValue = {
    type: 'solid' | 'linear' | 'radial';
    solidColor: Tinycolor;
    stops: {
        /**
         * hex
         */
        color: `#${string}`;
        /**
         * 0 - 1
         */
        offset: number;
        /**
         * 0 - 1
         */
        opacity: number;
    }[];
    offset: number;
    angle: number;
    scale: number;
    centerX: number;
    centerY: number;
    radius: number;
    focalAngle: number;
    focalDistance: number;
    spreadMethod: 'pad' | 'reflect' | 'repeat';
    keepAspect: boolean;
};
export declare type Alignment = 'left' | 'right' | 'center' | 'justfiy';
declare type FontDefaultValue = {
    /**
     * the value assigned to a field when a new instance of a widget is created
     */
    defaultValue: {
        fontData: {
            family: string;
            weight: string;
        };
        alignment: Alignment;
        italic: boolean;
        underline: boolean;
    };
};
export declare type BasicField = {
    /**
     * the identifier of the field. This must be unique
     */
    /**
     * the text shown in the user interface left to the input field
     */
    title: string;
    /**
     * fields can be disabled by default. Set this to true to disable the field
     */
    disabled?: boolean;
    /**
     * fields can be hidden in the user interface. Set this to true to hide the field
     */
    hidden?: boolean;
};
declare type LabelField = BasicField & Readonly<StringDefaultValue> & {
    /**
     * read only html text
     */
    type: 'label';
};
declare type TextField = BasicField & StringDefaultValue & {
    /**
     * single line text input field
     */
    type: 'text';
};
declare type TextAreaField = BasicField & StringDefaultValue & {
    /**
     * multi line text input field
     */
    type: 'textarea';
    /**
     * number of rows
     */
    rows: number;
    /**
     * number of columns
     */
    cols: number;
};
declare type FontField = BasicField & FontDefaultValue & {
    /**
     * font selector including font style
     */
    type: 'font';
};
declare type JSONField = BasicField & StringDefaultValue & {
    /**
     * JSON input field with syntax highlighting
     */
    type: 'json';
    /**
     * width in pixels
     */
    width: number;
    /**
     * height in pixels
     */
    height: number;
};
declare type NumberField = BasicField & {
    /**
     * number input field
     */
    type: 'number';
    /**
     * the value assigned to a field when a new instance of a widget is created
     */
    defaultValue: number;
    /**
     * minimum value allowed
     */
    min?: number;
    /**
     * maximum value allowed
     */
    max?: number;
    /**
     * step for value changes when using up and down arrows
     */
    step?: number;
    /**
     * show a unit string in the input field next to the number
     */
    unit?: string;
    /**
     * number format, defines how many digits are shown
     */
    format?: string;
};
declare type ColorField = BasicField & {
    /**
     * color selector
     */
    type: 'color';
    defaultValue: Tinycolor;
};
export declare type GradientField = BasicField & {
    /**
     * gradient selector to choose between color, linear or radial gradient
     */
    type: 'gradient';
    defaultValue: GradientDefaultValue;
};
declare type ImageField = BasicField & StringDefaultValue & {
    /**
     * image selector
     */
    type: 'image';
};
declare type CheckboxField = BasicField & {
    /**
     * on / off selector
     */
    type: 'checkbox';
    /**
     * the value assigned to a field when a new instance of a widget is created
     */
    defaultValue: boolean;
};
declare type SelectionsField = BasicField & {
    /**
     * array with strings the user can select
     */
    type: 'selection';
    /**
     * the value assigned to a field when a new instance of a widget is created
     */
    defaultValue: string;
    selections: {
        /**
         * option id
         */
        id: string;
        /**
         * option title
         */
        title: string;
    }[];
};
declare type ButtonField = BasicField & {
    /**
     * push button
     */
    type: 'button';
    defaultValue?: never;
};
declare type CompositionField = BasicField & StringDefaultValue & {
    /**
     * select a composition instance
     */
    type: 'composition';
};
declare type TimeControlField = BasicField & {
    type: 'timecontrol';
    defaultValue: {
        ms: number;
        UTC: number;
        isRunning: boolean;
    };
};
export {};
