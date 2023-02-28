import type {
  ButtonField,
  CheckboxField,
  ColorField,
  FontField,
  GradientField,
  ImageField,
  InfoField,
  JSONField,
  NumberField,
  SelectionField,
  TextField,
  TextAreaField,
  TimeControlField,
  ButtonFieldInput,
  CheckboxFieldInput,
  ColorFieldInput,
  FontFieldInput,
  GradientFieldInput,
  ImageFieldInput,
  InfoFieldInput,
  JSONFieldInput,
  NumberFieldInput,
  SelectionFieldInput,
  TextAreaFieldInput,
  TextFieldInput,
  TimeControlFieldInput,
} from './fields'
import type { Serializable } from '../types/utils'

export type Parser<T extends Serializable = Serializable> = (value?: Serializable) => T
export type Parsers = Record<string, Parser>

type ButtonCallback = (id: string) => void
export type ButtonHandlers<T extends string[] = string[]> = Record<T[number], ButtonCallback>

interface UIFieldInputs {
  button: ButtonFieldInput
  checkbox: CheckboxFieldInput
  color: ColorFieldInput
  font: FontFieldInput
  gradient: GradientFieldInput
  image: ImageFieldInput
  info: InfoFieldInput
  json: JSONFieldInput
  number: NumberFieldInput
  selection: SelectionFieldInput
  text: TextFieldInput
  textarea: TextAreaFieldInput
  timecontrol: TimeControlFieldInput
}

export interface UIFields {
  button: ButtonField
  checkbox: CheckboxField
  color: ColorField
  font: FontField
  gradient: GradientField
  image: ImageField
  info: InfoField
  json: JSONField
  number: NumberField
  selection: SelectionField
  text: TextField
  textarea: TextAreaField
  timecontrol: TimeControlField
}

export type UIField = UIFields[keyof UIFields]

export type UIFieldInput = UIFieldInputs[keyof UIFieldInputs]

export type UIGroupInput = Partial<Omit<UIGroup, 'childIds'>> & {
  /**
   * object containing the fields definitions
   */
  fields: Record<string, UIField>
}

export type UIGroup = {
  id: string

  /**
   * text shown in the header of the UI panel
   */
  title: string

  /**
   * defines the width of the panel
   * anything other than “double” defines a standard width panel
   */
  width: 'double' | 'single'

  /**
   * the tool tip text is shown on *mouseover* on the `i` icon
   */
  tooltip?: string

  /**
   * array containing the IDs of fields defined in the `fields` section.
   */
  childIds: string[]

  /**
   * the ID of a `checkbox` field that will be shown in the header of the panel.
   * NOTE: The `checkbox` field has to be defined as part of the `fields` array before it is attached to a group using the activeId `definition`!
   */
  activeId?: string
}

export type Model = {
  fields: Omit<UIField, 'parser'>[]
  groups: UIGroup[]
}
