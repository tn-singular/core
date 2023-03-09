import type { Signal } from '@preact/signals-core'
import { batch } from '@preact/signals-core'
import type { FolderApi } from 'tweakpane'

import type { TimeControlField } from '../../../fields'
import type { TimeControlDefaultValue } from '../../../fields/timecontrol'

export function addTimecontrolInput({
  folder,
  field,
  controls,
}: {
  folder: FolderApi
  field: TimeControlField
  controls: Record<string, Signal<TimeControlDefaultValue>>
}) {
  const opts = field.defaultValue
  const startStop = folder.addButton({ title: 'start', label: field.title })
  const reset = folder.addButton({ title: 'reset', label: field.title })

  startStop.on('click', () => {
    const isRunning = opts.isRunning
    const UTC = opts.UTC
    const now = Date.now()

    if (isRunning) {
      // we need to stop the timer
      batch(() => {
        controls[field.id].value = {
          isRunning: false,
          UTC: now,
          ms: now - UTC,
        }
      })

      startStop.title = 'start'
    } else {
      // we need to start the timer
      batch(() => {
        controls[field.id].value = {
          isRunning: false,
          UTC: now,
          ms: controls[field.id].peek().ms,
        }
      })
      // dont update ms as in this state we must have been paused previously

      startStop.title = 'stop'
    }
  })

  reset.on('click', () => {
    // stop the timer and reset value
    batch(() => {
      controls[field.id].value = {
        isRunning: false,
        UTC: Date.now(),
        ms: 0,
      }
    })

    startStop.title = 'start'
  })

  return undefined
}
