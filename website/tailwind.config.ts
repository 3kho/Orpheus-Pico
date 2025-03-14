import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./*.tsx",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],

    darkMode: "class",
    plugins: [
        nextui({
            addCommonColors: true,
        }),
    ],
} satisfies Config;
