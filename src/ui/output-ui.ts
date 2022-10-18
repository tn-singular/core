import { isNode } from 'browser-or-node'
import clipboard from 'clipboardy'
import pc from 'picocolors'

import type { UIFieldDefinition, UIGroupDefinition } from '../types/widget'
import { makeDefinition } from './utils'

export async function outputUI(
  fields: Record<string, UIFieldDefinition>,
  groups: Record<string, UIGroupDefinition>
) {
  if (isNode) {
    await import('fs').then((mod) => {
      const writeFile = mod.writeFile
      const definition = JSON.stringify(makeDefinition(fields, groups))

      clipboard.writeSync(definition)
      console.log(pc.green(`📋 Copied UI Definition @ ${new Date().toLocaleTimeString()}`))

      writeFile('ui.json', JSON.stringify(makeDefinition(fields, groups)), () => undefined)
      console.log(pc.green(`💾 Updated ui.json`))
    })
  }
}
