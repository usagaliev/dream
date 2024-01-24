module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true
    },
    "globals": {
        "JSX": true
    },
    "extends": [
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "plugin:react/recommended",
        "plugin:import/typescript",
        "airbnb",
        "plugin:prettier/recommended",
        "prettier"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": ["react", "@typescript-eslint", "prettier"],
    "rules": {
        "no-param-reassign": [
            "error",
            {
                "props": false
            }
        ],
        "no-restricted-syntax": "off",
        "prettier/prettier": ["error", {}, { "usePrettierrc": true }],
        "no-bitwise": "off",
        "import/prefer-default-export": "off",
        "import/no-unresolved": [2, { "ignore": ["react"] }],
        "react/prop-types": "off",
        "react/no-array-index-key": "warn",
        "react/jsx-props-no-spreading": "off",
        "react/no-unused-prop-types": "warn",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "react/require-default-props": "off",
        "consistent-return": "off",
        "no-use-before-define": "off",
        "no-shadow": "off",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/no-shadow": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "jsx-a11y/no-autofocus": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "jsx-a11y/control-has-associated-label": "off",
        "jsx-a11y/no-static-element-interactions": "off",
        "jsx-a11y/label-has-associated-control": "off",
        "jsx-a11y/no-noninteractive-tabindex": "off",
        "no-console": ["warn", { "allow": ["error"] }],
        "import/no-extraneous-dependencies": [
            "error",
            {
                "devDependencies": [
                    "**/*.stories.*",
                    "**/.storybook/**/*.*",
                    "**/*.test.*",
                    "**/*-setup.*"
                ],
                "peerDependencies": true
            }
        ],
        "import/order": [
            "error",
            {
                "newlines-between": "always",
                "groups": ["builtin", "external", "internal", "parent", "sibling", "index"]
            }
        ],
        "import/extensions": "off",

        "react/jsx-filename-extension": [1, { "extensions": [".jsx", ".tsx", ".d.ts"] }],
        "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
        "react/function-component-definition": [2, { "namedComponents": "arrow-function" }]
    },
    "settings": {
        "import/resolver": {
            "node": {
                "paths": ["src"],
                "extensions": [".js", ".jsx", ".ts", ".tsx", ".d.ts"]
            }
        }
    }
}

