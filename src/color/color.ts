import { clamp } from '../utils/math'

const isValidHex = (hex: string) => /^([A-Fa-f0-9]{3,4}){1,2}$/.test(hex)

const getChunksFromString = (str: string, chunkSize: number) =>
  str.match(new RegExp(`.{${chunkSize}}`, 'g'))

const convertHexUnitTo256 = (hexStr: string) => parseInt(hexStr.repeat(2 / hexStr.length), 16)

const getAlphafloat = (a: number | undefined) =>
  typeof a === 'undefined' ? 1 : clamp(a / 255, 0, 1)

export const hexToRGBA = (hex: string) => {
  if (!isValidHex(hex)) {
    return undefined
  }

  const chunkSize = Math.floor((hex.length - 1) / 3)
  const hexArr = getChunksFromString(hex.slice(1), chunkSize)
  const [r, g, b, a] = hexArr!.map(convertHexUnitTo256)

  return { r, g, b, a: getAlphafloat(a) }
}
