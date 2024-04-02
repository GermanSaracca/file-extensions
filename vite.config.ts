/// <reference types="vitest" />

import { defineConfig } from 'vite'
import { configDefaults } from 'vitest/config'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'file-extensions',
      fileName: 'file-extensions'
    },
    sourcemap: true
  },
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, 'src') }]
  },
  plugins: [dts({ outDir: 'dist', include: ['src/'] }), tsconfigPaths()],
  test: {
    coverage: {
      exclude: [...configDefaults.exclude, '.eslintrc.cjs', 'commitlint.config.js', 'src/index.ts']
    }
  }
})
