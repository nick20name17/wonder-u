import { Container } from "@shared/ui/container";
import Image from "next/image";

export const AboutVideo = () => {
    return (
        <section className="pt-4 lg:pt-10">
            <Container
                size="full"
                className="grid grid-cols-2 gap-2 max-[1200px]:grid-cols-1">
                <div className="bg-[#E4E5FF] rounded-3xl p-14 max-md:px-4 max-md:py-8">
                    <div className="flex items-center gap-x-6">
                        <div className="size-[108px] max-md:size-20 bg-gradient-to-b from-[#C8CAFF] to-[#A79AF8] rounded-full relative">
                            <Image
                                className="size-[94px] max-md:size-16 rounded-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
                                src="/assets/images/avatar.png"
                                alt="Avatar"
                                width={94}
                                height={94}
                            />
                        </div>
                        <div className="bg-gradient-to-b from-[#C8CAFF] to-[#A79AF8] text-[34px] size-20 max-md:size-14 max-md:text-2xl flex items-center justify-center rounded-full">
                            ✨
                        </div>
                        <div className="bg-[#C8CAFF] text-[34px] size-20 max-md:size-14 max-md:text-2xl flex items-center justify-center rounded-full">
                            🌷
                        </div>
                        <div className="bg-[#F6FF7F] text-[34px] size-20 max-md:size-14 max-md:text-2xl flex items-center justify-center rounded-full">
                            🙌🏻
                        </div>
                    </div>
                    <h2 className="text-[28px] font-medium mt-3">
                        Трансформація тіла і свідомості: від фізичної активності
                        до щастя
                    </h2>
                    <p className="font-medium text-lg mt-6">
                        Регулярні фізичні вправи — важлива складова здорового
                        способу життя, що покращує фізичний стан, настрій і
                        рівень енергії. Як сертифікований тренер з міжнародними
                        сертифікатами в нутриціології, я бачу вражаючі
                        трансформації клієнтів, які впроваджують тренування у
                        своє життя. Я розробляю інноваційні програми, які
                        підтримують вашу мотивацію. Щодня створюю нові
                        тренування, щоб ви могли легко дотримуватися програми
                        протягом усього життя!
                    </p>
                </div>
                <div className="border border-[#E4E5FF] rounded-3xl overflow-hidden flex flex-col">
                    <div className="relative flex-1">
                        <Image
                            className="w-full h-[392px] object-cover"
                            src="/assets/images/video.jpg"
                            alt="video cover"
                            width={656}
                            height={392}
                        />
                        <button className="size-24 rounded-full flex items-center justify-center absolute z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 ">
                            <svg
                                className="ml-1"
                                width="34"
                                height="38"
                                viewBox="0 0 34 38"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M32.0577 16.4087C34.0422 17.5663 34.0422 20.4337 32.0577 21.5913L5.01161 37.3682C3.01164 38.5349 0.5 37.0923 0.5 34.7769L0.500002 3.22311C0.500002 0.907739 3.01164 -0.534875 5.01161 0.631774L32.0577 16.4087Z"
                                    fill="#F6FF7F"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="px-14 py-4 flex-1 flex items-center justify-center">
                        <button className="mx-auto h-14 w-full flex items-center justify-center gap-x-2 uppercase border border-[#A79AF8] text-center p-4 rounded-[5px]">
                            <span> Дивитись відео </span>
                            <svg
                                width="41"
                                height="40"
                                viewBox="0 0 41 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_b_3921_9625)">
                                    <rect
                                        x="0.5"
                                        width="40"
                                        height="40"
                                        rx="20"
                                        fill="#C8CAFF"
                                    />
                                    <rect
                                        x="0.75"
                                        y="0.25"
                                        width="39.5"
                                        height="39.5"
                                        rx="19.75"
                                        stroke="#C8CAFF"
                                        stroke-width="0.5"
                                    />
                                    <path
                                        d="M30.6417 18.285C31.9364 19.0618 31.9364 20.9382 30.6417 21.715L16.529 30.1826C15.1959 30.9824 13.5 30.0222 13.5 28.4676L13.5 11.5324C13.5 9.97779 15.1959 9.01757 16.529 9.8174L30.6417 18.285Z"
                                        fill="#F6FF7F"
                                    />
                                </g>
                                <defs>
                                    <filter
                                        id="filter0_b_3921_9625"
                                        x="-9.5"
                                        y="-10"
                                        width="60"
                                        height="60"
                                        filterUnits="userSpaceOnUse"
                                        color-interpolation-filters="sRGB">
                                        <feFlood
                                            flood-opacity="0"
                                            result="BackgroundImageFix"
                                        />
                                        <feGaussianBlur
                                            in="BackgroundImageFix"
                                            stdDeviation="5"
                                        />
                                        <feComposite
                                            in2="SourceAlpha"
                                            operator="in"
                                            result="effect1_backgroundBlur_3921_9625"
                                        />
                                        <feBlend
                                            mode="normal"
                                            in="SourceGraphic"
                                            in2="effect1_backgroundBlur_3921_9625"
                                            result="shape"
                                        />
                                    </filter>
                                </defs>
                            </svg>
                        </button>
                    </div>
                </div>
            </Container>
        </section>
    );
};
