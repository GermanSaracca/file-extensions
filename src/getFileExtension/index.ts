import { isString, isValidFilename } from '@/common'
/**
 * Get the file extension from a filename
 * @param filename - The filename to get the extension from
 * @param withFilenameValidation - If true, it will validate the filename before getting the extension, default is false
 * @returns The file extension (png, txt, jpg, etc)
 * @example
 * getFileExtension('file.txt') // 'txt'
 *
 * If the filename is not a string or a valid filename format it will return the filename as is
 * @example
 * getFileExtension(123) // 123
 */
export const getFileExtension = (filename: string, withFilenameValidation = false): string => {
  if (!isString(filename)) return filename
  if (withFilenameValidation && !isValidFilename(filename)) return filename

  const splittedFilename = filename.split('.')

  if (splittedFilename.length <= 1) return filename

  const fileExtension = splittedFilename.at(-1)! // eslint-disable-line @typescript-eslint/no-non-null-assertion

  return fileExtension
}
