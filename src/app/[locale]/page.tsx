"use client";
import { Button } from "@shared/ui/button";
import { Container } from "@shared/ui/container";
import { Panel } from "@shared/ui/panel";
import { Title } from "@shared/ui/title";
import { useTranslation } from "react-i18next";
// import { Badge } from "@shared/ui/badge";
import cn from "classnames";
import { gsap } from "gsap";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import styles from "./styles.module.sass";

// import Swiper core and required modules
import { EffectCards, Navigation } from "swiper/modules";

import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/scss/effect-cards";
import "swiper/scss/navigation";
// import 'swiper/scss/pagination';
// import 'swiper/scss/effect-fade';
import {
    Pricing,
    PricingItem,
    PricingItemButton,
    PricingItemList,
    PricingItemPrice,
    PricingItemTitle,
} from "@widgets/pricing";
import { TickerTape } from "@widgets/ticker-tape";

export default function Home() {
    const { t } = useTranslation(["common", "home"]);

    const textRef = useRef(null);
    const spanRef = useRef<HTMLDivElement>(null);

    const swiperRef = useRef<SwiperType>();

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
        <main className="flex flex-col gap-2 my-2">
            {/* Hero  */}
            <section>
                <Container size="full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                        <Panel className="p-4 col-span-1 relative min-h-[390px] lg:min-h-[520px] lg:order-1 w-full">
                            <div
                                className={cn(
                                    styles.hero_gradient,
                                    "absolute top-0 left-0 w-full h-full"
                                )}></div>
                            <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/images/home-hero-lg.png')] bg-cover bg-center bg-no-repeat"></div>
                            <div
                                className={cn(
                                    styles.hero_mask,
                                    "absolute top-[60%] left-0 w-full bottom-0"
                                )}></div>
                            <div className="absolute bottom-3 left-[10px] flex items-start flex-col gap-2">
                                <div className="pl-2 pr-4 h-[52px] inline-flex items-center gap-1 rounded-full bg-[var(--color-accent-acid-green)]">
                                    <svg
                                        width="36"
                                        height="36"
                                        viewBox="0 0 36 36"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect
                                            x="0.25"
                                            y="0.25"
                                            width="35.5"
                                            height="35.5"
                                            rx="17.75"
                                            stroke="#ECE3D6"
                                            stroke-width="0.5"
                                        />
                                        <path
                                            d="M8 9H14C15.0609 9 16.0783 9.42143 16.8284 10.1716C17.5786 10.9217 18 11.9391 18 13V27C18 26.2044 17.6839 25.4413 17.1213 24.8787C16.5587 24.3161 15.7956 24 15 24H8V9Z"
                                            stroke="#A79AF8"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M28 9H22C20.9391 9 19.9217 9.42143 19.1716 10.1716C18.4214 10.9217 18 11.9391 18 13V27C18 26.2044 18.3161 25.4413 18.8787 24.8787C19.4413 24.3161 20.2044 24 21 24H28V9Z"
                                            stroke="#A79AF8"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                    <span>
                                        {t("home:hero.badgePesonalPlan")}
                                    </span>
                                </div>
                                <div className="pl-2 pr-4 h-[52px] inline-flex items-center gap-1 rounded-full bg-[var(--color-accent-acid-green)]">
                                    <svg
                                        width="36"
                                        height="36"
                                        viewBox="0 0 36 36"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect
                                            x="0.25"
                                            y="0.25"
                                            width="35.5"
                                            height="35.5"
                                            rx="17.75"
                                            stroke="#ECE3D6"
                                            stroke-width="0.5"
                                        />
                                        <path
                                            d="M19 8L9 20H18L17 28L27 16H18L19 8Z"
                                            stroke="#A79AF8"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                    <span>Workouts</span>
                                </div>
                            </div>
                            <div className="absolute bottom-3 right-[10px] flex items-start flex-col sm:flex-row gap-1">
                                <div className="h-[64px] sm:h-[36px] w-[36px] sm:w-[64px] inline-flex items-center justify-center rounded-full bg-[var(--color-accent-acid-green)] text-[22px]">
                                    💪🏻
                                </div>
                                <div className="h-[36px] w-[36px] inline-flex items-center justify-center rounded-full bg-[var(--color-accent-acid-green)] text-[22px]">
                                    🤘🏻
                                </div>
                                <div className="h-[36px] w-[36px] inline-flex items-center justify-center rounded-full bg-[var(--color-accent-acid-green)] text-[22px]">
                                    🏋️
                                </div>
                            </div>
                        </Panel>
                        <Panel
                            outline="beige_selection"
                            className="px-2 py-8 lg:p-14 col-span-1 flex flex-col justify-center">
                            <Title
                                dangerouslySetInnerHTML={{
                                    __html: t("home:hero.title", {
                                        interpolation: { escapeValue: true },
                                    }),
                                }}
                            />
                            <p className="mt-4">{t("home:hero.description")}</p>
                            <div className="mt-8 sm:mt-14">
                                <Button
                                    href="/signup"
                                    className="w-full sm:w-[400px]">
                                    {t("home:hero.button")}
                                </Button>
                            </div>
                        </Panel>
                    </div>
                </Container>
            </section>
            {/* Points  */}
            <section>
                <Container size="full">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
                        <Panel
                            outline="beige_selection"
                            className={cn(
                                styles.points_item,
                                "px-7 py-8 col-span-1 w-full"
                            )}>
                            <div>
                                <svg
                                    width="42"
                                    height="42"
                                    viewBox="0 0 42 42"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M42 20.8395C40.4823 20.5186 29.9823 18.2574 27.4722 16.2369C27.4284 16.2004 26.9761 15.8649 26.5237 15.4053C26.0931 14.9677 25.6991 14.4717 25.6699 14.4279C23.6852 11.9552 21.4524 1.80167 21.0657 0H20.9343C20.5476 1.80167 18.3148 11.9552 16.3301 14.4279C16.2936 14.4717 15.9069 14.9677 15.4764 15.4053C15.024 15.8649 14.5716 16.2004 14.5278 16.2369C12.0104 18.2574 1.51772 20.5186 0 20.8395V20.9198C1.51772 21.2407 12.0177 23.5019 14.5278 25.5224C14.5716 25.5589 15.024 25.8944 15.4764 26.3539C15.9069 26.7916 16.3009 27.2876 16.3301 27.3314C18.4534 29.9719 20.8541 41.38 20.9854 42H21.0146C21.146 41.38 23.5466 29.9719 25.6699 27.3314C25.7064 27.2876 26.0931 26.7916 26.5237 26.3539C26.9761 25.8944 27.4284 25.5589 27.4722 25.5224C29.9896 23.5019 40.4823 21.2407 42 20.9198V20.8395Z"
                                        fill="#E0F56B"
                                    />
                                </svg>
                            </div>
                            <div
                                className={cn(
                                    styles.points_item_title,
                                    "mt-3"
                                )}>
                                200+ вправ
                            </div>
                            <div
                                className={cn(
                                    styles.points_item_description,
                                    "mt-4"
                                )}>
                                Розроблено на основі 10+ років досвіду роботи з
                                клієнтами із усього світу. Задіємо кожен м’яз.
                            </div>
                        </Panel>
                        <Panel
                            outline="beige_selection"
                            className={cn(
                                styles.points_item,
                                "px-7 py-8 col-span-1 w-full"
                            )}>
                            <div>
                                <svg
                                    width="43"
                                    height="42"
                                    viewBox="0 0 43 42"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M42.3335 20.8395C40.8158 20.5186 30.3158 18.2574 27.8057 16.2369C27.7619 16.2004 27.3095 15.8649 26.8572 15.4053C26.4266 14.9677 26.0326 14.4717 26.0034 14.4279C24.0187 11.9552 21.7859 1.80167 21.3992 0H21.2678C20.8811 1.80167 18.6483 11.9552 16.6636 14.4279C16.6271 14.4717 16.2404 14.9677 15.8099 15.4053C15.3575 15.8649 14.9051 16.2004 14.8613 16.2369C12.3439 18.2574 1.85122 20.5186 0.333496 20.8395V20.9198C1.85122 21.2407 12.3512 23.5019 14.8613 25.5224C14.9051 25.5589 15.3575 25.8944 15.8099 26.3539C16.2404 26.7916 16.6344 27.2876 16.6636 27.3314C18.7869 29.9719 21.1876 41.38 21.3189 42H21.3481C21.4795 41.38 23.8801 29.9719 26.0034 27.3314C26.0399 27.2876 26.4266 26.7916 26.8572 26.3539C27.3095 25.8944 27.7619 25.5589 27.8057 25.5224C30.3231 23.5019 40.8158 21.2407 42.3335 20.9198V20.8395Z"
                                        fill="#C8CAFF"
                                    />
                                </svg>
                            </div>
                            <div
                                className={cn(
                                    styles.points_item_title,
                                    "mt-3"
                                )}>
                                План харчування
                            </div>
                            <div
                                className={cn(
                                    styles.points_item_description,
                                    "mt-4"
                                )}>
                                Не до вподоби рис? Оберіть персональний план з
                                улюбленими стравами самостійно.
                            </div>
                        </Panel>
                        <Panel
                            outline="beige_selection"
                            className={cn(
                                styles.points_item,
                                "px-7 py-8 col-span-1 w-full"
                            )}>
                            <div>
                                <svg
                                    width="43"
                                    height="42"
                                    viewBox="0 0 43 42"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M42.6665 20.8395C41.1488 20.5186 30.6488 18.2574 28.1387 16.2369C28.0949 16.2004 27.6426 15.8649 27.1902 15.4053C26.7597 14.9677 26.3656 14.4717 26.3365 14.4279C24.3517 11.9552 22.1189 1.80167 21.7322 0H21.6008C21.2141 1.80167 18.9813 11.9552 16.9966 14.4279C16.9601 14.4717 16.5734 14.9677 16.1429 15.4053C15.6905 15.8649 15.2381 16.2004 15.1943 16.2369C12.677 18.2574 2.18422 20.5186 0.666504 20.8395V20.9198C2.18422 21.2407 12.6842 23.5019 15.1943 25.5224C15.2381 25.5589 15.6905 25.8944 16.1429 26.3539C16.5734 26.7916 16.9674 27.2876 16.9966 27.3314C19.1199 29.9719 21.5206 41.38 21.6519 42H21.6811C21.8125 41.38 24.2131 29.9719 26.3365 27.3314C26.3729 27.2876 26.7597 26.7916 27.1902 26.3539C27.6426 25.8944 28.0949 25.5589 28.1387 25.5224C30.6561 23.5019 41.1488 21.2407 42.6665 20.9198V20.8395Z"
                                        fill="#A79AF8"
                                    />
                                </svg>
                            </div>
                            <div
                                className={cn(
                                    styles.points_item_title,
                                    "mt-3"
                                )}>
                                Трекінг прогресу
                            </div>
                            <div
                                className={cn(
                                    styles.points_item_description,
                                    "mt-4"
                                )}>
                                Насолоджуйтесь процесом та фіксуйте результати,
                                що наближають вас до мети.
                            </div>
                        </Panel>
                    </div>
                </Container>
            </section>
            {/* About */}
            <section id="about">
                <Container size="full">
                    <div className="flex flex-col lg:flex-row gap-2">
                        <div className="grid grid-cols-2 gap-2">
                            <Panel className="w-full lg:w-[256px] aspect-[1/1] col-span-1 relative">
                                <Image
                                    src="/assets/images/home-points-photo.png"
                                    width={512}
                                    height={512}
                                    alt="Picture of the author"
                                    className="w-full h-full object-cover"
                                />
                                <div
                                    className={cn(
                                        styles.about_photo_gradient
                                    )}></div>
                            </Panel>
                            <Panel
                                bg="medium_lavander"
                                className="w-full lg:w-[256px] aspect-[1/1] col-span-1 relative">
                                <svg
                                    width="256"
                                    height="256"
                                    viewBox="0 0 256 256"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-full h-full">
                                    <path
                                        d="M389 126.364C370.137 122.092 239.637 91.997 208.44 65.1052C207.896 64.6198 202.274 60.154 196.651 54.0378C191.301 48.2129 186.404 41.6113 186.041 41.0288C161.374 8.11789 133.623 -127.021 128.817 -151H127.184C122.377 -127.021 94.6269 8.11789 69.9598 41.0288C69.5063 41.6113 64.7 48.2129 59.3494 54.0378C53.7268 60.154 48.1042 64.6198 47.5601 65.1052C16.2727 91.997 -114.137 122.092 -133 126.364V127.432C-114.137 131.704 16.3634 161.799 47.5601 188.691C48.1042 189.176 53.7268 193.642 59.3494 199.758C64.7 205.583 69.597 212.185 69.9598 212.767C96.35 247.911 126.186 399.748 127.819 408H128.182C129.814 399.748 159.651 247.911 186.041 212.767C186.494 212.185 191.301 205.583 196.651 199.758C202.274 193.642 207.896 189.176 208.44 188.691C239.728 161.799 370.137 131.704 389 127.432V126.364Z"
                                        fill="#F4F5FF"
                                        fill-opacity="0.1"
                                    />
                                </svg>
                                <div className="absolute inset-0 flex flex-col justify-center items-center gap-2">
                                    <div
                                        className={cn(
                                            "h-[56px] w-[36px] text-[22px] flex justify-center items-center rounded-full bg-[var(--color-accent-acid-green)]"
                                        )}>
                                        🏋️
                                    </div>
                                    <div className={cn(styles.about_slogan)}>
                                        Вправи
                                    </div>
                                </div>
                            </Panel>
                            <Panel
                                bg="beige_skin_nude"
                                className="col-span-full w-full p-8">
                                <div className={cn(styles.about_title)}>
                                    Ольга Сичова
                                </div>
                                <div
                                    className={cn(
                                        styles.about_description,
                                        "mt-2"
                                    )}>
                                    Авторка проєкту WonderU, тренер та
                                    нутриціолог
                                </div>
                            </Panel>
                        </div>
                        <Panel
                            outline="beige_selection"
                            className="lg:flex-1 w-full aspect-[16/9] max-h-[350px] lg:max-h-full lg:aspect-auto bg-[url('/assets/images/home-points-bg.jpg')] bg-cover bg-center relative">
                            <div
                                className={cn(
                                    styles.about_banner_gradient
                                )}></div>
                        </Panel>
                    </div>
                </Container>
            </section>
            {/* Line */}
            <TickerTape />
            {/* App description */}
            <section>
                <Container size="full">
                    <Panel
                        bg="gentle_lavander"
                        rounded="lg"
                        className="px-2 pt-8 pb-12 lg:pt-[120px]">
                        <Title className="text-center lg:px-[56px]">
                            Доступ 24/7 до програм тренувань, відеозаписів
                            виконання вправ, програм харчування та рецептів
                        </Title>
                        {/* <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={40}
              // slidesPerView={2}
              slidesPerView='auto'
              centeredSlides={true}
              loop={true}
              breakpoints={{
                // 640: {
                //   slidesPerView: 'auto',
                //   centeredSlides: true,
                //   spaceBetween: 40,
                // },
                960: {
                  centeredSlides: false,
                  slidesPerView: 3,
                  spaceBetween: 56,
                  enabled: false
                }
              }}
              // navigation
              // pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => {
                // swiper.slideTo(1, 1000, false)
              }}
              onSlideChange={() => console.log('slide change')}
              className="max-w-[940px] mx-auto mt-8"
            >
              <SwiperSlide
              // style={{ width: 'auto' }}
              >
                <Image
                  src="/assets/images/home-app-description-slide-1.png"
                  alt="App description"
                  width={276}
                  height={557}
                />
              </SwiperSlide>
              <SwiperSlide
              // style={{ width: 'auto' }}
              >
                <Image
                  src="/assets/images/home-app-description-slide-1.png"
                  alt="App description"
                  width={276}
                  height={557}
                />
              </SwiperSlide>
              <SwiperSlide
              // style={{ width: 'auto' }}
              >
                <Image
                  src="/assets/images/home-app-description-slide-1.png"
                  alt="App description"
                  width={276}
                  height={557}
                />
              </SwiperSlide>
            </Swiper> */}
                        <div className="flex flex-col lg:flex-row items-center lg:gap-20 mt-8 lg:mt-[120px] lg:mb-[72px] px-4 w-full max-w-[782px] mx-auto">
                            <div className="flex-1">
                                <Title className="text-center lg:text-left">
                                    Ставте власні цілі
                                </Title>
                                <p className="mt-4 lg:mt-6 text-center lg:text-left color-[var(--color-dark-night-black)]">
                                    Ваше самопочуття та здоров’я — найціннійший
                                    ресурс. Ми не обіцяємо вам екстримально
                                    швидке схуднення. Але ми гарантуємо, що{" "}
                                    <strong>ви досягнете своєї мети</strong>.
                                </p>
                                <div className="hidden lg:block lg:mt-[56px]">
                                    <Button href="/signup" className="">
                                        Спробувати безкоштовно
                                    </Button>
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                                <Image
                                    src="/assets/images/home-app-description-slide-1.png"
                                    alt="App description"
                                    width={276}
                                    height={557}
                                    className="mt-[96px] lg:mt-0"
                                />
                                <div className="lg:hidden mt-10">
                                    <Button
                                        href="/signup"
                                        className="min-w-[275px] sm:w-[400px]">
                                        {t("home:hero.button")}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Panel>
                </Container>
            </section>
            {/* How it works */}
            <section>
                <Container size="full">
                    <Title tag="h2" className="text-center px-2 mt-8 lg:mt-10">
                        Харчування, вправи, результат
                    </Title>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-rows-3 xl:grid-cols-3 xl:grid-rows-2 gap-2 mt-6 lg:mt-10">
                        <Panel
                            className="w-full min-h-[328px] row-span-1 bg-[url('/assets/images/home-how-it-works-1.jpg')] bg-cover bg-center bg-no-repeat py-6 px-2 lg:p-6"
                            outline="beige_selection">
                            <ul
                                className={cn(
                                    styles.how_it_works__pills,
                                    "flex flex-wrap gap-1"
                                )}>
                                <li
                                    className={cn(
                                        styles.how_it_works__pills_item
                                    )}>
                                    ❇️ медицинські знання
                                </li>
                                <li
                                    className={cn(
                                        styles.how_it_works__pills_item
                                    )}>
                                    💃 будова гарного тіла
                                </li>
                                <li
                                    className={cn(
                                        styles.how_it_works__pills_item
                                    )}>
                                    🥑️ здорове харчування
                                </li>
                                <li
                                    className={cn(
                                        styles.how_it_works__pills_item
                                    )}>
                                    🏄🏽‍♂️ міцне здоров’я
                                </li>
                                <li
                                    className={cn(
                                        styles.how_it_works__pills_item
                                    )}>
                                    💜️ лайфстайл
                                </li>
                                <li
                                    className={cn(
                                        styles.how_it_works__pills_item
                                    )}>
                                    🌸 стрункість
                                </li>
                                <li
                                    className={cn(
                                        styles.how_it_works__pills_item
                                    )}>
                                    ✌🏻️ задоволення від життя
                                </li>
                                <li
                                    className={cn(
                                        styles.how_it_works__pills_item
                                    )}>
                                    🕊️ самоповага
                                </li>
                                <li
                                    className={cn(
                                        styles.how_it_works__pills_item
                                    )}>
                                    ✨ нутріціологія
                                </li>
                                <li
                                    className={cn(
                                        styles.how_it_works__pills_item
                                    )}>
                                    🥗 рецепти на кожен день
                                </li>
                                <li
                                    className={cn(
                                        styles.how_it_works__pills_item
                                    )}>
                                    📈 трекінг результатів
                                </li>
                            </ul>
                        </Panel>
                        <div className="flex flex-col gap-2">
                            <Panel bg="acid_green" className="w-full p-8">
                                <h3
                                    className={cn(
                                        styles.how_it_works__subtitle
                                    )}>
                                    Покажемо та опишемо кожну деталь
                                </h3>
                                <p
                                    className={cn(
                                        styles.how_it_works__description,
                                        "mt-4"
                                    )}>
                                    Техніка виконання вправ — надважливий
                                    елемент у досягненні мети. Саме тому
                                    особливу увагу ми приділили детальному опису
                                    кожної вправи.
                                </p>
                            </Panel>
                            <Panel
                                bg="beige_skin_nude"
                                className="w-full flex-1 p-8">
                                <h3
                                    className={cn(
                                        styles.how_it_works__subtitle
                                    )}>
                                    Сбалансований план харчування і рецепти на
                                    кожен день
                                </h3>
                                <p
                                    className={cn(
                                        styles.how_it_works__description,
                                        "mt-4"
                                    )}>
                                    Ретельно підібрані рецепти з урахуванням
                                    всіх необхідних макро- та мікронутрієнтів,
                                    яких потребує наш організм для підтримання
                                    здорового самопочуття.
                                </p>
                            </Panel>
                        </div>
                        <Panel
                            bg="gentle_lavander"
                            className="w-full min-h-[328px] bg-[url('/assets/images/home-how-it-works-2.jpg')] bg-cover bg-center bg-no-repeat">
                            <div
                                className={cn(
                                    styles.how_it_works__gradient,
                                    "w-full h-full"
                                )}></div>
                        </Panel>
                        <div className="flex flex-col gap-2">
                            <Panel
                                bg="gentle_lavander"
                                className="w-full min-h-[164px] flex-1 bg-[url('/assets/images/home-how-it-works-3.jpg')] bg-cover bg-center bg-no-repeat"
                            />
                            <Panel bg="soft_lavander" className="w-full p-8">
                                <h3
                                    className={cn(
                                        styles.how_it_works__subtitle
                                    )}>
                                    Я можу де завгодно!
                                </h3>
                                <p
                                    className={cn(
                                        styles.how_it_works__description,
                                        "mt-4"
                                    )}>
                                    <strong>
                                        В залі чи вдома, тренування з
                                        обладнанням або власною вагою, 30 хвилин
                                        або 60
                                    </strong>{" "}
                                    — ви обираєте, адже вправи підібрані для
                                    різних умов і вашого комфорту.
                                </p>
                            </Panel>
                        </div>
                        <Panel className="w-full min-h-[328px] row-span-1 relative bg-gradient-to-b from-[#C8CAFF] to-[#A79AF8]">
                            <div className="top-6 left-6 right-6 bottom-0 absolute bg-[url('/assets/images/home-how-it-works-4.png')] bg-cover bg-top bg-no-repeat"></div>
                        </Panel>
                        <div className="flex flex-col gap-2">
                            <Panel bg="acid_green" className="w-full p-8">
                                <h3
                                    className={cn(
                                        styles.how_it_works__subtitle
                                    )}>
                                    Спорт доступний кожному
                                </h3>
                                <p
                                    className={cn(
                                        styles.how_it_works__description,
                                        "mt-4"
                                    )}>
                                    Оберіть вправи, що будуть комфортними
                                    особисто для вас. Ніяких жорстких обмежень,
                                    бо спорт має приносити задоволення.
                                </p>
                            </Panel>
                            <Panel
                                bg="gentle_lavander"
                                className="w-full min-h-[164px] flex-1 bg-[url('/assets/images/home-how-it-works-5.jpg')] bg-cover bg-top bg-no-repeat"></Panel>
                        </div>
                    </div>
                </Container>
            </section>
            {/* Promotion */}
            <section>
                <Container size="full">
                    <Panel
                        bg="gentle_lavander"
                        rounded="lg"
                        className="px-2 py-8 sm:px-8 sm:py-16 lg:px-[140px] lg:py-[156px]">
                        <div className="flex justify-center">
                            <svg
                                width="362"
                                height="45"
                                viewBox="0 0 362 45"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="max-w-[220px] lg:max-w-[362px]">
                                <path
                                    d="M42.2686 7.68367L44.4309 0.5H53.0441L50.8217 7.68367H42.2686Z"
                                    fill="#A79AF8"
                                />
                                <path
                                    d="M314.348 22.417C313.504 22.2455 307.668 21.0369 306.272 19.9569C306.248 19.9374 305.996 19.7581 305.745 19.5125C305.506 19.2785 305.287 19.0134 305.27 18.99C304.167 17.6684 302.926 12.2413 302.711 11.2783H302.638C302.423 12.2413 301.182 17.6684 300.079 18.99C300.058 19.0134 299.843 19.2785 299.604 19.5125C299.353 19.7581 299.101 19.9374 299.077 19.9569C297.677 21.0369 291.845 22.2455 291.001 22.417V22.4599C291.845 22.6315 297.681 23.8401 299.077 24.92C299.101 24.9395 299.353 25.1189 299.604 25.3645C299.843 25.5984 300.062 25.8635 300.079 25.8869C301.259 27.2983 302.593 33.3959 302.666 33.7273H302.683C302.756 33.3959 304.09 27.2983 305.27 25.8869C305.291 25.8635 305.506 25.5984 305.745 25.3645C305.996 25.1189 306.248 24.9395 306.272 24.92C307.672 23.8401 313.504 22.6315 314.348 22.4599V22.417Z"
                                    fill="#A79AF8"
                                />
                                <path
                                    d="M63.8141 22.5335C63.8141 12.0665 69.1286 3.2468 76.3913 0.5C65.0868 1.83596 55.7383 8.22807 55.7383 22.5335C55.7383 35.7394 64.9925 42.9079 76.2067 44.5C69.0383 41.6744 63.8141 32.9099 63.8141 22.5335Z"
                                    fill="#A79AF8"
                                />
                                <path
                                    d="M97.9464 22.5335C97.9464 12.0665 92.6319 3.2468 85.3691 0.5C96.6737 1.83596 106.022 8.22807 106.022 22.5335C106.022 35.7394 96.768 42.9079 85.5538 44.5C92.7222 41.6744 97.9464 32.9099 97.9464 22.5335Z"
                                    fill="#A79AF8"
                                />
                                <path
                                    d="M328.982 28.4974L328.966 26.9242V0.5H321.562V22.6543C321.562 22.6543 321.543 22.6503 321.531 22.6464V30.177C321.531 39.6869 330.046 43.602 335.899 43.602C330.951 41.197 328.982 37.337 328.982 28.4974Z"
                                    fill="#A79AF8"
                                />
                                <path
                                    d="M353.589 28.4974L353.604 26.9242V0.5H361.008V22.6543C361.008 22.6543 361.028 22.6503 361.039 22.6464V30.177C361.039 39.6869 352.525 43.602 346.672 43.602C351.62 41.197 353.589 37.337 353.589 28.4974Z"
                                    fill="#A79AF8"
                                />
                                <path
                                    d="M170.529 0.5H162.592V43.602H170.529V3.04872C170.529 2.64046 170.681 2.36694 171.056 2.36694H174.24C188.586 2.36694 195.909 7.50001 195.909 22.1025C195.909 36.7051 187.708 42.4248 178.035 43.3523C179.149 43.5069 179.101 43.5307 180.717 43.5307C194.105 43.5307 203.898 36.4989 203.898 22.1065C203.898 7.71406 193.806 0.559466 178.227 0.559466C178.027 0.559466 176.479 0.53173 174.196 0.519838C172.269 0.507947 170.525 0.503968 170.525 0.503968L170.529 0.5Z"
                                    fill="#A79AF8"
                                />
                                <path
                                    d="M273.584 24.7702C280.186 23.7277 286.884 18.1427 286.884 11.9711C286.884 2.90601 279.54 0.642696 271.456 0.5C271.281 0.5 269.6 0.5 269.6 0.5H250.592V43.602H258.531V2.36694H266.846C267.042 2.36694 267.808 2.37885 267.912 2.37885C276.202 2.37885 278.498 7.76957 278.498 11.9672C278.498 17.7305 275.268 20.8421 266.97 22.9112C266.551 22.9825 266.167 23.0538 265.848 23.1252C264.922 23.3353 264.579 24.4689 265.225 25.1586L277.58 39.226C279.939 41.9967 283.411 43.5981 287.068 43.5981H292.796C292.796 43.5981 290.425 42.5992 288.449 41.2277C287.667 40.6847 285.806 38.7742 285.806 38.7742L273.58 24.7622L273.584 24.7702Z"
                                    fill="#A79AF8"
                                />
                                <path
                                    d="M218.814 40.6807V21.4961H230.827V18.5708H218.814V3.42526H241.203V0.5H211.081V43.602H241.612V40.6807H218.814Z"
                                    fill="#A79AF8"
                                />
                                <path
                                    d="M17.7199 28.5957L17.2193 27.0243L9.43453 0.5H0.959961L9.93906 30.2731C12.8677 39.7758 23.4984 43.602 29.6947 43.602C23.7152 41.1979 20.4396 37.4306 17.7199 28.5996V28.5957Z"
                                    fill="#A79AF8"
                                />
                                <path
                                    d="M38.3713 28.5957L37.8707 27.0243L30.0859 0.5H21.6113L30.5904 30.2731C33.5191 39.7758 44.1497 43.602 50.346 43.602C44.3665 41.1979 41.091 37.4306 38.3713 28.5996V28.5957Z"
                                    fill="#A79AF8"
                                />
                                <path
                                    d="M153.612 0.5H149.454V34.3271L120.164 0.519805H114.102L114.11 6.17748L114.121 6.18937V43.602H118.28V10.2068L147.43 43.602H153.132V43.5941H153.612V0.5Z"
                                    fill="#A79AF8"
                                />
                            </svg>
                        </div>
                        <Title
                            className={cn(
                                styles.promotion__title,
                                "mb-4 text-center  mt-3 lg:mt-8"
                            )}>
                            Це простір, де <strong>ваші мрії</strong> про
                            ідеальне тіло стають реальністю, а{" "}
                            <strong>досягнуті результати</strong> перетворюються
                            на ваш <strong>новий спосіб життя</strong>.
                        </Title>
                    </Panel>
                </Container>
            </section>
            {/* About details */}
            <section>
                <Container size="full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2">
                        <Panel
                            className="w-full bg-[url('/assets/images/home-bio.jpg')] bg-cover bg-center bg-no-repeat p-2 sm:p-8 relative col-span-1 lg:col-span-1 xl:col-span-1 aspect-[2/3] lg:aspect-auto"
                            rounded="lg">
                            <div
                                className={
                                    "absolute top-0 left-0 right-0 bottom-0"
                                }
                                style={{
                                    background:
                                        "linear-gradient(180deg, rgba(246, 255, 127, 0) 61.29%, #F6FF7F 100%)",
                                }}></div>
                            <div className="bg-[var(--color-dark-night-black)] absolute bottom-[10px] left-[10px] right-[10px] p-8 rounded-[12px]">
                                <div className={styles.about_details_title}>
                                    Привіт, я Ольга Сичова😎
                                </div>
                                <div className={styles.about_details_position}>
                                    Персональний тренер і фахівець із
                                    нутріціології
                                </div>
                            </div>
                        </Panel>
                        <Panel
                            bg="soft_lavander"
                            rounded="lg"
                            className="px-2 py-8 sm:px-[56px] sm:py-[72px] w-full col-span-1 lg:col-span-1 xl:col-span-1">
                            <div className="flex flex-wrap gap-3">
                                <div className={styles.about_details_icon}>
                                    👋🏻
                                </div>
                                <div className={styles.about_details_icon}>
                                    🧘🏻‍♀️
                                </div>
                                <div className={styles.about_details_icon}>
                                    💪🏻
                                </div>
                                <div className={styles.about_details_icon}>
                                    🌷
                                </div>
                                <div className={styles.about_details_icon}>
                                    🤘🏻
                                </div>
                            </div>
                            <p
                                className={cn(
                                    styles.about_details_text,
                                    "mt-6"
                                )}>
                                Мене звати Ольга. Я міжнародно-сертифікований
                                персональний тренер і фахівець з
                                фітнес-харчування. Треную клієнтів вже понад 10
                                років і за цей час удосконалила свою
                                фітнес-стратегію так, щоб забезпечити найкращі
                                результати, але, що важливіше, робити це у
                                задоволення! Я знаю, що якщо вам подобаються
                                ваші тренування, ви, швидше за все, будете їх
                                продовжувати, а програма WonderU спрямована на{" "}
                                <strong>формування здорових звичок</strong> щодо
                                того, як ви тренуєтеся та харчуєтеся.
                            </p>
                            <div className="mt-6">
                                <Button className="w-full" variant="outline">
                                    Записатись на консультацію
                                </Button>
                            </div>
                        </Panel>
                        <div className="w-full flex flex-col lg:flex-col xl:flex-col gap-2 col-span-1 lg:col-span-2 xl:col-span-1">
                            <Panel
                                bg="acid_green"
                                rounded="lg"
                                className="px-2 py-8 sm:px-[56px] sm:py-[50px] w-full flex justify-center items-center min-h-[200px]">
                                <svg
                                    width="136"
                                    height="102"
                                    viewBox="0 0 136 102"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M83.8454 0H51.6546C23.2625 0 0.25 22.8314 0.25 51C0.25 79.1686 23.2692 102 51.6546 102H83.8454C112.238 102 135.25 79.162 135.25 51C135.25 22.8314 112.238 0 83.8454 0ZM58.689 79.5675C58.6354 79.8267 58.4077 80.0128 58.1464 80.0128C54.0396 80.0128 49.196 78.6635 45.1897 76.4036C41.6323 74.3963 36.9829 70.6875 35.0468 64.4064L24.4014 28.8134C24.3545 28.6472 24.3813 28.4677 24.4885 28.3282C24.589 28.1886 24.7565 28.1088 24.9307 28.1088H34.6113C34.8592 28.1088 35.0736 28.2683 35.1406 28.5076L44.4193 60.3851L44.9888 62.1664C47.9566 71.7908 51.447 76.1843 58.3474 78.9559C58.5953 79.0556 58.736 79.3149 58.6824 79.5675H58.689ZM82.3112 79.5675C82.2576 79.8267 82.0298 80.0128 81.7685 80.0128C77.6618 80.0128 72.8181 78.6635 68.8119 76.4036C65.2545 74.3963 60.6051 70.6875 58.669 64.4064L48.0236 28.8134C47.9767 28.6472 48.0035 28.4677 48.1107 28.3282C48.2112 28.1886 48.3787 28.1088 48.5528 28.1088H58.2335C58.4814 28.1088 58.6958 28.2683 58.7628 28.5076L68.0414 60.3851L68.6109 62.1664C71.5787 71.7908 75.0691 76.1843 81.9695 78.9559C82.2174 79.0556 82.3581 79.3149 82.3045 79.5675H82.3112ZM82.8874 31.9772L82.1906 32.6419C82.137 32.695 82.0968 32.7482 82.05 32.8014C81.0919 33.9778 79.9396 38.7967 79.5712 40.5581C79.5176 40.8106 79.2898 40.9968 79.0285 40.9968C78.7672 40.9968 78.5395 40.8106 78.4859 40.5581C78.1308 38.7967 77.0053 33.9779 76.1009 32.8679C76.0004 32.7482 75.9602 32.695 75.9066 32.6485L75.4309 32.1766C75.3773 32.1234 75.3237 32.0835 75.2701 32.037C74.0843 31.0865 69.2272 29.9566 67.4519 29.591C67.1973 29.5379 67.0097 29.3119 67.0097 29.0527C67.0097 28.7934 67.1973 28.5675 67.4519 28.5143C69.2272 28.1554 74.0843 27.0321 75.2031 26.1414C75.3237 26.0417 75.3773 26.0018 75.4242 25.9487L76.0406 25.3106C76.9919 24.1408 78.1174 19.3219 78.4724 17.5605C78.526 17.3013 78.7471 17.1219 79.0151 17.1219C79.2764 17.1219 79.5042 17.3013 79.5577 17.5605C79.9262 19.3219 81.0785 24.1408 81.9762 25.2508L82.807 26.0882L82.5189 26.5668L82.8673 26.1414C83.9861 27.0321 88.8431 28.162 90.6185 28.5143C90.8731 28.5675 91.0606 28.7934 91.0606 29.0527C91.0606 29.3119 90.8731 29.5379 90.6185 29.591C88.8431 29.95 83.9861 31.0865 82.8673 31.9772H82.8874ZM108.915 64.1339C108.915 75.6991 97.9142 80.0061 90.987 80.0061C90.7257 80.0061 90.5046 79.8267 90.4443 79.5741C90.384 79.3215 90.518 79.0689 90.7525 78.9559C96.6949 76.2308 98.7985 71.8506 98.7985 62.213L98.8186 60.4117V28.6406C98.8186 28.3348 99.0665 28.0889 99.3746 28.0889H108.332C108.64 28.0889 108.888 28.3348 108.888 28.6406V55.3536C108.915 55.4134 108.921 55.4732 108.921 55.533V64.1272L108.915 64.1339Z"
                                        fill="#353342"
                                    />
                                </svg>
                            </Panel>
                            <Panel
                                bg="gentle_lavander"
                                rounded="lg"
                                className={cn(
                                    styles.about_details_description,
                                    "px-8 py-8 sm:px-[56px] sm:py-[72px] w-full flex-1 flex items-center"
                                )}
                                style={{
                                    background:
                                        "linear-gradient(180deg, #C8CAFF 0%, #A79AF8 100%)",
                                }}>
                                WonderU — це не просто веб-додаток для особистої
                                трансформації. Це спільнота людей, що об’єднані
                                однієї метою — почувати себе здоровими і
                                сильними незалежно від генетики.
                            </Panel>
                        </div>
                    </div>
                </Container>
            </section>
            {/* Reviews */}
            <section>
                <Container size="full">
                    <Panel
                        bg="gentle_lavander"
                        rounded="lg"
                        className="px-2 py-8 sm:px-[56px] sm:py-[72px]">
                        <Title className={cn("text-center")}>Відгуки</Title>
                        <div className="max-w-[400px] mx-auto relative mt-8">
                            {/* <div className={cn(styles.reviews_card, "w-full bg-[var(--color-lavander-medium-lavander)] absolute top-[-18px] left-[4%] rotate-[12deg]")}>
                <div className={cn("flex items-center gap-2")}>
                  <div className={cn(styles.reviews_card_photo)}></div>
                  <div className={cn(styles.reviews_card_fullname)}>Валентина П.</div>
                </div>
                <div className={cn("flex gap-1 mt-4")}>
                  {[...Array(5)].map((_, index) => (
                    <svg key={index} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.6611 2L15.7511 8.26L22.6611 9.27L17.6611 14.14L18.8411 21.02L12.6611 17.77L6.48113 21.02L7.66113 14.14L2.66113 9.27L9.57113 8.26L12.6611 2Z" fill="#C8CAFF" />
                    </svg>
                  ))}
                </div>
                <div className={cn(styles.reviews_card_text, 'mt-4')}>
                  Легко і зручно використовувати. Програми вправ на кожен день легко виконувати та результати помітні вже за місяць.
                </div>
                <div className={cn(styles.reviews_card_mark, 'mt-4')}>
                  Essential nutrients:
                </div>
              </div>
              <div className={cn(styles.reviews_card, "w-full bg-[var(--color-accent-acid-green)] absolute top-[-18px] left-[4%] rotate-[4.16deg]")}>
                <div className={cn("flex items-center gap-2")}>
                  <div className={cn(styles.reviews_card_photo)}></div>
                  <div className={cn(styles.reviews_card_fullname)}>Валентина П.</div>
                </div>
                <div className={cn("flex gap-1 mt-4")}>
                  {[...Array(5)].map((_, index) => (
                    <svg key={index} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.6611 2L15.7511 8.26L22.6611 9.27L17.6611 14.14L18.8411 21.02L12.6611 17.77L6.48113 21.02L7.66113 14.14L2.66113 9.27L9.57113 8.26L12.6611 2Z" fill="#C8CAFF" />
                    </svg>
                  ))}
                </div>
                <div className={cn(styles.reviews_card_text, 'mt-4')}>
                  Легко і зручно використовувати. Програми вправ на кожен день легко виконувати та результати помітні вже за місяць.
                </div>
                <div className={cn(styles.reviews_card_mark, 'mt-4')}>
                  Essential nutrients:
                </div>
              </div>
              <div className={cn(styles.reviews_card, "w-full] bg-[var(--color-lavander-gentle-lavander)] absolute top-[-18px] left-[-10%] rotate-[-4.28deg]")}>
                <div className={cn("flex items-center gap-2")}>
                  <div className={cn(styles.reviews_card_photo)}></div>
                  <div className={cn(styles.reviews_card_fullname)}>Валентина П.</div>
                </div>
                <div className={cn("flex gap-1 mt-4")}>
                  {[...Array(5)].map((_, index) => (
                    <svg key={index} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.6611 2L15.7511 8.26L22.6611 9.27L17.6611 14.14L18.8411 21.02L12.6611 17.77L6.48113 21.02L7.66113 14.14L2.66113 9.27L9.57113 8.26L12.6611 2Z" fill="#C8CAFF" />
                    </svg>
                  ))}
                </div>
                <div className={cn(styles.reviews_card_text, 'mt-4')}>
                  Легко і зручно використовувати. Програми вправ на кожен день легко виконувати та результати помітні вже за місяць.
                </div>
                <div className={cn(styles.reviews_card_mark, 'mt-4')}>
                  Essential nutrients:
                </div>
              </div> */}
                            <Swiper
                                // install Swiper modules
                                modules={[Navigation, EffectCards]}
                                // spaceBetween={40}
                                // slidesPerView={1}
                                // centeredSlides={true}
                                initialSlide={5}
                                loop={true}
                                // navigation
                                // scrollbar={{ draggable: true }}
                                effect="cards"
                                onSlideChange={() =>
                                    console.log("slide change")
                                }
                                onBeforeInit={(swiper) => {
                                    swiperRef.current = swiper;
                                }}
                                injectStyles={[
                                    `
                    :host .swiper-3d .swiper-slide-shadow  {
                      background: rgba(0, 0, 0, 0.0);
                    }
                  `,
                                ]}
                                className="relative">
                                <SwiperSlide>
                                    <div
                                        className={cn(
                                            styles.reviews_card,
                                            "w-full bg-white"
                                        )}>
                                        <div
                                            className={cn(
                                                "flex items-center gap-2"
                                            )}>
                                            <div
                                                className={cn(
                                                    styles.reviews_card_photo
                                                )}>
                                                <Image
                                                    src="/assets/images/review-1.png"
                                                    alt="Марія Іванець"
                                                    width={36}
                                                    height={36}
                                                />
                                            </div>
                                            <div
                                                className={cn(
                                                    styles.reviews_card_fullname
                                                )}>
                                                Марія Іванець
                                            </div>
                                        </div>
                                        <div className={cn("flex gap-1 mt-4")}>
                                            {[...Array(5)].map((_, index) => (
                                                <svg
                                                    key={index}
                                                    width="25"
                                                    height="24"
                                                    viewBox="0 0 25 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M12.6611 2L15.7511 8.26L22.6611 9.27L17.6611 14.14L18.8411 21.02L12.6611 17.77L6.48113 21.02L7.66113 14.14L2.66113 9.27L9.57113 8.26L12.6611 2Z"
                                                        fill="#C8CAFF"
                                                    />
                                                </svg>
                                            ))}
                                        </div>
                                        <div
                                            className={cn(
                                                styles.reviews_card_text,
                                                "mt-4"
                                            )}>
                                            Мене врятували рецепти на платформі.
                                            Займаюсь спортом вже десь місяців 8,
                                            результатів толком не бачила.
                                            Говорять, багато на що впливає
                                            харчування. Але от ненавиджу я пп.
                                            Точніше раніше ненавиділа) дякую
                                            автору)) зручно, що я собі обираю
                                            сама рецепт, а не по строгому меню
                                            йду. Бо я половину їжі не їм, а тут
                                            вибираю те, що мені смачне буде.
                                            Кілограми йдуть нарешті.
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div
                                        className={cn(
                                            styles.reviews_card,
                                            "w-full bg-[var(--color-lavander-gentle-lavander)]"
                                        )}>
                                        <div
                                            className={cn(
                                                "flex items-center gap-2"
                                            )}>
                                            <div
                                                className={cn(
                                                    styles.reviews_card_photo
                                                )}>
                                                <Image
                                                    src="/assets/images/review-2.png"
                                                    alt="Марія Іванець"
                                                    width={36}
                                                    height={36}
                                                />
                                            </div>
                                            <div
                                                className={cn(
                                                    styles.reviews_card_fullname
                                                )}>
                                                Аліна Васюків
                                            </div>
                                        </div>
                                        <div className={cn("flex gap-1 mt-4")}>
                                            {[...Array(5)].map((_, index) => (
                                                <svg
                                                    key={index}
                                                    width="25"
                                                    height="24"
                                                    viewBox="0 0 25 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M12.6611 2L15.7511 8.26L22.6611 9.27L17.6611 14.14L18.8411 21.02L12.6611 17.77L6.48113 21.02L7.66113 14.14L2.66113 9.27L9.57113 8.26L12.6611 2Z"
                                                        fill="#C8CAFF"
                                                    />
                                                </svg>
                                            ))}
                                        </div>
                                        <div
                                            className={cn(
                                                styles.reviews_card_text,
                                                "mt-4"
                                            )}>
                                            Я думала що я і спорт не поєднувані,
                                            але тут зручно займатися. Пробувала
                                            вже 3 платформи, дуже швидко
                                            набридає і втрачаю мотивацію. Ну і
                                            плюс робота, діти, дві собаки і
                                            любов до борща 😂 Вже скинула 4 кг,
                                            що для мене вже досягнення. Поки
                                            мені все подобається, сподіваюсь
                                            напишу ще відгук коли досягну мети
                                            -20кг (зараз важу 82).
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div
                                        className={cn(
                                            styles.reviews_card,
                                            "w-full bg-[var(--color-accent-acid-green)]"
                                        )}>
                                        <div
                                            className={cn(
                                                "flex items-center gap-2"
                                            )}>
                                            <div
                                                className={cn(
                                                    styles.reviews_card_photo
                                                )}>
                                                <Image
                                                    src="/assets/images/review-3.png"
                                                    alt="Марія Іванець"
                                                    width={36}
                                                    height={36}
                                                />
                                            </div>
                                            <div
                                                className={cn(
                                                    styles.reviews_card_fullname
                                                )}>
                                                Олеся Стефанчук
                                            </div>
                                        </div>
                                        <div className={cn("flex gap-1 mt-4")}>
                                            {[...Array(5)].map((_, index) => (
                                                <svg
                                                    key={index}
                                                    width="25"
                                                    height="24"
                                                    viewBox="0 0 25 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M12.6611 2L15.7511 8.26L22.6611 9.27L17.6611 14.14L18.8411 21.02L12.6611 17.77L6.48113 21.02L7.66113 14.14L2.66113 9.27L9.57113 8.26L12.6611 2Z"
                                                        fill="#C8CAFF"
                                                    />
                                                </svg>
                                            ))}
                                        </div>
                                        <div
                                            className={cn(
                                                styles.reviews_card_text,
                                                "mt-4"
                                            )}>
                                            У Олі максимально професійний
                                            підхід! Тренування з нею завжди
                                            цікаві й абсолютно ненапряжні. Вона
                                            завжди підбираєш вправи, які
                                            підходять саме мені, і це так
                                            мотивує! Поради з харчування взагалі
                                            не відчуваються як дієта, усе так
                                            смачно й легко. Завдяки Олі я
                                            нарешті зрозуміла, що здоровий
                                            спосіб життя – це комфортно!
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div
                                        className={cn(
                                            styles.reviews_card,
                                            "w-full bg-[var(--color-lavander-medium-lavander)]"
                                        )}>
                                        <div
                                            className={cn(
                                                "flex items-center gap-2"
                                            )}>
                                            <div
                                                className={cn(
                                                    styles.reviews_card_photo
                                                )}>
                                                <Image
                                                    src="/assets/images/review-4.png"
                                                    alt="Марія Іванець"
                                                    width={36}
                                                    height={36}
                                                />
                                            </div>
                                            <div
                                                className={cn(
                                                    styles.reviews_card_fullname
                                                )}>
                                                Інга Д.
                                            </div>
                                        </div>
                                        <div className={cn("flex gap-1 mt-4")}>
                                            {[...Array(5)].map((_, index) => (
                                                <svg
                                                    key={index}
                                                    width="25"
                                                    height="24"
                                                    viewBox="0 0 25 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M12.6611 2L15.7511 8.26L22.6611 9.27L17.6611 14.14L18.8411 21.02L12.6611 17.77L6.48113 21.02L7.66113 14.14L2.66113 9.27L9.57113 8.26L12.6611 2Z"
                                                        fill="#C8CAFF"
                                                    />
                                                </svg>
                                            ))}
                                        </div>
                                        <div
                                            className={cn(
                                                styles.reviews_card_text,
                                                "mt-4"
                                            )}>
                                            Я не очікувала, що тренування можуть
                                            приносити таке задоволення! Немає
                                            відчуття перевантаження, а ще й
                                            багато енергії. Поради від Олі щодо
                                            харчування – це просто знахідка.
                                            Вони практичні і реалістичні, легко
                                            втілити в життя. Дуже вдячна за
                                            професіоналізм та позитив!
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="rotate-[12deg]">
                                    <div
                                        className={cn(
                                            styles.reviews_card,
                                            "w-full bg-white"
                                        )}>
                                        <div
                                            className={cn(
                                                "flex items-center gap-2"
                                            )}>
                                            <div
                                                className={cn(
                                                    styles.reviews_card_photo
                                                )}>
                                                <Image
                                                    src="/assets/images/review-5.png"
                                                    alt="Марія Іванець"
                                                    width={36}
                                                    height={36}
                                                />
                                            </div>
                                            <div
                                                className={cn(
                                                    styles.reviews_card_fullname
                                                )}>
                                                Вероніка Сабардінова
                                            </div>
                                        </div>
                                        <div className={cn("flex gap-1 mt-4")}>
                                            {[...Array(5)].map((_, index) => (
                                                <svg
                                                    key={index}
                                                    width="25"
                                                    height="24"
                                                    viewBox="0 0 25 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M12.6611 2L15.7511 8.26L22.6611 9.27L17.6611 14.14L18.8411 21.02L12.6611 17.77L6.48113 21.02L7.66113 14.14L2.66113 9.27L9.57113 8.26L12.6611 2Z"
                                                        fill="#C8CAFF"
                                                    />
                                                </svg>
                                            ))}
                                        </div>
                                        <div
                                            className={cn(
                                                styles.reviews_card_text,
                                                "mt-4"
                                            )}>
                                            Я в захваті від тренувань з Олею!
                                            Вправи продумані, а поради з
                                            харчування – справжній порятунок для
                                            мого здоров`я. Оля не просто вчить
                                            нас тренуватися, а допомагає
                                            зрозуміти, як працює наше тіло.
                                            Результати помітні, і я відчуваю
                                            себе набагато краще. Спасибі за
                                            професіоналізм і підтримку!
                                        </div>
                                    </div>
                                </SwiperSlide>
                                {/* {[...Array(3)].map((_, index) => (
                  <SwiperSlide
                    key={index}
                  >
                    <div className={cn(styles.reviews_card, "w-full bg-white")}>
                      <div className={cn("flex items-center gap-2")}>
                        <div className={cn(styles.reviews_card_photo)}></div>
                        <div className={cn(styles.reviews_card_fullname)}>{index} Валентина П.</div>
                      </div>
                      <div className={cn("flex gap-1 mt-4")}>
                        {[...Array(5)].map((_, index) => (
                          <svg key={index} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.6611 2L15.7511 8.26L22.6611 9.27L17.6611 14.14L18.8411 21.02L12.6611 17.77L6.48113 21.02L7.66113 14.14L2.66113 9.27L9.57113 8.26L12.6611 2Z" fill="#C8CAFF" />
                          </svg>
                        ))}
                      </div>
                      <div className={cn(styles.reviews_card_text, 'mt-4')}>
                        Легко і зручно використовувати. Програми вправ на кожен день легко виконувати та результати помітні вже за місяць.
                      </div>
                      <div className={cn(styles.reviews_card_mark, 'mt-4')}>
                        Essential nutrients:
                      </div>
                    </div>
                  </SwiperSlide>
                ))} */}
                            </Swiper>
                            <div className="flex items-center justify-center gap-8 mt-6 lg:mt-0">
                                <button
                                    onClick={() =>
                                        swiperRef.current?.slidePrev()
                                    }
                                    className="w-[48px] h-[48px] rounded-full flex items-center justify-center border border-[var(--color-dark-night-black-support)] lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:left-0 lg:-translate-x-[120px] z-10">
                                    <svg
                                        width="25"
                                        height="25"
                                        viewBox="0 0 25 25"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M15.6612 18.8943L9.66122 12.8943L15.6612 6.89429"
                                            stroke="#9694A9"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </button>
                                <button
                                    onClick={() =>
                                        swiperRef.current?.slideNext()
                                    }
                                    className="w-[48px] h-[48px] rounded-full flex items-center justify-center border border-[var(--color-dark-night-black-support)] lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-0 z-10 lg:translate-x-[120px]">
                                    <svg
                                        width="25"
                                        height="25"
                                        viewBox="0 0 25 25"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M9.33875 18.8943L15.3387 12.8943L9.33875 6.89429"
                                            stroke="#9694A9"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </Panel>
                </Container>
            </section>
            {/* Pricing */}
            <section id="pricing">
                <Container size="full">
                    <Panel
                        bg="dark_lavander"
                        rounded="lg"
                        className="px-2 py-8 sm:px-[56px] sm:py-[76px] relative">
                        <div
                            className={cn(
                                styles.pricing__bg,
                                "absolute hidden top-0 left-0 w-full h-full max-w-[733px] lg:block"
                            )}>
                            <svg
                                viewBox="0 0 733 644"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-full h-full">
                                <path
                                    d="M733 333.033C693.612 324.1 421.112 261.164 355.97 204.927C354.833 203.911 343.093 194.573 331.352 181.782C320.179 169.601 309.954 155.795 309.196 154.577C257.688 85.7528 199.742 -196.854 189.705 -247H186.296C176.259 -196.854 118.313 85.7528 66.8049 154.577C65.858 155.795 55.8218 169.601 44.6491 181.782C32.9083 194.573 21.1678 203.911 20.0316 204.927C-45.3002 261.164 -317.612 324.1 -357 333.033V335.267C-317.612 344.2 -45.1109 407.137 20.0316 463.374C21.1678 464.389 32.9083 473.727 44.6491 486.518C55.8218 498.699 66.0474 512.505 66.8049 513.723C121.911 587.217 184.213 904.743 187.622 922H188.38C191.788 904.743 254.09 587.217 309.196 513.723C310.143 512.505 320.179 498.699 331.352 486.518C343.093 473.727 354.833 464.389 355.97 463.374C421.301 407.137 693.612 344.2 733 335.267V333.033Z"
                                    fill="#F4F5FF"
                                    fill-opacity="0.1"
                                />
                            </svg>
                        </div>
                        <div
                            className={cn(
                                "absolute top-0 right-0 w-full h-full max-w-[436px]"
                            )}>
                            <svg
                                viewBox="0 0 436 404"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-full h-full max-w-[436px] max-h-[404px]">
                                <path
                                    d="M436 168.716C420.245 165.147 311.245 140.005 285.188 117.539C284.733 117.133 280.037 113.402 275.341 108.293C270.872 103.426 266.782 97.9114 266.479 97.4248C245.875 69.9303 222.697 -42.9672 218.682 -63H217.318C213.304 -42.9672 190.125 69.9303 169.522 97.4248C169.143 97.9114 165.129 103.426 160.66 108.293C155.963 113.402 151.267 117.133 150.813 117.539C124.68 140.005 15.7554 165.147 0 168.716V169.608C15.7554 173.177 124.756 198.319 150.813 220.785C151.267 221.19 155.963 224.921 160.66 230.031C165.129 234.897 169.219 240.412 169.522 240.899C191.564 270.258 216.485 397.106 217.849 404H218.152C219.515 397.106 244.436 270.258 266.479 240.899C266.857 240.412 270.872 234.897 275.341 230.031C280.037 224.921 284.733 221.19 285.188 220.785C311.321 198.319 420.245 173.177 436 169.608V168.716Z"
                                    fill="#F4F5FF"
                                    fill-opacity="0.1"
                                />
                            </svg>
                        </div>
                        <div
                            className={cn(
                                "absolute bottom-[136px] right-0 w-full h-full max-w-[190px] max-h-[203px]"
                            )}>
                            <svg
                                width="190"
                                height="203"
                                viewBox="0 0 190 203"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-full h-full max-w-[190px] max-h-[203px]">
                                <path
                                    d="M190 100.724C183.134 99.1731 135.634 88.244 124.279 78.4783C124.081 78.302 122.035 76.6803 119.988 74.4592C118.04 72.3438 116.258 69.9465 116.126 69.735C107.148 57.7834 97.0468 8.70806 95.2973 0H94.7029C92.9535 8.70806 82.8527 57.7834 73.8742 69.735C73.7092 69.9465 71.9598 72.3438 70.0122 74.4592C67.9657 76.6803 65.9192 78.302 65.7211 78.4783C54.333 88.244 6.86588 99.1731 0 100.724V101.112C6.86588 102.663 54.366 113.593 65.7211 123.358C65.9192 123.535 67.9657 125.156 70.0122 127.377C71.9598 129.493 73.7422 131.89 73.8742 132.102C83.4799 144.864 94.3399 200.003 94.934 203H95.0662C95.6603 200.003 106.52 144.864 116.126 132.102C116.291 131.89 118.04 129.493 119.988 127.377C122.035 125.156 124.081 123.535 124.279 123.358C135.667 113.593 183.134 102.663 190 101.112V100.724Z"
                                    fill="#F4F5FF"
                                    fill-opacity="0.1"
                                />
                            </svg>
                        </div>
                        <Title
                            tag="h2"
                            className={cn(
                                styles.pricing__title,
                                "text-center relative z-10"
                            )}>
                            Тарифи
                        </Title>
                        <p
                            className={cn(
                                styles.pricing__description,
                                "text-center mt-2 lg:mt-3"
                            )}>
                            Обирайте комфортний тариф для себе
                        </p>
                        <Pricing className="grid grid-cols-1 lg:grid-cols-3 items-start gap-4 max-w-[400px] lg:max-w-[1024px] mx-auto mt-6 lg:mt-12 relative z-10">
                            <PricingItem className="w-full">
                                <PricingItemTitle bg="marsh_green">
                                    Безкоштовний пробний період
                                </PricingItemTitle>
                                <PricingItemPrice units="₴" value="0">
                                    пробний період
                                </PricingItemPrice>
                                <PricingItemList
                                    list={[
                                        "Персональний план",
                                        "7-и денний доступ",
                                        "Закрита спільнота однодумців",
                                    ]}
                                />
                                <PricingItemButton
                                    onClick={() => {
                                        alert("Coming soon");
                                    }}>
                                    Приєднатися безкоштовно
                                </PricingItemButton>
                            </PricingItem>
                            <PricingItem className="w-full">
                                <PricingItemTitle bg="acid_green">
                                    Щомісячна передплата
                                </PricingItemTitle>
                                <PricingItemPrice units="₴" value="499">
                                    Щомісячний платіж
                                </PricingItemPrice>
                                <PricingItemList
                                    list={[
                                        "Персональний план",
                                        "30 днів доступу",
                                        "Закрита спільнота однодумців",
                                        "Щотижнева онлайн-підтримка",
                                    ]}
                                />
                                <PricingItemButton
                                    onClick={() => {
                                        alert("Coming soon");
                                    }}
                                    variant="secondary">
                                    Приєднатися за ₴499 в місяць
                                </PricingItemButton>
                            </PricingItem>
                            <PricingItem className="w-full">
                                <PricingItemTitle bg="dark_lavander">
                                    Річна передплата / економія ₴ 998
                                </PricingItemTitle>
                                <PricingItemPrice units="₴" value="4990">
                                    Одноразовий платіж / 13.67 грн в день
                                </PricingItemPrice>
                                <PricingItemList
                                    list={[
                                        "Персональний план",
                                        "12 місяців доступу",
                                        "Закрита спільнота однодумців",
                                        "Постійна онлайн-підтримка",
                                        "Безкоштовна консультація щомісяця",
                                        "Розбір аналізів та рекомендації",
                                    ]}
                                />
                                <div className="flex-1 flex items-end justify-center">
                                    <PricingItemButton
                                        onClick={() => {
                                            alert("Coming soon");
                                        }}>
                                        Приєднатися за ₴4990 на рік
                                    </PricingItemButton>
                                </div>
                            </PricingItem>
                        </Pricing>
                    </Panel>
                </Container>
            </section>
            {/* Banner */}
            <section>
                <Container size="full">
                    <Panel
                        rounded="lg"
                        className={cn(
                            styles.banner,
                            "px-2 py-8 pb-0 lg:px-[56px] lg:py-[72px] relative lg:h-[462px] flex flex-col justify-center"
                        )}>
                        <div
                            className={cn(
                                styles.banner_text,
                                "gap-1 lg:gap-0 lg:max-w-[600px] xl:max-w-[815px]"
                            )}>
                            <span className="px-3 py-2 lg:px-6 lg:py-4">
                                Звісно
                            </span>
                            <span className="px-3 py-2 lg:px-6 lg:py-4 bg-[var(--color-lavander-tender-lavander)]">
                                Будувати
                            </span>
                            <span className="px-3 py-2 lg:px-6 lg:py-4">
                                Нові звички буде
                            </span>
                            <span className="px-3 py-2 lg:px-6 lg:py-4 bg-[var(--color-lavander-soft-lavander)]">
                                Важко,
                            </span>
                            <span className="px-3 py-2 lg:px-6 lg:py-4">
                                Але ми
                            </span>
                            <span className="px-3 py-2 lg:px-6 lg:py-4 bg-[#E0F56B]">
                                Впораємось
                            </span>
                            <span className="px-3 py-2 lg:px-6 lg:py-4 bg-[#E0F56B]">
                                Разом
                            </span>
                            <span className="py-2 lg:px-6 lg:py-4 bg-[var(--color-lavander-tender-lavander)] w-[44px] lg:w-[84px] flex items-center justify-center">
                                🤗
                            </span>
                            <span className="py-2 lg:px-6 lg:py-4 bg-[var(--color-base-beige-skin-nude)] w-[116px] lg:w-[151px] flex items-center justify-center">
                                🔥
                            </span>
                            <span className="py-2 lg:px-6 lg:py-4 bg-[var(--color-lavander-soft-lavander)] w-[44px] lg:w-[84px] flex items-center justify-center">
                                💪🏻
                            </span>
                        </div>
                        <div
                            className={cn(
                                styles.banner_image,
                                "h-[243px] block lg:hidden w-full bg-[url(/assets/images/home-banner.png)] bg-contain bg-no-repeat bg-center"
                            )}></div>
                        <div
                            className={cn(
                                styles.banner_image,
                                "w-full hidden lg:block bg-[url(/assets/images/home-banner-lg.png)] bg-contain bg-no-repeat bg-right absolute right-0 top-0 bottom-0"
                            )}></div>
                    </Panel>
                </Container>
            </section>
        </main>
    );
}

// const SwiperNext = () => {
//   const swiper = useSwiper();
//   return (
//     <div onClick={() => swiper.slideNext()} className="w-[48px] h-[48px] rounded-full flex items-center justify-center border border-[var(--color-dark-night-black-support)]">
//       <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path d="M9.33887 18.8945L15.3389 12.8945L9.33887 6.89453" stroke="#9694A9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
//       </svg>
//     </div>
//   );
// }

// const SwiperPrev = () => {
//   const swiper = useSwiper();
//   return (
//     <button onClick={() => swiper.slidePrev()} className="w-[48px] h-[48px] rounded-full flex items-center justify-center border border-[var(--color-dark-night-black-support)]">
//       <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path d="M15.6611 18.8945L9.66113 12.8945L15.6611 6.89453" stroke="#9694A9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
//       </svg>
//     </button>
//   );
// }
