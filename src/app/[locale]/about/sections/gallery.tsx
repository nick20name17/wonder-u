"use client";

import { Container } from "@shared/ui/container";
import { Panel } from "@shared/ui/panel";
import classNames from "classnames";
import gsap from "gsap";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";

import styles from "../../styles.module.sass";

export const Gallery = () => {
    return (
        <section>
            <h2 className="sr-only">Gallery</h2>
            <Panel bg="soft_lavander" className="pt-4">
                {/* <div className="flex items-stretch justify-center gap-4 max-sm:gap-1.5 max-w-full">
                    <div className="flex-1 min-w-[200px] max-w-[304px] max-sm:min-w-[170px]">
                        <Image
                            src="/assets/images/gallery-1.jpg"
                            alt="Picture of the author"
                            className="rounded-[10px] w-full h-full object-cover"
                            width={300}
                            height={550}
                        />
                    </div>
                    <div className="flex-[2] min-w-[400px] max-sm:min-w-[300px] max-w-[764px]">
                        <Image
                            src="/assets/images/gallery-2.jpg"
                            alt="Picture of the author"
                            className="rounded-[10px] w-full h-full object-cover"
                            width={764}
                            height={550}
                        />
                    </div>
                    <div className="flex-1 min-w-[200px] max-w-[304px] max-sm:min-w-[170px]">
                        <Image
                            src="/assets/images/gallery-3.jpg"
                            alt="Picture of the author"
                            className="rounded-[10px] w-full h-full object-cover"
                            width={300}
                            height={550}
                        />
                    </div>
                </div> */}
                <ImageTickerTape />
                <BadgeTickerTape />
            </Panel>
        </section>
    );
};

const BadgeTickerTape = () => {
    const textRef = useRef(null);
    const spanRef = useRef<HTMLUListElement>(null);

    useLayoutEffect(() => {
        if (spanRef.current && spanRef.current.clientWidth) {
            gsap.fromTo(
                textRef.current,
                { x: -spanRef.current.clientWidth + "px" },
                { x: 0, duration: 15, ease: "none", repeat: -1 }
            );
        }
    }, []);
    return (
        <Container size="full">
            <Panel className="flex items-center justify-center overflow-hidden py-6 max-sm:py-4">
                <div ref={textRef} className={styles.line}>
                    {Array(10)
                        .fill(0)
                        .map((_, index) => (
                            <ul
                                className={classNames(
                                    styles.line_item,
                                    "flex items-center gap-1 flex-nowrap"
                                )}
                                key={index}
                                ref={index === 0 ? spanRef : null}>
                                <li
                                    ref={textRef}
                                    className="bg-[var(--color-accent-acid-green)] whitespace-nowrap rounded-full h-9 flex min-w-fit items-center justify-center px-3 border border-[var(--color-lavander-tender-lavander)] text-[var(--color-lavander-dark-lavander)] font-primary font-medium text-[11px] flex-1 leading-[13px] tracking-[0.03em]">
                                    ❇️ медицинські знання
                                </li>
                                <li className="bg-[var(--color-accent-acid-green)] whitespace-nowrap rounded-full h-9 flex min-w-fit items-center justify-center px-3 border border-[var(--color-lavander-tender-lavander)] text-[var(--color-lavander-dark-lavander)] font-primary font-medium text-[11px] flex-1 leading-[13px] tracking-[0.03em]">
                                    💃 будова гарного тіла
                                </li>
                                <li className="bg-[var(--color-accent-acid-green)] whitespace-nowrap rounded-full h-9 flex min-w-fit items-center justify-center px-3 border border-[var(--color-lavander-tender-lavander)] text-[var(--color-lavander-dark-lavander)] font-primary font-medium text-[11px] flex-1 leading-[13px] tracking-[0.03em]">
                                    🥑️ здорове харчування
                                </li>
                                <li className="bg-[var(--color-accent-acid-green)] whitespace-nowrap rounded-full h-9 flex min-w-fit items-center justify-center px-3 border border-[var(--color-lavander-tender-lavander)] text-[var(--color-lavander-dark-lavander)] font-primary font-medium text-[11px] flex-1 leading-[13px] tracking-[0.03em]">
                                    🏄🏽‍♂️ міцне здоров’я
                                </li>
                                <li className="bg-[var(--color-accent-acid-green)] whitespace-nowrap rounded-full h-9 flex min-w-fit items-center justify-center px-3 border border-[var(--color-lavander-tender-lavander)] text-[var(--color-lavander-dark-lavander)] font-primary font-medium text-[11px] flex-1 leading-[13px] tracking-[0.03em]">
                                    💜️ лайфстайл
                                </li>
                                <li className="bg-[var(--color-accent-acid-green)] whitespace-nowrap rounded-full h-9 flex min-w-fit items-center justify-center px-3 border border-[var(--color-lavander-tender-lavander)] text-[var(--color-lavander-dark-lavander)] font-primary font-medium text-[11px] flex-1 leading-[13px] tracking-[0.03em]">
                                    🌸 стрункість
                                </li>
                                <li className="bg-[var(--color-accent-acid-green)] whitespace-nowrap rounded-full h-9 flex min-w-fit items-center justify-center px-3 border border-[var(--color-lavander-tender-lavander)] text-[var(--color-lavander-dark-lavander)] font-primary font-medium text-[11px] flex-1 leading-[13px] tracking-[0.03em]">
                                    ✌🏻️ задоволення від життя
                                </li>
                                <li className="bg-[var(--color-accent-acid-green)] whitespace-nowrap rounded-full h-9 flex min-w-fit items-center justify-center px-3 border border-[var(--color-lavander-tender-lavander)] text-[var(--color-lavander-dark-lavander)] font-primary font-medium text-[11px] flex-1 leading-[13px] tracking-[0.03em]">
                                    🕊️ самоповага
                                </li>
                                <li className="bg-[var(--color-accent-acid-green)] whitespace-nowrap rounded-full h-9 flex min-w-fit items-center justify-center px-3 border border-[var(--color-lavander-tender-lavander)] text-[var(--color-lavander-dark-lavander)] font-primary font-medium text-[11px] flex-1 leading-[13px] tracking-[0.03em]">
                                    ✨ нутріціологія
                                </li>
                                <li className="bg-[var(--color-accent-acid-green)] whitespace-nowrap rounded-full h-9 flex min-w-fit items-center justify-center px-3 border border-[var(--color-lavander-tender-lavander)] text-[var(--color-lavander-dark-lavander)] font-primary font-medium text-[11px] flex-1 leading-[13px] tracking-[0.03em]">
                                    🥗 рецепти на кожен день
                                </li>
                                <li className="bg-[var(--color-accent-acid-green)] whitespace-nowrap rounded-full h-9 flex min-w-fit items-center justify-center px-3 border border-[var(--color-lavander-tender-lavander)] text-[var(--color-lavander-dark-lavander)] font-primary font-medium text-[11px] flex-1 leading-[13px] tracking-[0.03em]">
                                    📈 трекінг результатів
                                </li>
                            </ul>
                        ))}
                </div>
            </Panel>
        </Container>
    );
};

const ImageTickerTape = () => {
    const textRef = useRef(null);
    const spanRef = useRef<HTMLUListElement>(null);

    useLayoutEffect(() => {
        if (spanRef.current && spanRef.current.clientWidth) {
            gsap.fromTo(
                textRef.current,
                { x: -spanRef.current.clientWidth + "px" },
                { x: 0, duration: 25, ease: "none", repeat: -1 }
            );
        }
    }, []);
    return (
        <Container size="full">
            <Panel className="flex items-center justify-center overflow-hidden">
                <div ref={textRef} className={styles.line}>
                    {Array(5)
                        .fill(0)
                        .map((_, index) => (
                            <ul
                                className={classNames(
                                    styles.line_item,
                                    "flex items-center gap-1 flex-nowrap"
                                )}
                                key={index}
                                ref={index === 0 ? spanRef : null}>
                                <div className="flex-1 min-w-[700px] max-lg:min-w-[580px]  max-md:min-w-[480px1] max-sm:min-w-[320px] max-w-[764px]">
                                    <Image
                                        src="/assets/images/gallery-1.png"
                                        alt="Picture of the author"
                                        className="rounded-[10px] w-full h-full object-cover"
                                        width={764}
                                        height={550}
                                    />
                                </div>
                                <div className="flex-1  min-w-[700px] max-lg:min-w-[580px]  max-md:min-w-[480px] max-sm:min-w-[320px] max-w-[764px]">
                                    <Image
                                        src="/assets/images/gallery-1.png"
                                        alt="Picture of the author"
                                        className="rounded-[10px] w-full h-full object-cover"
                                        width={764}
                                        height={550}
                                    />
                                </div>
                                <div className="flex-1  min-w-[700px] max-lg:min-w-[580px]  max-md:min-w-[480px] max-sm:min-w-[320px] max-w-[764px]">
                                    <Image
                                        src="/assets/images/gallery-1.png"
                                        alt="Picture of the author"
                                        className="rounded-[10px] w-full h-full object-cover"
                                        width={764}
                                        height={550}
                                    />
                                </div>
                            </ul>
                        ))}
                </div>
            </Panel>
        </Container>
    );
};
