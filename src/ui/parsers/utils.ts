import { numberParser } from './kinds/number'
import type { Parser } from './parsers'
import type { Serializable } from '../../types/utils'

const parserWarning = (value: Serializable | undefined, targetType: string) =>
  console.warn(`WARN: Cannot parse as ${targetType} -`, value)

const to2dp = ((value) => numberParser(value).toFixed(2)) satisfies Parser

const toPx = ((value) => `${to2dp(value)}px`) satisfies Parser

const toPercent = ((value) => `${to2dp(value)}%`) satisfies Parser

const toBlur = ((value) => `blur(${toPx(value)})`) satisfies Parser

const toDeg = ((value) => `${to2dp(value)}deg`) satisfies Parser

const percentAsDecimal = ((value) => {
  const asNum = numberParser(value)
  return asNum / 100
}) satisfies Parser

export default {
  parserWarning,
  to2dp,
  toPx,
  toPercent,
  toBlur,
  toDeg,
  percentAsDecimal,
}
