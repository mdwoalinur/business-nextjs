import { defineConfig, globalIgnores } from "eslint/config";
import js from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

const eslintConfig = defineConfig([
  globalIgnores([".next/**", "out/**", "build/**", ".local/**"]),
  js.configs.recommended,
  {
    files: ["src/**/*.{js,jsx}"],
    extends: [
      reactPlugin.configs.flat.recommended,
      reactPlugin.configs.flat["jsx-runtime"],
      reactHooks.configs.flat.recommended,
      nextPlugin.configs["core-web-vitals"],
    ],
    settings: { react: { version: "detect" } },
    rules: { "react/prop-types": "off" },
  },
]);

export default eslintConfig;
