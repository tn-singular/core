import type { FolderApi } from 'tweakpane'

import type { NumberField } from '../../../fields'

export function addNumberInput({ folder, field }: { folder: FolderApi; field: NumberField }) {
  return folder.addInput({ [field.id]: field.defaultValue }, field.id, {
    min: field.min,
    max: field.max,
    step: field.step,
    label: field.title,
  })
}
