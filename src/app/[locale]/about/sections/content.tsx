import { Container } from "@shared/ui/container";
import { Title } from "@shared/ui/title";

export const AboutContent = () => {
    return (
        <section className="pb-4 lg:pb-10 ">
            <Container size="full">
                <Title className="text-center p-9 bg-[#E4E5FF] rounded-3xl">
                    Що включає програма WonderU?
                </Title>
                <ul className="p-4 bg-[#E4E5FF] rounded-3xl mt-2 columns-1 md:columns-2 lg:columns-3 gap-2 space-y-2 ">
                    <li className="bg-white break-inside-avoid p-3 rounded-xl w-full ">
                        <h2 className="rounded-md px-4 py-3 text-[22px] bg-[#C8CAFF] font-medium">
                            5 тренувань на тиждень
                        </h2>
                        <p className="px-4 text-[#575554] mt-4">
                            Персональний план включає в себе 5 різних тренувань
                            на тиждень, що складаються із розігріву, воркауту,
                            охолодження
                        </p>
                    </li>
                    <li className="bg-white break-inside-avoid p-3 rounded-xl w-full">
                        <h2 className="rounded-md px-4 py-3 text-[22px] bg-[#F6FF7F] font-medium">
                            Трекінг результатів
                        </h2>
                        <p className="px-4 text-[#575554] mt-4">
                            Можливість завантажувати та зберігати в особистому
                            кабінеті параметри вашого тіла, такі як вага, об’єм
                            стегон, талії і тд для контролю вашого прогресу
                        </p>
                    </li>

                    <li className="bg-white break-inside-avoid p-3 rounded-xl w-full">
                        <h2 className="rounded-md px-4 py-3 text-[22px] bg-[#86A03D] font-medium text-white">
                            Ставте власні цілі на місяць
                        </h2>
                        <p className="px-4 text-[#575554] mt-4">
                            Ставте свої особисті цілі, щоб не втрачати мотивацію
                            на шляху трансформації свого тіла
                        </p>
                    </li>

                    <li className="bg-white break-inside-avoid p-3 rounded-xl w-full">
                        <h2 className="rounded-md px-4 py-3 text-[22px] bg-[#E4E5FF] font-medium">
                            План харчування на кожен день
                        </h2>
                        <p className="px-4 text-[#575554] mt-4">
                            Програма харчування включає в себе рецепти на
                            сніданок, обід, вечерю, а також, перекуси. Раціон
                            продумано таким чином, щоб ви отримала максимум
                            корисних макроелементів для організму
                        </p>
                    </li>
                    <li className="bg-white break-inside-avoid p-3 rounded-xl w-full">
                        <h2 className="rounded-md px-4 py-3 text-[22px] bg-[#F4F5FF] font-medium">
                            Доступ до всіх матеріалів
                        </h2>
                        <p className="px-4 text-[#575554] mt-4">
                            Абсолютно необмежений доступ до всієї бази вправ та
                            рецептів в межах вашої підписки на веб-сервіс
                        </p>
                    </li>
                    <li className="bg-white break-inside-avoid p-3 rounded-xl w-full">
                        <h2 className="rounded-md px-4 py-3 text-[22px] bg-[#C8CAFF] font-medium">
                            Персональна консультація
                        </h2>
                        <p className="px-4 text-[#575554] mt-4">
                            Виконуйте вправи, збирайте Wonder Points і міняйте
                            на особисту консультацію із автором проєкту Ольгою
                            Сичовою
                        </p>
                    </li>
                </ul>
            </Container>
        </section>
    );
};
