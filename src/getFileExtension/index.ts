import { isFilename, isString } from '@/common'
/**
 * Get the file extension from a filename
 * @param filename - The filename to get the extension from
 * @returns The file extension (png, txt, jpg, etc)
 * @example
 * getFileExtension('file.txt') // 'txt'
 *
 * If the filename is not a string or a valid filename format it will return the filename as is
 * @example
 * getFileExtension(123) // 123
 */
export const getFileExtension = (filename: string): string => {
  if (!isString(filename) || !isFilename(filename)) return filename

  const trimmedFilename = filename.trim()

  const splittedFilename = trimmedFilename.split('.')

  if (splittedFilename.length <= 1) return filename

  const fileExtension = splittedFilename.at(-1)! // eslint-disable-line @typescript-eslint/no-non-null-assertion

  return fileExtension
}
