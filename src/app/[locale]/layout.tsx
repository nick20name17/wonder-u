// import type { Metadata } from "next";
// import localFont from "next/font/local";
// import "@/app/globals.sass";
import { Footer } from "@widgets/footer";
import { Header } from "@widgets/header";

// const geistSans = localFont({
//   src: "../fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "../fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// // export default function RootLayout({
// //   children,
// // }: Readonly<{
// //   children: React.ReactNode;
// // }>) {
// //   return (
// //     <html lang="en">
// //       <body
// //         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
// //       >
// //         <Header />
// //           <div className="content">
// //             {children}
// //           </div>
// //         <Footer />
// //       </body>
// //     </html>
// //   );
// // }

import TranslationProvider from "@/app/[locale]/TranslationProvider";
import initTranslations from "@/app/i18n";
import i18nConfig from "@/i18nConfig";
import React from "react";

const i18nNamespaces = [
    "common",
    "home",
    "privacy-policy",
    "terms-of-use",
    "faq",
];

export function generateStaticParams() {
    return i18nConfig.locales.map((locale) => ({ locale }));
}

export default async function Layout({
    children,
    params: { locale },
}: Readonly<{ children: React.ReactNode; params: { locale: string } }>) {
    const { resources } = await initTranslations(locale, i18nNamespaces);

    return (
        <TranslationProvider
            locale={locale}
            resources={resources}
            namespaces={i18nNamespaces}>
            <Header />
            <div className="content">{children}</div>
            <Footer />
        </TranslationProvider>
    );
}