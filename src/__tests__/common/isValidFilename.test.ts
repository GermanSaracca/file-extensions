import { describe, expect, test } from 'vitest'

import { isValidFilename } from '@/common'

describe('isValidFilename', () => {
  test.each([
    ['example_file.txt', true],
    ['document.docx', true],
    ['image.jpeg', true],
    ['my-image.jpg', true],
    ['file-1.txt', true],
    ['README.md', true],
    ['file.txt', true],
    ['my-filename-with-no-extension', false],
    ['some-path/image.png', false],
    ['/image.png', false],
    ['file name.txt', false],
    ['file*name.txt', false],
    ['file?name.txt', false],
    ['file<name.txt', false],
    ['file:name.txt', false],
    ['file|name.txt', false],
    [null, false],
    [3, false],
    [{}, false],
    [undefined, false]
  ])('isValidFilename(%j) should be %j', (arg, expected) => {
    // @ts-expect-error testing purposes
    expect(isValidFilename(arg)).toBe(expected)
  })

  test.each([
    [true, false],
    [false, false]
  ])('isValidFilename(%j) should not be %j', (arg, expected) => {
    // @ts-expect-error testing purposes
    expect(isValidFilename(arg)).toBe(expected)
  })
})
