import type { UIFieldInputRecord, UIFieldRecord } from './fields'
import type { Expand } from '../../types/utils'

export type UIGroupInput = {
  title?: string
  width?: 'double' | 'single'
  tooltip?: string
  activeId?: keyof UIFieldInputRecord
  fields: UIFieldInputRecord
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
  tooltip: string
  /**
   * object containing the fields definitions
   */
  fields: UIFieldRecord
  /**
   * the ID of a `checkbox` field that will be shown in the header of the panel.
   * NOTE: The `checkbox` field has to be defined as part of the `fields` array before it is attached to a group using the activeID `definition`!
   */
  activeId?: string
}

export type UIGroupModel = Expand<
  Omit<UIGroup, 'fields'> & {
    /**
     * array containing the IDs of fields defined in the `fields` section.
     */
    childIds: string[]
  }
>
