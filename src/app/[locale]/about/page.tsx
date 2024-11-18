"use client";

import { TickerTape } from "@widgets/ticker-tape";
import { About } from "./sections/about";
import { AboutAdvantages } from "./sections/advantages";
import { AboutContent } from "./sections/content";
import { AboutCTA } from "./sections/cta";
import { Gallery } from "./sections/gallery";
import { AboutHero } from "./sections/hero";
import { AboutPricing } from "./sections/pricing";
import { AboutVideo } from "./sections/video";

export default function Faq() {
    return (
        <>
            <main className="flex flex-col gap-4 my-2">
                <AboutHero />
                <AboutAdvantages />
                <AboutVideo />
                <TickerTape />
                <AboutContent />
                <AboutPricing />
                <About />
                <Gallery />
                <AboutCTA />
            </main>
        </>
    );
}
