import { Container } from "@shared/ui/container";
import { Panel } from "@shared/ui/panel";
import Image from "next/image";

import classNames from "classnames";
import styles from "../styles.module.sass";

export const About = () => {
    return (
        <section id="about">
            <Container size="full">
                <div className="flex flex-col lg:flex-row gap-2">
                    <Panel
                        outline="beige_selection"
                        className="lg:flex-1 w-full aspect-[16/9] max-h-[350px] lg:max-h-full lg:aspect-auto bg-[url('/assets/images/about.jpg')] bg-cover bg-center relative">
                        <div
                            className={classNames(
                                styles.about_banner_gradient
                            )}></div>
                    </Panel>
                    <div className="grid grid-cols-2 gap-2">
                        <Panel
                            bg="acid_green"
                            className="w-full lg:w-[256px] aspect-[1/1] col-span-1 relative">
                            <svg
                                className="size-full"
                                width="256"
                                height="256"
                                viewBox="0 0 256 256"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M389 126.364C370.137 122.092 239.637 91.997 208.44 65.1052C207.896 64.6198 202.274 60.154 196.651 54.0378C191.301 48.2129 186.404 41.6113 186.041 41.0288C161.374 8.11789 133.623 -127.021 128.817 -151H127.184C122.377 -127.021 94.6269 8.11789 69.9598 41.0288C69.5063 41.6113 64.7 48.2129 59.3494 54.0378C53.7268 60.154 48.1042 64.6198 47.5601 65.1052C16.2727 91.997 -114.137 122.092 -133 126.364V127.432C-114.137 131.704 16.3634 161.799 47.5601 188.691C48.1042 189.176 53.7268 193.642 59.3494 199.758C64.7 205.583 69.597 212.185 69.9598 212.767C96.35 247.911 126.186 399.748 127.819 408H128.182C129.814 399.748 159.651 247.911 186.041 212.767C186.494 212.185 191.301 205.583 196.651 199.758C202.274 193.642 207.896 189.176 208.44 188.691C239.728 161.799 370.137 131.704 389 127.432V126.364Z"
                                    fill="#E0F56B"
                                />
                            </svg>

                            <div className="absolute inset-0 flex flex-col justify-center items-center gap-2">
                                <div className="flex items-center justify-center gap-2">
                                    <div
                                        className={classNames(
                                            "h-[56px] w-[36px] text-[22px] flex justify-center items-center rounded-full bg-[var(--color-accent-acid-green)]"
                                        )}>
                                        🖥
                                    </div>
                                    <div
                                        className={classNames(
                                            "h-[56px] w-[36px] text-[22px] flex justify-center items-center rounded-full bg-[var(--color-accent-acid-green)]"
                                        )}>
                                        📱
                                    </div>
                                    <div
                                        className={classNames(
                                            "h-[56px] w-[36px] text-[22px] flex justify-center items-center rounded-full bg-[var(--color-accent-acid-green)]"
                                        )}>
                                        💻
                                    </div>
                                </div>
                                <div className="text-[32px] max-md:text-2xl font-medium text-center uppercase">
                                    Зручність
                                </div>
                            </div>
                        </Panel>
                        <Panel className="w-full lg:w-[256px] aspect-[1/1] col-span-1 relative">
                            <Image
                                src="/assets/images/about-2.jpg"
                                width={512}
                                height={512}
                                alt="Picture of the author"
                                className="w-full h-full object-cover"
                            />
                            <div
                                className={classNames(
                                    styles.about_photo_gradient
                                )}></div>
                        </Panel>
                        <Panel
                            bg="beige_skin_nude"
                            className="col-span-full w-full p-8 text-center">
                            <div
                                className={classNames(
                                    styles.about_title,
                                    "text-[28px] max-md:text-[22px] uppercase font-medium"
                                )}>
                                Доступ з різних пристроїв
                            </div>
                            <div
                                className={classNames(
                                    styles.about_description,
                                    "mt-2 max-w-[470px] mx-auto"
                                )}>
                                Тренуйся використовуючи будь-який з пристроїв:
                                комп’ютер, ноутбук, планшет або смартфон
                            </div>
                        </Panel>
                    </div>
                </div>
            </Container>
        </section>
    );
};
