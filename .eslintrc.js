const { resolve } = require

const OFF = 0
const ERROR = 2

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:eslint-comments/recommended',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:unicorn/recommended',
    'plugin:promise/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'unicorn', 'promise'],
  settings: {
    'import/resolver': {
      node: {
        // 指定 eslint-plugin-import 解析的后缀名
        extensions: ['.ts', '.tsx', '.js', '.json'],
      },
      typescript: {
        // 配置 eslint-import-resolver-typescript 读取 tsconfig.json 的路径
        project: [resolve('./src/tsconfig.json'), resolve('./scripts/tsconfig.json')],
      },
    },
  },
  rules: {
    'eslint-comments/disable-enable-pair': [
      ERROR,
      {
        allowWholeFile: true,
      },
    ],
    'import/extensions': [
      ERROR,
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
        json: 'never',
        js: 'never',
      },
    ],

    'unicorn/filename-case': [
      ERROR,
      {
        cases: {
          // 中划线
          kebabCase: false,
          // 小驼峰
          camelCase: true,
          // 下划线
          snakeCase: false,
          // 大驼峰
          pascalCase: true,
        },
      },
    ],
    'unicorn/no-null': OFF,
    'unicorn/prevent-abbreviations': OFF,
    'unicorn/no-process-exit': OFF,
    'unicorn/import-style': OFF,

    '@typescript-eslint/explicit-function-return-type': OFF,
    '@typescript-eslint/no-explicit-any': OFF,
    '@typescript-eslint/no-non-null-assertion': OFF,
    '@typescript-eslint/no-useless-constructor': ERROR,

    'react/jsx-filename-extension': [ERROR, { extensions: ['.tsx'] }],
    'react/jsx-indent-props': [ERROR, 2],
    'react/jsx-indent': [ERROR, 2],
    'react/require-default-props': OFF,

    'func-names': OFF,
    'lines-between-class-members': OFF,
    'max-classes-per-file': OFF,
    'no-console': OFF,
    'no-empty': OFF,
    'no-param-reassign': OFF,
    'no-plusplus': OFF,
    'no-underscore-dangle': OFF,
    'no-unused-expressions': OFF,
    'no-useless-constructor': OFF,
    'no-use-before-define': OFF,
  },
  overrides: [
    {
      files: ['**/*.d.ts'],
      rules: {
        'import/no-duplicates': OFF,
      },
    },
    {
      files: ['scripts/**/*.ts'],
      rules: {
        'import/no-extraneous-dependencies': OFF,
      },
    },
  ],
}
