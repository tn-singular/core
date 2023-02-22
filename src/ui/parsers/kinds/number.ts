import type { Parser } from '../parsers'
import utils from '../utils'

export const numberParser = ((value) => {
  const asNum = Number(value)
  if (Number.isNaN(asNum)) {
    utils.parserWarning(value, 'number')
    return 0
  }
  return asNum
}) satisfies Parser
