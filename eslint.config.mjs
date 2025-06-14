import { FlatCompat } from "@eslint/eslintrc";
import pluginJs from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import pluginReact from "eslint-plugin-react";
import globals from "globals";
import tseslint from "typescript-eslint";

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
  recommendedConfig: pluginJs.configs.recommended,
});

/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [
  {
    languageOptions: {
      globals: globals.browser,
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
  },
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  ...compat.config({
    extends: ["next", "prettier"],
  }),
  prettierConfig,
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      "no-unused-vars": "off", // Disable the base rule
      "@typescript-eslint/no-unused-vars": ["off"],
      // "import/no-anonymous-default-export": "off",
      "@typescript-eslint/no-misused-promises": ["off", { checksVoidReturn: false }],
      "@typescript-eslint/no-unnecessary-condition": [
        "off",
        {
          allowConstantLoopConditions: false,
        },
      ],
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/consistent-type-exports": "off",
      "@typescript-eslint/consistent-type-imports": "off",
      "react/no-unescaped-entities": 0,
      // ------
      // "@next/next/no-duplicate-head": "off",
    },
  },
  {
    ignores: ["*.config.js", "*.d.ts", "*.md"],
  },
];

export default eslintConfig;
