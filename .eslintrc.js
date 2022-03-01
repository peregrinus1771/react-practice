// eslint-disable-next-line no-undef
module.exports = {
    env: {
        node: true,
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'next:core-web-vitals',
        'plugin:jsx-a11y/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:jest/recommended',
        'plugin:tailwindcss/recommended',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: [
        'simple-import-sort',
        'jsx-a11y',
        '@typescript-eslint',
        'jest',
    ],
    ignorePatterns: ['node_modules', 'dist'],
    settings: {
        react: { version: 'detect' },
        jest: { version: 'detect' },
    },
    root: true,
    rules: {
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
    },
}
