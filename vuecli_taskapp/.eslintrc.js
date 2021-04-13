module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', '@vue/airbnb'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': 'warn',
    'max-len': ['error', { code: 150 }],
    // 'arrow-parens': ['warn', 'as-needed'],
    'arrow-parens': [2, 'as-needed'],
    'no-trailing-spaces': [0, { ignoreComments: true }],
  },
};
