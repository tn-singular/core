import type { Parser } from '../parsers'
import utils from '../utils'

export const stringParser = ((value) => {
  const asString = value && value.toString()
  if (!asString) {
    utils.parserWarning(value, 'string')
    return ''
  }
  return asString
}) satisfies Parser
