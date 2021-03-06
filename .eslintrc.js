module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    "prettier",
    "react",
    "react-hooks",
    "@typescript-eslint"
  ],
  rules: {
    "react-hooks/rules-of-hooks":"error",
    "prettier/prettier":"error",
    "react-hooks/exhaustive-deps":"warn",
    "react/jsx-filename-extension":[1, {"extensions":[".tsx"]}],
    "import/prefer-default-export":"off",
    "import/extensions":["error", "ignorePackages", {"ts":"never", "tsx":"never"}],
    "react/jsx-props-no-spreading":"off",
    "react/prop-types":"off",
    "react/jsx-one-expression-per-line":"off",
    "no-unused-expressions":"off"
  },
  settings: {
    "import/resolver":{
      "typescript":{

      }
    }
  }
};
