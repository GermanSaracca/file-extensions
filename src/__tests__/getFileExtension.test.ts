import { describe, expect, test } from 'vitest'

import { getFileExtension } from '@/getFileExtension'

describe('getFileExtension', () => {
  test.each([
    ['file.txt', 'txt'],
    ['image.png', 'png'],
    ['file', 'file'],
    [null, null],
    [undefined, undefined],
    [2, 2],
    [{}, {}]
  ])('getFileExtension(%j) should be %j', (arg, expected) => {
    // @ts-expect-error testing purposes
    expect(getFileExtension(arg)).toEqual(expected)
  })
})
