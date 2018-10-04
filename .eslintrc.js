module.exports = {
  parser: '@lightscript/eslint-plugin',
  parserOptions: {
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended',
    'plugin:@lightscript/recommended'
  ],
  globals: {
    ISDEV: true
  },
  env: {
    node: true,
    es6: true
  },
  plugins: [
    '@lightscript/eslint-plugin',
    'fp'
  ],
  rules: {
    '@lightscript/no-unnecessary-comma': 0,
    '@lightscript/match-requires-else': 'error',
    '@lightscript/no-implicit-imports': 'error',
    'accessor-pairs': 'error',
    'block-scoped-var': 'error',
    'brace-style': [
      'warn', 'stroustrup'
    ],
    'callback-return': 'error',
    'comma-style': [
      'error',
      'last'
    ],
    'consistent-return': 'error',
    'eqeqeq': 'error',
    'fp/no-arguments': 'error',
    'fp/no-class': 'error',
    'fp/no-delete': 'error',
    'fp/no-events': 'error',
    'fp/no-get-set': 'error',
    'fp/no-let': 'error',
    'fp/no-loops': 'error',
    'fp/no-mutating-assign': 'error',
    'fp/no-mutation': 'error',
    'fp/no-nil': 'error',
    'fp/no-proxy': 'error',
    'fp/no-rest-parameters': 'error',
    'fp/no-this': 'error',
    'fp/no-throw': 'error',
    'fp/no-valueof-field': 'error',
    'guard-for-in': 'error',
    'handle-callback-err': 'error',
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true
      }
    ],
    'no-await-in-loop': 'error',
    'no-buffer-constructor': 'error',
    'no-caller': 'error',
    'no-class-assign': 'error',
    'no-console': 0,
    'no-const-assign': 'error',
    'no-debugger': 'warn',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': 'error',
    'no-else-return': 'error',
    'no-empty-function': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-floating-decimal': 'error',
    'no-implied-eval': 'error',
    'no-invalid-this': 'error',
    'no-loop-func': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: true
      }
    ],
    'no-native-reassign': [
      'error',
      {
        exceptions: [
          'Promise'
        ]
      }
    ],
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-require': 'error',
    'no-new-symbol': 'error',
    'no-new-wrappers': 'error',
    'no-param-reassign': 'error',
    'no-path-concat': 'error',
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true
      }
    ],
    'no-process-exit': 'off',
    'no-return-assign': 'error',
    'no-sequences': 'warn',
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-spaced-func': 'error',
    'no-this-before-super': 'error',
    'no-throw-literal': 'error',
    'no-undefined': 'error',
    'no-undef-init': 'error',
    'no-unneeded-ternary': 'error',
    'no-unsafe-finally': 'error',
    'no-useless-call': 'error',
    'no-useless-escape': 'error',
    'no-useless-constructor': 'error',
    'no-use-before-define': 'error',
    'no-var': 'error',
    'no-void': 'error',
    'no-with': 'error',
    'object-shorthand': 'error',
    'prefer-promise-reject-errors': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-spread': 'error',
    'require-yield': 'error',
    'semi': [
      'error',
      'never'
    ],
    'space-before-function-paren': 0
  }
}
