import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-config-prettier';

export default [
    {
        ignores: [
            'vendor/**',
            'node_modules/**',
            'public/**',
            'bootstrap/cache/**',
            'storage/**',
        ],
    },
    js.configs.recommended,
    {
        files: ['resources/js/**/*.{js,jsx}'],
        plugins: {
            react,
        },
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: {
                document: 'readonly',
                window: 'readonly',
            },
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
        rules: {
            ...react.configs.recommended.rules,
            ...react.configs['jsx-runtime'].rules,
            'react/prop-types': 'off',
        },
    },
    {
        files: ['resources/js/**/*.{js,jsx}'],
        ...reactHooks.configs.flat.recommended,
    },
    prettier,
];
