import { createButtonField } from './fields/button'
import { createCheckboxField } from './fields/checkbox'
import { createColorField } from './fields/color'
import { createFontField } from './fields/font'
import { createGradientField } from './fields/gradient'
import { createImageField } from './fields/image'
import { createInfoField } from './fields/info'
import { createJSONField } from './fields/json'
import { createNumberField } from './fields/number'
import { createSelectionField } from './fields/selection'
import { createTextField } from './fields/text'
import { createTextAreaField } from './fields/textarea'
import { createTimeControlField } from './fields/timecontrol'

export const ui = {
  button: createButtonField,
  checkbox: createCheckboxField,
  color: createColorField,
  font: createFontField,
  gradient: createGradientField,
  image: createImageField,
  info: createInfoField,
  json: createJSONField,
  number: createNumberField,
  selection: createSelectionField,
  text: createTextField,
  textarea: createTextAreaField,
  timecontrol: createTimeControlField,
}
