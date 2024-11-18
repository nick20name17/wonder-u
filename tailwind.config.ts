import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },

            keyframes: {
                marquee: {
                    from: { transform: "translateX(0%)" },
                    to: { transform: "translateX(-100%)" },
                },
                marquee2: {
                    from: { transform: "translateX(100%)" },
                    to: { transform: "translateX(0%)" },
                },
            },
            animation: {
                marquee: "marquee 5s linear infinite",
                marquee2: "marquee2 5s linear infinite",
            },
        },
    },
    plugins: [],
};
export default config;
