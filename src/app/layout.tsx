// import type { Metadata } from "next";
import "@/app/globals.sass";
import i18nConfig from "@/i18nConfig";
import { ReactQueryProvider } from "@/providers/react-query-provider";
import { Metadata } from "next";
import { Golos_Text } from "next/font/google";
import React from "react";

const fontPrimary = Golos_Text({
    subsets: ["latin", "cyrillic"],
    variable: "--font-primary",
    display: "swap",
});

const fontSecondary = Golos_Text({
    subsets: ["latin", "cyrillic"],
    variable: "--font-secondary",
    display: "swap",
});

export const metadata: Metadata = {
    title: "WonderU",
    description: "Краща версія тебе починається заразз WonderU",
    icons: {
        icon: "/assets/images/favicon.svg",
        shortcut: "/assets/images/favicon.svg",
    },
};

export function generateStaticParams() {
    return i18nConfig.locales.map((locale: unknown) => ({ locale }));
}

export default function RootLayout({
    children,
    params: { locale },
}: Readonly<{
    children: React.ReactNode;
    params: { locale: string };
}>) {
    return (
        <html lang={locale}>
            <body
                className={`${fontPrimary.variable} ${fontSecondary.variable}`}>
                <ReactQueryProvider>{children}</ReactQueryProvider>
            </body>
        </html>
    );
}
