import type { Expand, Serializable, SetOptional, Tinycolor } from '../../types/utils'
import type { uiDefaults } from '../defaults'
import type { Parser } from '../parsers/parsers'

const fieldTypes = [
  'label',
  'text',
  'textarea',
  'info',
  'font',
  'json',
  'number',
  'color',
  'gradient',
  'image',
  'checkbox',
  'selection',
  'button',
  'composition',
  'timecontrol',
] as const
export type FieldTypes = (typeof fieldTypes)[number]

export type UIFieldInputRecord = Record<string, UIFieldInput>
export type UIFieldRecord = Record<string, UIField>

export type UIFieldInput = Expand<
  | LabelFieldInput
  | TextFieldInput
  | TextAreaFieldInput
  | InfoFieldInput
  | FontFieldInput
  | JSONFieldInput
  | NumberFieldInput
  | ColorFieldInput
  | GradientFieldInput
  | ImageFieldInput
  | CheckboxFieldInput
  | SelectionFieldInput
  | ButtonFieldInput
  | CompositionFieldInput
  | TimeControlFieldInput
>

export type UIField = Expand<
  | LabelField
  | TextField
  | TextAreaField
  | InfoField
  | FontField
  | JSONField
  | NumberField
  | ColorField
  | GradientField
  | ImageField
  | CheckboxField
  | SelectionField
  | ButtonField
  | CompositionField
  | TimeControlField
>

export type UIFieldModel = Expand<Omit<UIField, 'parser'>>

export type Alignment = 'left' | 'right' | 'center' | 'justify'

type LabelFieldInput = SetOptional<Omit<LabelField, 'id'>, keyof typeof uiDefaults.fields.label>
type LabelField = {
  id: string
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

  /**
   * read only html text
   */
  type: 'label'
  defaultValue: string
  parser?: Parser
}

type TextFieldInput = SetOptional<Omit<TextField, 'id'>, keyof typeof uiDefaults.fields.text>
type TextField = {
  id: string

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

  /**
   * single line text input field
   */
  type: 'text'

  defaultValue: string
  parser?: Parser
}

type InfoFieldInput = SetOptional<Omit<InfoField, 'id'>, keyof typeof uiDefaults.fields.info>
type InfoField = {
  id: string

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

  /**
   * Multiline Info text which appears on UNO control apps
   */
  type: 'text'

  defaultValue: string
  parser?: Parser
}

type TextAreaFieldInput = SetOptional<
  Omit<TextAreaField, 'id'>,
  keyof typeof uiDefaults.fields.textarea
>
type TextAreaField = {
  id: string

  defaultValue: string

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
  parser?: Parser
}

type FontFieldInput = SetOptional<Omit<FontField, 'id'>, keyof typeof uiDefaults.fields.font>
type FontField = {
  id: string

  defaultValue: {
    fontData: { family: string; weight: string }
    alignment: Alignment
    italic: boolean
    underline: boolean
  }

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

  /**
   * font selector including font style
   */
  type: 'font'
  parser: Parser<Serializable, FontField['defaultValue']>
}

type JSONFieldInput = SetOptional<Omit<JSONField, 'id'>, keyof typeof uiDefaults.fields.json>
type JSONField = {
  id: string

  defaultValue: string

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
  parser?: Parser
}

type NumberFieldInput = SetOptional<Omit<NumberField, 'id'>, keyof typeof uiDefaults.fields.number>
type NumberField = {
  id: string

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
  parser?: Parser
}

type ColorFieldInput = SetOptional<Omit<ColorField, 'id'>, keyof typeof uiDefaults.fields.color>
type ColorField = {
  id: string

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

  /**
   * color selector
   */
  type: 'color'
  defaultValue: Tinycolor
  parser: Parser<Serializable, Tinycolor>
}

type GradientFieldInput = SetOptional<
  Omit<GradientField, 'id'>,
  keyof typeof uiDefaults.fields.gradient
>
export type GradientField = {
  id: string

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

  /**
   * gradient selector to choose between color, linear or radial gradient
   */
  type: 'gradient'
  defaultValue: {
    type: 'solid' | 'linear' | 'radial'
    solidColor: Tinycolor
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

    offset: number
    angle: number
    scale: number
    centerX: number
    centerY: number
    radius: number
    focalAngle: number
    focalDistance: number

    spreadMethod: 'pad' | 'reflect' | 'repeat'
    keepAspect: boolean
  }
  parser: Parser<Serializable, string>
}

type ImageFieldInput = SetOptional<Omit<ImageField, 'id'>, keyof typeof uiDefaults.fields.image>
type ImageField = {
  id: string

  defaultValue: string

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

  /**
   * image selector
   */
  type: 'image'
  parser?: Parser
}

type CheckboxFieldInput = SetOptional<
  Omit<CheckboxField, 'id'>,
  keyof typeof uiDefaults.fields.checkbox
>
type CheckboxField = {
  id: string

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

  /**
   * on / off selector
   */
  type: 'checkbox'
  /**
   * the value assigned to a field when a new instance of a widget is created
   */
  defaultValue: boolean
}

type SelectionFieldInput = SetOptional<
  Omit<SelectionField, 'id'>,
  keyof typeof uiDefaults.fields.selection
>
type SelectionField = {
  id: string

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
  parser?: Parser
}

type ButtonFieldInput = SetOptional<Omit<ButtonField, 'id'>, keyof typeof uiDefaults.fields.button>
type ButtonField = {
  id: string

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
  defaultValue?: never

  /**
   * push button
   */
  type: 'button'
}

type CompositionFieldInput = SetOptional<
  Omit<CompositionField, 'id'>,
  keyof typeof uiDefaults.fields.composition
>
type CompositionField = {
  id: string

  defaultValue: string

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

  /**
   * select a composition instance
   */
  type: 'composition'
  parser?: Parser
}

type TimeControlFieldInput = SetOptional<
  Omit<TimeControlField, 'id'>,
  keyof typeof uiDefaults.fields.timecontrol
>
type TimeControlField = {
  id: string

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

  type: 'timecontrol'
  defaultValue: {
    ms: number
    UTC: number
    isRunning: boolean
  }
  parser?: Parser
}
