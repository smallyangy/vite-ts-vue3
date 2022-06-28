module.exports = {
    globals: {},
    env: {
        browser: true,
        node: true,
        es2021: true
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module'
    },
    plugins: ['vue', '@typescript-eslint'],
    rules: {
        'no-cond-assign': ['error', 'always'],
        'no-unused-vars': 'off',
        '@typescript-eslint/ban-ts-comment': 'error',
        '@typescript-eslint/no-explicit-any': 'warn',
        'vue/multi-word-component-names': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'vue/html-indent': ['error', 4],
        'vue/script-indent': [
            'error',
            4,
            {
                baseIndent: 1
            }
        ]
    }
};
