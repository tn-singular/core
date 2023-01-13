import { batch as batchSignals } from '@preact/signals'
import type { FolderApi } from '@tweakpane/core'

import type { UIFieldDefinition, UIGroupDefinition } from '../../types/widget'

type RootApi = FolderApi & {
  importPreset(preset: Record<string, unknown>): void
  exportPreset(): Record<string, unknown>
  refresh(): void
}

function get(obj: Record<string, unknown> & { peek?: () => Record<string, unknown> }) {
  return obj.peek ? obj.peek() : obj
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function set(obj: any, value: unknown) {
  return obj && typeof obj === 'object' && 'value' in obj ? (obj.value = value) : (obj = value)
}

function batch(update: () => void, useSignals: boolean) {
  if (useSignals) {
    batchSignals(update)
  } else {
    update()
  }
}

export function addTweakpaneInputs({
  controls,
  pane,
  fields,
  groups,
  useSignals = false,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  controls: any
  pane: RootApi
  fields: Record<string, UIFieldDefinition>
  groups: Record<string, UIGroupDefinition>
  useSignals?: boolean
}) {
  const folders: FolderApi[] = []

  const stateFolder = pane.addFolder({ title: 'STATE' })
  const stateInput = stateFolder.addInput(get(controls), 'in', { label: 'IN' })
  stateInput.on('change', (val) => {
    set(controls.in, val.value)
  })

  for (const [groupName, { childIds }] of Object.entries(groups)) {
    const folder = pane.addFolder({
      title: groupName,
      expanded: groupName === 'Controls',
    })

    for (const fieldName of childIds) {
      const field = fields[fieldName]
      if (!field) {
        console.warn(`No field found for ${fieldName}`)
        continue
      }

      switch (field.type) {
        case 'number': {
          const input = folder.addInput(get(controls), fieldName, {
            min: field.max === undefined ? undefined : field.min,
            max: field.min === undefined ? undefined : field.max,
            step: field.step,
          })
          input.on('change', (val) => {
            set(controls[fieldName], val.value)
          })

          break
        }

        case 'font': {
          const fontFolder = folder.addFolder({
            title: fieldName,
            expanded: false,
          })
          fontFolder.addInput(get(controls[fieldName]), 'alignment', {
            label: 'alignment',
            options: {
              left: 'left',
              center: 'center',
              right: 'right',
              justify: 'justify',
            },
          })
          fontFolder.addInput(get(controls[fieldName]), 'italic', {
            label: 'italic',
          })
          fontFolder.addInput(get(controls[fieldName]), 'underline', {
            label: 'underline',
          })
          fontFolder.addInput(get(controls[fieldName].fontData), 'family', {
            label: 'family',
          })
          fontFolder.addInput(get(controls[fieldName].fontData), 'weight', {
            label: 'weight',
            options: {
              100: 100,
              200: 200,
              300: 300,
              400: 400,
              500: 500,
              600: 600,
              700: 700,
              800: 800,
              900: 900,
            },
          })

          fontFolder.on('change', (ev) => {
            if (!ev.presetKey) return
            if (ev.presetKey === 'family' || ev.presetKey === 'weight') {
              set(controls[fieldName].fontData[ev.presetKey], ev.value)
            } else {
              set(controls[fieldName][ev.presetKey], ev.value)
            }
          })

          break
        }

        case 'selection': {
          const input = folder.addInput(get(controls), fieldName, {
            label: field.title,
            options: Object.fromEntries([
              ...field.selections.map((selection) => [selection.title, selection.id]),
            ]),
          })
          input.on('change', (val) => {
            set(controls[fieldName], val.value)
          })
          break
        }

        case 'timecontrol': {
          const startStop = folder.addButton({ title: 'start', label: fieldName })
          const reset = folder.addButton({ title: 'reset', label: fieldName })

          startStop.on('click', () => {
            const isRunning = get(controls[fieldName].isRunning)
            // TODO - better typing for get function to handle primitives
            const UTC = get(controls[fieldName].UTC) as unknown as number
            const now = Date.now()

            if (isRunning) {
              // we need to stop the timer
              batch(() => {
                set(controls[fieldName].isRunning, false)
                set(controls[fieldName].UTC, now)
                set(controls[fieldName].ms, now - UTC)
              }, useSignals)

              startStop.title = 'start'
            } else {
              // we need to start the timer
              batch(() => {
                set(controls[fieldName].isRunning, true)
                set(controls[fieldName].UTC, now)
              }, useSignals)
              // dont update ms as in this state we must have been paused previously

              startStop.title = 'stop'
            }
          })

          reset.on('click', () => {
            // stop the timer and reset value
            batch(() => {
              set(controls[fieldName].isRunning, false)
              set(controls[fieldName].UTC, Date.now())
              set(controls[fieldName].ms, 0)
            }, useSignals)

            startStop.title = 'start'
          })

          break
        }

        case 'button': {
          break
        }

        default: {
          try {
            const input = folder.addInput(get(controls), fieldName, {
              label: field.title,
            })
            input.on('change', (val) => {
              set(controls[fieldName], val.value)
            })
          } catch (e) {
            console.error(`Couldn't add input: ${JSON.stringify(field)} in group ${groupName}`)
          }
          break
        }
      }
    }

    folders.push(folder)
  }

  return { folders }
}

const tweakpaneStorageKey = 'zentrum-tweakpane'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function enableTweakpaneLocalStorage(pane: RootApi, defaults: any) {
  // Restoration
  const localData = localStorage.getItem(tweakpaneStorageKey)
  if (localData) {
    pane.importPreset(JSON.parse(localData))
  }

  // Storage on each change
  pane.on('change', () =>
    localStorage.setItem(tweakpaneStorageKey, JSON.stringify(pane.exportPreset()))
  )

  // const refresh = pane.addButton({ title: 'Refresh', label: '🍋', index: 0 });
  // refresh.on('click', () => pane.refresh());

  // Reset to defaults
  const reset = pane.addButton({ title: 'Reset', label: '✨', index: 0 })
  reset.on('click', () => pane.importPreset(defaults))
}
