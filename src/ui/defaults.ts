import { fieldParsers } from './parsers/parsers'
import type { FieldTypes, UIFieldInput } from './types/fields'
import type { Serializable } from '../types/utils'

export const camel2title = (camelCase: string) =>
  camelCase
    .replace(/(?<!\s)([A-Z0-9](?![A-Z0-9]))/g, (match) => ` ${match}`)
    .replace(/[a-z](?=[0-9])/g, (match) => `${match} `)
    .replace(/^.|\s./g, (match) => match.toUpperCase())
    .trim()

type DefaultValueFunction<T extends Serializable> = (id: string, field: UIFieldInput) => T
const defaultTitleFn: DefaultValueFunction<string> = (id) => camel2title(id)

const group = {
  width: 'single',
  tooltip: defaultTitleFn,
  title: defaultTitleFn,
}

const fields = {
  label: {
    title: defaultTitleFn,
    defaultValue: defaultTitleFn,
  },
  text: {
    title: defaultTitleFn,
    defaultValue: defaultTitleFn,
  },
  info: {
    title: 'Info',
    defaultValue: defaultTitleFn,
  },
  textarea: {
    title: defaultTitleFn,
    defaultValue: defaultTitleFn,
    rows: 3,
    cols: 10,
  },
  font: {
    title: defaultTitleFn,
    parser: fieldParsers.font,
    defaultValue: {
      fontData: { family: 'Montserrat', weight: '500' },
      alignment: 'left',
      italic: false,
      underline: false,
    },
  },
  json: {
    title: defaultTitleFn,
    parser: fieldParsers.json,
    defaultValue: '{}',
    width: 0,
    height: 72,
  },
  number: {
    title: defaultTitleFn,
  },
  color: {
    title: defaultTitleFn,
    parser: fieldParsers.color,
    defaultValue: { r: 204, g: 204, b: 204, a: 1 },
  },
  gradient: {
    title: defaultTitleFn,
    parser: fieldParsers.gradient,
    defaultValue: {
      type: 'linear',
      solidColor: {
        r: 0,
        g: 255,
        b: 255,
        a: 1,
      },
      stops: [
        {
          offset: 0,
          color: '#00ffff',
          opacity: 1,
        },
        {
          offset: 1,
          color: '#ff00ff',
          opacity: 1,
        },
      ],
      offset: 0,
      angle: 0,
      scale: 100,
      spreadMethod: 'pad',
      keepAspect: false,
      centerX: 50,
      centerY: 50,
      radius: 50,
      focalAngle: 0,
      focalDistance: 0,
    },
  },
  image: {
    title: defaultTitleFn,
    defaultValue: '',
  },
  checkbox: {
    title: defaultTitleFn,
  },
  selection: {
    title: defaultTitleFn,
  },
  button: {
    title: defaultTitleFn,
  },
  composition: {
    title: defaultTitleFn,
  },
  timecontrol: {
    title: defaultTitleFn,
    parser: fieldParsers.timecontrol,
    defaultValue: {
      ms: 0,
      UTC: Date.now(),
      isRunning: false,
    },
  },
} satisfies Record<FieldTypes, Record<string, Serializable | DefaultValueFunction<Serializable>>>

export const uiDefaults = {
  group,
  fields,
}

type FieldsDefaults = typeof fields
export type UiFieldsDefaults = {
  [Type in keyof FieldsDefaults]: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [K in keyof FieldsDefaults[Type]]: FieldsDefaults[Type][K] extends (...args: any[]) => any
      ? ReturnType<FieldsDefaults[Type][K]>
      : FieldsDefaults[Type][K]
  }
}
