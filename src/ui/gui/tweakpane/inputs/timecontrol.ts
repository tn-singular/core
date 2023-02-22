import type { DeepSignalType } from '@deepsignal/core'
import { batch } from '@preact/signals-core'
import type { FolderApi } from 'tweakpane'

import type { UIField } from '../../../types/fields'

type TimecontrolValue = Extract<UIField, { type: 'timecontrol' }>['defaultValue']

export function addTimecontrolInput({
  folder,
  field,
  controls,
}: {
  folder: FolderApi
  field: UIField
  controls: DeepSignalType<Record<string, TimecontrolValue>>
}) {
  const opts = field.defaultValue as TimecontrolValue
  const startStop = folder.addButton({ title: 'start', label: field.title })
  const reset = folder.addButton({ title: 'reset', label: field.title })

  startStop.on('click', () => {
    const isRunning = opts.isRunning
    const UTC = opts.UTC
    const now = Date.now()

    if (isRunning) {
      // we need to stop the timer
      batch(() => {
        controls[field.id].isRunning.value = false
        controls[field.id].UTC.value = now
        controls[field.id].ms.value = now - UTC
      })

      startStop.title = 'start'
    } else {
      // we need to start the timer
      batch(() => {
        controls[field.id].isRunning.value = true
        controls[field.id].UTC.value = now
      })
      // dont update ms as in this state we must have been paused previously

      startStop.title = 'stop'
    }
  })

  reset.on('click', () => {
    // stop the timer and reset value
    batch(() => {
      controls[field.id].isRunning.value = false
      controls[field.id].UTC.value = Date.now()
      controls[field.id].ms.value = 0
    })

    startStop.title = 'start'
  })

  return undefined
}
