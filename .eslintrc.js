// eslint-disable-next-line no-undef
module.exports = {
    env: {
        node:true,
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:@typescript-eslint/recommended',
        // 'recommended-requiring-type-checking',
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
        'import',
        'simple-import-sort',
        'jsx-a11y',
        'react',
        'react-hooks',
        '@typescript-eslint',
    ],
    ignorePatterns: ['node_modules', 'dist'],
    settings: { react: { version: 'detect' } },
    root: true,
    rules: {
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
}
