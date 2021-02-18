module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin: @typescript-eslint/recommended',
        'recommended-requiring-type-checking',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
        project: './tsconfig.json',
    },
    plugins: [
        'import',
        'simple-import-sort',
        'jsx-ally',
        'react',
        'react-hooks',
        '@typescript-eslint',
        'jest',
    ],
    ignorePatterns: ['node_modules', 'dist'],
    settings: { react: { version: 'detect' } },
    root: true,
    rules: {},
}
