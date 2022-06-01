module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['airbnb-base', 'plugin:vue/essential', 'plugin:vue/strongly-recommended', 'plugin:vue/recommended'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.vue'],
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/no-v-html': 'off',
    'vue/no-v-model-argument': 'off',
    'vue/no-v-for-template-key': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/html-indent': 'off',
    'comma-dangle': 'off',
    'import/prefer-default-export': 'warn',
    'arrow-body-style': 'warn',
    'no-param-reassign': 'off',
    'no-shadow': 'off',
    'no-prototype-builtins': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'any',
        },
      },
    ],
    'import/no-extraneous-dependencies': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'import/extensions': 'off',
    'operator-linebreak': 'off',
    'max-len': 'off',
    'default-case': 'off',
    'implicit-arrow-linebreak': 'off',
    'function-paren-newline': 'off',
    'prefer-destructuring': ['error', { object: true, array: false }],
    'eol-last': 0,
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
    'linebreak-style': 0,
  },
};
