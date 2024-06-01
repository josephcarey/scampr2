module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
        'plugin:@typescript-eslint/strict',
        'plugin:prettier/recommended',
        'prettier',
    ],
    parserOptions: {
        project: 'typescript.eslintrc.json',
        ecmaVersion: 2018,
        // sourceType: 'module',
    },
    rules: {
        // Special ESLint rules or overrides go here.
    },
    overrides: {
        files: ['tests/**/*.ts', '**/**/*.test.ts'],
        env: { "jest": true, "node": true}
    }
    // files: ["*/**.ts"]
}
