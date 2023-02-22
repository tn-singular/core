import type { FolderApi } from 'tweakpane'

import type { UIFields } from '../../../types'

export function addNumberInput({
  folder,
  field,
}: {
  folder: FolderApi
  field: UIFields['number']
}) {
  return folder.addInput({ [field.id]: field.defaultValue }, field.id, {
    min: field.min,
    max: field.max,
    step: field.step,
    label: field.title,
  })
}
