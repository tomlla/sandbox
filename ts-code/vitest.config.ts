import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
  ],
  test: {
      globals: true,
    globalSetup: [
      // './globalSetup/default-export.js',
      // './globalSetup/named-exports.js',
      // './globalSetup/ts-with-imports.ts',
      // './globalSetup/another-vite-instance.ts',
    ],
  },
})
