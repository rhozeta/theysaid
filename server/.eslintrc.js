module.exports = {
    "env": {
        "browser": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "parser": "babel-eslint",
        "ecmaVersion": 8,
        "sourceType": "module",
        "ecmaFeatures": {
            jsx: false
        }
    },
    "rules": {
        "no-unused-vars": "off",
        "no-undef": "off",
        "no-console": "off",
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ]
    }
};