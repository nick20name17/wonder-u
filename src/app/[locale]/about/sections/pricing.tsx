import { Container } from "@shared/ui/container";
import Image from "next/image";

export const AboutPricing = () => {
    return (
        <section className="relative py-4 lg:py-10 h-[542px]">
            <Container size="full" className="h-full px-12 max-md:px-4">
                <Image
                    fill
                    sizes="100vw"
                    className="pointer-events-none rounded-[21px] object-cover object-center h-full"
                    src="/assets/images/about-bg-2.jpg"
                    alt={"Call background image"}
                />
                <div className="relative z-50 h-full flex flex-col justify-center">
                    <h1 className="text-[42px] text-[#353342] font-medium max-md:text-[28px] max-[1240px]:flex-wrap  flex items-center justify-center gap-3 max-sm:flex-col">
                        <span className="text-[#8A78FC]">Ефективність</span>
                        <div className="text-4xl max-md:text-xl rounded-full bg-[#F6FF7F] w-44 h-20 flex items-center justify-center max-md:w-28 max-md:h-10">
                            🔥
                        </div>
                        <span className="text-[#86A03D]"> Підтримка</span>
                        <div className="text-4xl max-md:text-xl rounded-full bg-[#F6FF7F] w-44 h-20 flex items-center justify-center max-md:w-28 max-md:h-10">
                            🙌🏻
                        </div>
                        <span>Трансформація</span>
                    </h1>
                    <p className="mt-8 text-lg text-center max-md:text-base">
                        Iноваційні програми WonderU підтримують вашу мотивацію
                        та заохочують до регулярних занять
                    </p>
                </div>
            </Container>
        </section>
    );
};
