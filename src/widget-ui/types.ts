import type { ui } from './builders'
import type { DistributiveOmit, Serializable, WidenBoolean } from '../types/utils'

export type WidenFieldValue<T> = WidenBoolean<T>

export type Parser<T extends Serializable = Serializable> = (value?: Serializable) => T
export type Parsers = Record<string, Parser>

type ButtonCallback = (id: string) => void
export type ButtonHandlers<T extends string[] = string[]> = Record<T[number], ButtonCallback>

export type FieldInput<T> = Partial<Omit<T, 'id'>>

export type UIFields = {
  [K in keyof typeof ui]: ReturnType<(typeof ui)[K]>
}

export type UIField = UIFields[keyof UIFields]

export type UIFieldInput = FieldInput<UIFields[keyof UIFields]>

export type UIFieldsInput = DistributiveOmit<Partial<UIField>, 'id'>

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
