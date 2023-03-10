/* eslint-disable @typescript-eslint/no-explicit-any */

import { batch } from '@preact/signals-core'
import type { FolderApi, InputBindingApi, TpPluginBundle } from '@tweakpane/core'
import * as EssentialsPlugin from '@tweakpane/plugin-essentials'
import { Pane } from 'tweakpane'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore missing d.ts
import * as TweakpaneImagePlugin from 'tweakpane-image-plugin'

import { addFontInput } from './inputs/font'
import { addNumberInput } from './inputs/number'
import { addTimecontrolInput } from './inputs/timecontrol'
import type { Serializable } from '../../../types/utils'
import type { NumberField, SelectionField, TimeControlField } from '../../fields'
import type { Model, Parsers, ButtonHandlers } from '../../types'

export function addTweakpaneInputs({
  controls,
  model,
  parsers,
  buttonHandlers,
}: {
  controls: any
  model: Model
  parsers: Parsers
  buttonHandlers?: ButtonHandlers
}) {
  const pane = new Pane()

  pane.registerPlugin(TweakpaneImagePlugin as TpPluginBundle)
  pane.registerPlugin(EssentialsPlugin)
  const folders: FolderApi[] = []

  if ('in' in controls) {
    const stateFolder = pane.addFolder({ title: 'In / Out' })
    const stateInput = stateFolder.addInput({ in: controls.in.peek() }, 'in', { label: 'In' })

    stateInput.on('change', (val) => {
      controls.in.value = val.value
    })
  }

  const groupLookup: Record<string, number> = {}
  for (const [i, group] of model.groups.entries()) {
    const folder = pane.addFolder({
      title: group.title,
      expanded: false,
    })

    folders.push(folder)

    for (const childId of [...group.childIds, group.activeId]) {
      if (childId) groupLookup[childId] = i
    }
  }

  for (const field of model.fields) {
    const folderIndex = groupLookup[field.id]
    let input: InputBindingApi<unknown, any> | undefined = undefined

    switch (field.type) {
      case 'gradient': {
        break
      }

      case 'image': {
        input = folders[folderIndex].addInput({ [field.id]: field.defaultValue }, field.id, {
          view: 'input-image',
          label: field.title,
        })
        break
      }

      case 'button': {
        if (!buttonHandlers || !buttonHandlers[field.id]) {
          console.warn('Unhandled button:', field.id)
        } else {
          const button = folders[folderIndex].addButton({ title: field.title })
          button.on('click', () => buttonHandlers[field.id](field.id))
        }
        break
      }

      case 'number': {
        input = addNumberInput({ field: field as NumberField, folder: folders[folderIndex] })

        break
      }

      case 'font': {
        input = addFontInput(folders[folderIndex])
        break
      }

      case 'selection': {
        input = folders[folderIndex].addInput({ [field.id]: field.defaultValue }, field.id, {
          label: field.title,
          options: Object.fromEntries([
            ...(field as SelectionField).selections.map(
              (selection: Record<'id' | 'title', string>) => [selection.title, selection.id]
            ),
          ]),
        })
        break
      }

      case 'timecontrol': {
        input = addTimecontrolInput({
          folder: folders[folderIndex],
          field: field as TimeControlField,
          controls,
        })

        break
      }

      default: {
        try {
          input = folders[folderIndex].addInput({ [field.id]: field.defaultValue }, field.id, {
            label: field.title,
          })
        } catch (e) {
          console.error(
            `Couldn't add input ${field.title} in group ${folders[groupLookup[field.id]].title}`,
            field,
            e
          )
        }
        break
      }
    }

    if (input) {
      input.on('change', ({ presetKey, value }) => {
        if (!presetKey) return
        // handle images separately
        if (value.src) {
          controls[field.id].value = value.src
        } else {
          controls[field.id].value = Object.hasOwn(parsers, presetKey)
            ? parsers[presetKey](value)
            : value
        }
      })
    }
  }

  enableTweakpaneLocalStorage(pane, controls, parsers)

  return { pane, folders }
}

const tweakpaneStorageKey = 'zentrum-tweakpane'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function enableTweakpaneLocalStorage(pane: Pane, controls: any, parsers: Parsers) {
  const defaults = pane.exportPreset()

  // Restoration
  const localData = localStorage.getItem(tweakpaneStorageKey)
  if (localData) {
    batch(() => pane.importPreset(JSON.parse(localData)))
  }

  // Storage on each change
  pane.on('change', () =>
    localStorage.setItem(tweakpaneStorageKey, JSON.stringify(pane.exportPreset()))
  )

  const refresh = pane.addButton({ title: 'Refresh', label: '🍋', index: 0 })
  refresh.on('click', () => pane.refresh())

  // Reset to defaults
  const reset = pane.addButton({ title: 'Reset', label: '✨', index: 0 })
  reset.on('click', () =>
    batch(() => {
      pane.importPreset(defaults)

      for (const [key, value] of Object.entries(defaults)) {
        const parser = parsers[key]
        controls[key].value = parser ? parser(value as Serializable) : value
      }
    })
  )
}
