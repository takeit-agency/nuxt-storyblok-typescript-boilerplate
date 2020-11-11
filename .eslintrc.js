module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
  ],
  rules: {
    semi: 'off',
    camelcase: 'off',
    'comma-dangle': 'off',
    'space-before-function-paren': 'off',
    'no-undef': 'off',

    'vue/singleline-html-element-content-newline': 'off',
    'vue/mustache-interpolation-spacing': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/html-closing-bracket-spacing': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/attributes-order': 'off',
    'vue/html-self-closing': 'off',
  },
  ignorePatterns: [
    './tests/e2e/**.*',
  ],
}
