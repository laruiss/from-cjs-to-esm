import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: true,
  vue: true,
  ignores: ['node_modules', '**/node_modules/**', 'dist', '**/dist/**'],
}, {
  rules: {
    'no-irregular-whitespace': 'warn',
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 1,
      },
      multiline: {
        max: 1,
      },
    }],
  },
})
