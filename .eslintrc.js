module.exports = {
  env: {
    browser: false,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  globals: {
    document: true,
  },
  rules: {
    semi: ['error', 'never'],
    'no-console': 0,
    'no-throw-literal': 0,
    'linebreak-style': 0,
    'react/jsx-filename-extension': [0, { allow: 'as-needed' }],
  },
}
