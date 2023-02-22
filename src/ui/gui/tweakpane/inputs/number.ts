import type { FolderApi } from 'tweakpane'

import type { UIField } from '../../../types/fields'

type NumberValue = Extract<UIField, { type: 'number' }>

export function addNumberInput({ folder, field }: { folder: FolderApi; field: UIField }) {
  const opts = field as NumberValue
  return folder.addInput({ [field.id]: field.defaultValue }, field.id, {
    min: opts.min,
    max: opts.max,
    step: opts.step,
    label: field.title,
  })
}
