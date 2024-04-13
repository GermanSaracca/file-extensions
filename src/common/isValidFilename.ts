import { isString } from '@/common/isString'

/**
 * Checks if a string is a valid filename
 * @param value - The string to check
 * @returns A boolean indicating if the string is a valid filename
 * @example
 * isValidFilename('image.png') // true
 * isValidFilename('file.txt') // true
 * isValidFilename('some-path/image.png') // false
 * isValidFilename('/image.png') // false
 * isValidFilename('image') // false
 * isValidFilename(null) // false
 */

export function isValidFilename(value: string): boolean {
  if (!isString(value)) {
    console.error('isValidFilename: expected a string')
    return false
  }

  const regex = /^[a-zA-Z0-9_-]+(\.[a-zA-Z0-9]+)+$/

  return regex.test(value)
}
