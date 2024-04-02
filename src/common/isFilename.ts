import { isString } from '@/common/isString'

/**
 * Checks if a string is a valid filename
 * @param value - The string to check
 * @returns A boolean indicating if the string is a valid filename
 * @example
 * isFilename('image.png') // true
 * isFilename('file.txt') // true
 * isFilename('some-path/image.png') // false
 * isFilename('/image.png') // false
 * isFilename('image') // false
 * isFilename(null) // false
 */

export function isFilename(value: string): boolean {
  if (!isString(value)) {
    console.error('isFilename: expected a string')
    return false
    // throw new TypeError('isFilename: expected a string')
  }

  const regex = /^[^\s/]+\.[a-zA-Z0-9]{1,5}$/

  return regex.test(value)
}
