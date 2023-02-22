import { stringParser } from './string'
import type { Parser } from '../parsers'

export const jsonParser = ((value) => JSON.parse(stringParser(value))) satisfies Parser
