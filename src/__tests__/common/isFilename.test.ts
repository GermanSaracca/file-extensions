import { describe, expect, test } from 'vitest'

import { isFilename } from '@/common'

describe('isFilename', () => {
  test.each([
    ['image.png', true],
    ['file.txt', true],
    ['some-path/image.png', false],
    ['/image.png', false],
    ['image', false],
    [null, false],
    [3, false],
    [{}, false],
    [undefined, false]
  ])('isFilename(%j) should be %j', (arg, expected) => {
    // @ts-expect-error testing purposes
    expect(isFilename(arg)).toBe(expected)
  })

  // test.each([
  //   [null, TypeError],
  //   [undefined, TypeError],
  //   [2, TypeError],
  //   [{}, TypeError]
  // ])('isFilename(%j) should throw a TypeError', (arg, expected) => {
  //   // @ts-expect-error testing purposes
  //   expect(() => isFilename(arg)).toThrow(expected)
  // })
})
