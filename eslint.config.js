import globals from "globals";
import eslint from "@eslint/js";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
import storybook from "eslint-plugin-storybook";
import tsParser from "@typescript-eslint/parser";
import reactRefresh from "eslint-plugin-react-refresh";

export default defineConfig(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  reactHooks.configs["recommended-latest"],
  storybook.configs["flat/recommended"],
  [
    {
      languageOptions: {
        parser: tsParser,
        ecmaVersion: 11,
        globals: {
          ...globals.browser,
        },
      },
    },
    {
      plugins: {
        "react-refresh": reactRefresh,
      },
      rules: {
        "react-refresh/only-export-components": [
          "warn",
          { allowConstantExport: true },
        ],
      }
    },
    {
      ignores: ["dist"],
    },
  ],
);