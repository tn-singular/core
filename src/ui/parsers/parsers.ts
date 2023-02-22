import { colorToRgba } from './kinds/color'
import { fontParser } from './kinds/font'
import { gradientToString } from './kinds/gradient'
import { jsonParser } from './kinds/json'
import { numberParser } from './kinds/number'
import { stringParser } from './kinds/string'
import { timecontrolParser } from './kinds/timecontrol'
import utils from './utils'
import type { Serializable } from '../../types/utils'

// Note: parsers may not utilise uiDefaults.fields as it would be a circular dependency
export const fieldParsers = {
  string: stringParser,
  json: jsonParser,
  number: numberParser,
  color: colorToRgba,
  gradient: gradientToString,
  dp2: utils.to2dp,
  percent: utils.toPercent,
  px: utils.toPx,
  blur: utils.toBlur,
  degrees: utils.toDeg,
  percentAsDecimal: utils.percentAsDecimal,
  font: fontParser,
  timecontrol: timecontrolParser,
} satisfies Record<string, Parser>

export type Parser<V extends Serializable = Serializable, R extends Serializable = Serializable> = (
  value?: V
) => R

export type Parsers = Record<string, Parser>
