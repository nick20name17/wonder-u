'use client';
import { Container } from "@shared/ui/container";
// import initTranslations from "@/app/i18n";
// import { useTranslation } from "react-i18next";
import styles from './styles.module.sass'
import cn from 'classnames'
import { BlogCard } from "@widgets/blog-card";
import { Panel } from "@shared/ui/panel";
import { Pricing, PricingItem, PricingItemButton, PricingItemList, PricingItemPrice, PricingItemTitle } from "@widgets/pricing";
import Link from "next/link";
import { getArticles } from "@shared/data/article/data";

export default function Blog() {

  const blogPosts = getArticles();

  return (
    <>
      <main className="flex flex-col gap-4 my-2">
        <section>
          <Container>
            <div className={cn(styles.banner, "px-4 py-[72px] lg:px-[56px]")}>
              <p className="font-semibold">Здоров’я - це в першу чергу стиль життя. </p>
              <p>блог про харчування, спорт і баланс для тебе</p>
            </div>
          </Container>
        </section>
        <section>
          <Container>
            <div className={cn(styles.blog, "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2")}>
              {blogPosts.map(post => (
                <BlogCard data={post} key={post.id}></BlogCard>
              ))}
            </div>
          </Container>
        </section>
        <section className="lg:my-8">
          <Container>
            <Panel
              className={cn(styles.pricing, "w-full flex flex-col items-center lg:flex-row gap-4 lg:gap-[56px] p-4 py-8 lg:px-[56px] lg:py-[40px]")}
              size="full"
            >
              <div>
                <div>
                  <Pricing className="w-[352px] max-w-[425px] lg:w-[425px] mx-auto relative">
                    <PricingItem className="w-[296px] border border-solid border-[var(--color-lavander-medium-lavander)]">
                      <PricingItemTitle
                        bg="dark_lavander"
                      >Безкоштовний пробний період</PricingItemTitle>
                      <PricingItemPrice units="₴" value="0">пробний період</PricingItemPrice>
                      <PricingItemList list={[
                        "персональний план",
                        "7-и денний доступ",
                        "доступ до закритої спільноти"
                      ]} />
                      <PricingItemButton onClick={() => {
                        alert("Coming soon");
                      }}>Приєднатися безкоштовно</PricingItemButton>
                    </PricingItem>
                    <PricingItem className="w-[296px] border border-solid border-[var(--color-lavander-medium-lavander)] absolute top-0 right-0">
                      <PricingItemTitle
                        bg="acid_green"
                      >Щомісячна підписка</PricingItemTitle>
                      <PricingItemPrice units="₴" value="499">Щомісячний платіж / 16.63 грн в день</PricingItemPrice>
                      <PricingItemList list={[
                        "персональний план",
                        "30-и денний доступ",
                        "доступ до закритої спільноти"
                      ]} />
                      <PricingItemButton
                        onClick={() => {
                          alert("Coming soon");
                        }}
                        variant="secondary"
                      >Почати за ₴499</PricingItemButton>
                    </PricingItem>
                  </Pricing>
                </div>
              </div>
              <div className="mt-8 lg:mt-0">
                <div className={cn(styles.pricing_title)}>
                  Приєднуйся прямо зараз
                </div>
                <div className={cn(styles.pricing_description, "mt-1 lg:mt-3")}>
                  Персональний простір, де <span>ваші мрії</span> про ідеальне тіло стають реальністю
                </div>
                <div className="mt-4 lg:mt-8 flex justify-center">
                    <Link href="/about" className={cn(styles.pricing_button)}>Детальніше про проєкт</Link>
                </div>
              </div>
            </Panel>
          </Container>
        </section>
      </main>
    </>
  );
}
