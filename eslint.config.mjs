import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

/** @type {import("eslint").Linter.Config[]} */
const eslintConfig = [
    {
        ignores: [".next/**", "out/**", "build/**", "next-env.d.ts"],
    },

    ...nextCoreWebVitals,
    ...nextTypescript,

    {
        rules: {
            "react/no-unescaped-entities": "off",
        },
    },
];

export default eslintConfig;
