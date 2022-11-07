import type { SingularAnimation } from './animation'

export type Tinycolor = { r: number; g: number; b: number; a: number }

export type SingularWidgetArgs = {
  onInit: (...args: unknown[]) => unknown
  onValue: (json: Record<string, unknown>) => unknown
  onButtonClicked: (buttonId: string) => unknown
  onEditComp: (...args: unknown[]) => unknown
  onAnimation: (event: SingularAnimation['Event']) => unknown
}

export type WidgetUI = {
  model: {
    fields: UIField[]
    groups?: UIGroup[]
  }
}

type UIGroup = UIGroupDefinition & { id: string }
export type UIGroupDefinition = {
  /**
   * identifier of the field. This must be unique
   */
  // id: string;
  /**
   * text shown in the header of the UI panel
   */
  // title: string;
  /**
   * defines the width of the panel
   * anything other than “double” defines a standard width panel
   */
  width: 'double' | 'single'
  /**
   * the tool tip text is shown on *mouseover* on the `i` icon
   */
  toolTip: string
  /**
   * array containing the IDs of fields defined in the `fields` section.
   */
  childIds: string[]
  /**
   * the ID of a `checkbox` field that will be shown n the header of the panel.
   * NOTE: The `checkbox` field has to be defined as part of the `fields` array before it is attached to a group using the activeID `definition`!
   *
   * @example "useGroup"
   */
  activeID?: string
}

export type UIField = UIFieldDefinition & { id: string }
export type UIFieldDefinition =
  | LabelField
  | TextField
  | TextAreaField
  | FontField
  | JSONField
  | NumberField
  | ColorField
  | GradientField
  | ImageField
  | CheckboxField
  | SelectionsField
  | ButtonField
  | CompositionField
  | TimeControlField

type StringDefaultValue = {
  /**
   * the value assigned to a field when a new instance of a widget is created
   */
  defaultValue: string
}

// type GradientSolid = {
//   type: 'solid';
//   solidcolor: Tinycolor;
// };

// type GradientLinear = {
//   type: 'linear';
//   stops: {
//     /**
//      * hex
//      */
//     color: `#${string}`;
//     /**
//      * 0 - 1
//      */
//     offset: number;
//     /**
//      * 0 - 1
//      */
//     opacity: number;
//   }[];
//   offset: string;
//   angle: string;
//   scale: string;
//   spreadMethod: 'pad' | 'reflect' | 'repeat';
//   keepAspect: true;
// };

// type GradientRadial = {
//   type: 'radial';
//   stops: {
//     /**
//      * hex
//      */
//     color: `#${string}`;
//     /**
//      * 0 - 1
//      */
//     offset: number;
//     /**
//      * 0 - 1
//      */
//     opacity: number;
//   }[];
//   centerX: string;
//   centerY: string;
//   radius: string;
//   spreadMethod: 'pad' | 'reflect' | 'repeat';
//   focalAngle: string;
//   focalDistance: string;
//   keepAspect: true;
// };

type GradientDefaultValue = Partial<{
  type: 'solid' | 'linear' | 'radial'
  solidcolor: Tinycolor

  stops: {
    /**
     * hex
     */
    color: `#${string}`
    /**
     * 0 - 1
     */
    offset: number
    /**
     * 0 - 1
     */
    opacity: number
  }[]
  offset: string
  angle: string
  scale: string
  spreadMethod: 'pad' | 'reflect' | 'repeat'
  keepAspect: true

  centerX: string
  centerY: string
  radius: string
  focalAngle: string
  focalDistance: string
}>

export type Alignment = 'left' | 'right' | 'center' | 'justfiy'
type FontDefaultValue = {
  /**
   * the value assigned to a field when a new instance of a widget is created
   */
  defaultValue: {
    fontData: { family: string; weight: string }
    alignment: Alignment
    italic: boolean
    underline: boolean
  }
}

type BasicField = {
  /**
   * the identifier of the field. This must be unique
   */
  // id: string;
  /**
   * the text shown in the user interface left to the input field
   */
  title: string
  /**
   * fields can be disabled by default. Set this to true to disable the field
   */
  disabled?: boolean
  /**
   * fields can be hidden in the user interface. Set this to true to hide the field
   */
  hidden?: boolean
}

type LabelField = BasicField &
  Readonly<StringDefaultValue> & {
    /**
     * read only html text
     */
    type: 'label'
  }

type TextField = BasicField &
  StringDefaultValue & {
    /**
     * single line text input field
     */
    type: 'text'
  }

type TextAreaField = BasicField &
  StringDefaultValue & {
    /**
     * multi line text input field
     */
    type: 'textarea'
    /**
     * number of rows
     */
    rows: number
    /**
     * number of columns
     */
    cols: number
  }

type FontField = BasicField &
  FontDefaultValue & {
    /**
     * font selector including font style
     */
    type: 'font'
    /**
     * undocumented
     */
    // hideUI?: boolean;
    /**
     * show/hide all style options
     */
    // style?: boolean;
    /**
     * show/hide bold option
     */
    // bold?: boolean;
    /**
     * show/hide italic option
     */
    // italic?: boolean;
    /**
     * show/hide underline option
     */
    // underline?: boolean;
    /**
     * show/hide alignment option
     */
    // alignment?: boolean;
  }

type JSONField = BasicField &
  StringDefaultValue & {
    /**
     * JSON input field with syntax highlighting
     */
    type: 'json'
    /**
     * width in pixels
     */
    width: number
    /**
     * height in pixels
     */
    height: number
  }

type NumberField = BasicField & {
  /**
   * number input field
   */
  type: 'number'
  /**
   * the value assigned to a field when a new instance of a widget is created
   */
  defaultValue: number
  /**
   * minimum value allowed
   */
  min?: number
  /**
   * maximum value allowed
   */
  max?: number
  /**
   * step for value changes when using up and down arrows
   */
  step?: number
  /**
   * show a unit string in the input field next to the number
   */
  unit?: string
  /**
   * number format, defines how many digits are shown
   */
  format?: string
}

type ColorField = BasicField & {
  /**
   * color selector
   */
  type: 'color'
  defaultValue: Tinycolor
}

type GradientField = BasicField &
  GradientDefaultValue & {
    /**
     * gradient selector to choose between color, linear or radial gradient
     */
    type: 'gradient'
  }

type ImageField = BasicField &
  StringDefaultValue & {
    /**
     * image selector
     */
    type: 'image'
  }

type CheckboxField = BasicField & {
  /**
   * on / off selector
   */
  type: 'checkbox'
  /**
   * the value assigned to a field when a new instance of a widget is created
   */
  defaultValue: boolean
}

type SelectionsField = BasicField & {
  /**
   * array with strings the user can select
   */
  type: 'selection'
  /**
   * the value assigned to a field when a new instance of a widget is created
   */
  defaultValue: string

  selections: {
    /**
     * option id
     */
    id: string
    /**
     * option title
     */
    title: string
  }[]
}

type ButtonField = BasicField & {
  /**
   * push button
   */
  type: 'button'
  defaultValue?: never
}

type CompositionField = BasicField &
  StringDefaultValue & {
    /**
     * select a composition instance
     */
    type: 'composition'
  }

type TimeControlField = BasicField & {
  type: 'timecontrol'
  defaultValue: {
    ms: number
    UTC: number
    isRunning: boolean
  }
}
