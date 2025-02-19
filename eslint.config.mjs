import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "prettier"],
    rules: {
      'semi': ["error"],
      'quotes': ["error", "single"],
      'no-nested-ternary': 0,
      'linebreak-style': 0,
      'consistent-return': 0,
      'object-curly-newline': 0,
      'no-alert': 1,
      'newline-before-return': 2,
      'no-confusing-arrow': 0,
      'no-underscore-dangle': 0,
      'no-console': [1, { allow: ['warn', 'error', 'info'] }],
      'no-param-reassign': [2, { props: false }],
      'no-shadow': [2, { allow: ['res', 'err'] }],
      'no-use-before-define': [0],
      'import/no-named-as-default': 0,
      'import/extensions': 0,
      'import/no-unresolved': 1,
      'import/no-extraneous-dependencies': 0,
      'react/prop-types': 0,
      'react/require-default-props': 0,
      'react/destructuring-assignment': 0,
      'react/jsx-one-expression-per-line': [2, { allow: 'single-child' }],
      'react/no-array-index-key': 1,
      'react/no-danger': 0,
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx', '.ts'] }],
      'react/jsx-props-no-spreading': 0,
      'react/react-in-jsx-scope': 0,
      'react/no-did-update-set-state': 0,
      'react/state-in-constructor': 0,
      'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
      'no-unused-expressions': 0,
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
        },
      ],
    },
  })
];

export default eslintConfig;
