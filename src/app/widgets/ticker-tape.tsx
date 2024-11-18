"use client";

import { Container } from "@shared/ui/container";
import { Panel } from "@shared/ui/panel";
import classNames from "classnames";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import styles from "../[locale]/styles.module.sass";

export const TickerTape = () => {
    const textRef = useRef(null);
    const spanRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (spanRef.current && spanRef.current.clientWidth) {
            gsap.fromTo(
                textRef.current,
                { x: -spanRef.current.clientWidth + "px" },
                { x: 0, duration: 5, ease: "none", repeat: -1 }
            );
        }
    }, []);
    return (
        <section>
            <Container size="full">
                <Panel
                    bg="acid_green"
                    className="h-[64px] flex items-center justify-center overflow-hidden">
                    <div ref={textRef} className={styles.line}>
                        {Array(10)
                            .fill(0)
                            .map((_, index) => (
                                <div
                                    className={classNames(
                                        styles.line_item,
                                        "flex items-center gap-3 flex-nowrap"
                                    )}
                                    key={index}
                                    ref={index === 0 ? spanRef : null}>
                                    <span
                                        className={classNames(
                                            styles.line_item_text
                                        )}>
                                        Життя — це гра. Ми не можемо відмінити
                                        попердню дію, але можемо зробити
                                        наступну
                                    </span>
                                    <span className=" w-[36px] h-[36px] bg-[#E0F56B] rounded-full flex items-center justify-center">
                                        👌🏻
                                    </span>
                                </div>
                            ))}
                    </div>
                </Panel>
            </Container>
        </section>
    );
};
