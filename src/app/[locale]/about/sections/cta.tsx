import { Button } from "@shared/ui/button";

export const AboutCTA = () => {
    return (
        <section className="relative  h-[368px] rounded-[25px] overflow-hidden">
            <svg
                className="absolute inset-0 z-0 min-w-full min-h-full "
                viewBox="0 0 1389 368"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_3921_8586)">
                    <rect
                        width="1389"
                        height="368"
                        fill="url(#paint0_linear_3921_8586)"
                    />
                    <rect
                        x="1162.64"
                        y="199.205"
                        width="301.364"
                        height="239.318"
                        rx="119.659"
                        fill="#E4E5FF"
                        fill-opacity="0.2"
                    />
                    <rect
                        x="1074"
                        y="115"
                        width="119.659"
                        height="101.932"
                        rx="50.9659"
                        fill="#E4E5FF"
                        fill-opacity="0.2"
                    />
                    <rect
                        x="209"
                        y="326.234"
                        width="368"
                        height="292.235"
                        rx="146.118"
                        transform="rotate(180 209 326.234)"
                        fill="#E4E5FF"
                        fill-opacity="0.2"
                    />
                </g>
                <defs>
                    <linearGradient
                        id="paint0_linear_3921_8586"
                        x1="694.5"
                        y1="0"
                        x2="694.5"
                        y2="368"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="#C8CAFF" />
                        <stop offset="1" stop-color="#A79AF8" />
                    </linearGradient>
                    <clipPath id="clip0_3921_8586">
                        <rect width="1389" height="368" fill="white" />
                    </clipPath>
                </defs>
            </svg>
            <div className="relative z-50 h-full flex flex-col justify-center items-center">
                <div className="text-4xl text-[#353342] max-md:text-xl max-[1240px]:flex-wrap  flex items-center justify-center gap-3  uppercase">
                    <div className="px-6 max-md:px-3 rounded-full bg-[#E4E5FF]  size-20 flex items-center justify-center  max-md:size-10">
                        👑
                    </div>
                    <div className="w-52 px-6 max-md:px-3 rounded-full bg-[#F4F5FF] max-md:w-24  h-20 flex items-center justify-center  max-md:h-10">
                        🍓
                    </div>
                    <div className=" px-6 max-md:px-3 rounded-full bg-[#C8CAFF]  size-20 flex items-center justify-center  max-md:size-10">
                        💫
                    </div>
                </div>
                <h1 className="text-4xl mt-3 text-[#353342] max-md:text-xl max-[1240px]:flex-wrap  flex items-center justify-center gap-3  uppercase">
                    <div className=" px-6 max-md:px-3 rounded-full bg-[#F6FF7F]  h-20 flex items-center justify-center  max-md:h-10">
                        Приєднуйся
                    </div>
                    <div className=" px-6 max-md:px-3 rounded-full   h-20 flex items-center justify-center  max-md:h-10">
                        Прямо
                    </div>
                    <div className=" px-6 max-md:px-3 rounded-full bg-[#F6FF7F]  h-20 flex items-center justify-center  max-md:h-10">
                        Зараз
                    </div>
                </h1>
                <Button
                    href="/pre-subscription"
                    className="w-72 sm:w-[400px] mt-8">
                    Приєднатися безкоштовно
                </Button>
            </div>
        </section>
    );
};
