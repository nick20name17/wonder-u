import { Panel } from "@shared/ui/panel";
import Image from "next/image";

export const Gallery = () => {
    return (
        <section>
            <h2 className="sr-only">Gallery</h2>
            <Panel bg="soft_lavander" className="pt-4">
                <div className="flex items-stretch justify-center gap-4 max-sm:gap-1.5 max-w-full">
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
                </div>
                <ul className="flex min-w-[110%] gap-1 py-6 -translate-x-[60px] max-sm:-translate-x-8 overflow-hidden max-sm:py-4">
                    <li className="bg-[var(--color-accent-acid-green)] rounded-full h-9 flex min-w-fit items-center justify-center px-3 border border-[var(--color-lavander-tender-lavander)] text-[var(--color-lavander-dark-lavander)] font-primary font-medium text-[11px] flex-1 leading-[13px] tracking-[0.03em]">
                        ❇️ медицинські знання
                    </li>
                    <li className="bg-[var(--color-accent-acid-green)] rounded-full h-9 flex min-w-fit items-center justify-center px-3 border border-[var(--color-lavander-tender-lavander)] text-[var(--color-lavander-dark-lavander)] font-primary font-medium text-[11px] flex-1 leading-[13px] tracking-[0.03em]">
                        💃 будова гарного тіла
                    </li>
                    <li className="bg-[var(--color-accent-acid-green)] rounded-full h-9 flex min-w-fit items-center justify-center px-3 border border-[var(--color-lavander-tender-lavander)] text-[var(--color-lavander-dark-lavander)] font-primary font-medium text-[11px] flex-1 leading-[13px] tracking-[0.03em]">
                        🥑️ здорове харчування
                    </li>
                    <li className="bg-[var(--color-accent-acid-green)] rounded-full h-9 flex min-w-fit items-center justify-center px-3 border border-[var(--color-lavander-tender-lavander)] text-[var(--color-lavander-dark-lavander)] font-primary font-medium text-[11px] flex-1 leading-[13px] tracking-[0.03em]">
                        🏄🏽‍♂️ міцне здоров’я
                    </li>
                    <li className="bg-[var(--color-accent-acid-green)] rounded-full h-9 flex min-w-fit items-center justify-center px-3 border border-[var(--color-lavander-tender-lavander)] text-[var(--color-lavander-dark-lavander)] font-primary font-medium text-[11px] flex-1 leading-[13px] tracking-[0.03em]">
                        💜️ лайфстайл
                    </li>
                    <li className="bg-[var(--color-accent-acid-green)] rounded-full h-9 flex min-w-fit items-center justify-center px-3 border border-[var(--color-lavander-tender-lavander)] text-[var(--color-lavander-dark-lavander)] font-primary font-medium text-[11px] flex-1 leading-[13px] tracking-[0.03em]">
                        🌸 стрункість
                    </li>
                    <li className="bg-[var(--color-accent-acid-green)] rounded-full h-9 flex min-w-fit items-center justify-center px-3 border border-[var(--color-lavander-tender-lavander)] text-[var(--color-lavander-dark-lavander)] font-primary font-medium text-[11px] flex-1 leading-[13px] tracking-[0.03em]">
                        ✌🏻️ задоволення від життя
                    </li>
                    <li className="bg-[var(--color-accent-acid-green)] rounded-full h-9 flex min-w-fit items-center justify-center px-3 border border-[var(--color-lavander-tender-lavander)] text-[var(--color-lavander-dark-lavander)] font-primary font-medium text-[11px] flex-1 leading-[13px] tracking-[0.03em]">
                        🕊️ самоповага
                    </li>
                    <li className="bg-[var(--color-accent-acid-green)] rounded-full h-9 flex min-w-fit items-center justify-center px-3 border border-[var(--color-lavander-tender-lavander)] text-[var(--color-lavander-dark-lavander)] font-primary font-medium text-[11px] flex-1 leading-[13px] tracking-[0.03em]">
                        ✨ нутріціологія
                    </li>
                    <li className="bg-[var(--color-accent-acid-green)] rounded-full h-9 flex min-w-fit items-center justify-center px-3 border border-[var(--color-lavander-tender-lavander)] text-[var(--color-lavander-dark-lavander)] font-primary font-medium text-[11px] flex-1 leading-[13px] tracking-[0.03em]">
                        🥗 рецепти на кожен день
                    </li>
                    <li className="bg-[var(--color-accent-acid-green)] rounded-full h-9 flex min-w-fit items-center justify-center px-3 border border-[var(--color-lavander-tender-lavander)] text-[var(--color-lavander-dark-lavander)] font-primary font-medium text-[11px] flex-1 leading-[13px] tracking-[0.03em]">
                        📈 трекінг результатів
                    </li>
                </ul>
            </Panel>
        </section>
    );
};
