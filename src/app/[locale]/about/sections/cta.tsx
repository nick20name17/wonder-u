import { Button } from "@shared/ui/button";
import { Container } from "@shared/ui/container";
import Image from "next/image";

export const AboutCTA = () => {
    return (
        <section className="relative py-4 lg:py-10 h-[542px] max-md:h-[360px]">
            <Container size="full" className="h-full px-12 max-md:px-4">
                <Image
                    fill
                    sizes="100vw"
                    className="pointer-events-none rounded-[21px] object-cover object-center h-full"
                    src="/assets/images/about-cta.jpg"
                    alt={"Call background image"}
                />
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
                    <Button href="/signup" className="w-72 sm:w-[400px] mt-8">
                        Приєднатися безкоштовно
                    </Button>
                </div>
            </Container>
        </section>
    );
};
