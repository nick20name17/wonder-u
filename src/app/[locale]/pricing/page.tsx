'use client';
import { Container } from "@shared/ui/container";
// import initTranslations from "@/app/i18n";
// import { useTranslation } from "react-i18next";
import styles from './styles.module.sass'
import cn from 'classnames'
import { Pricing, PricingItem, PricingItemButton, PricingItemList, PricingItemPrice, PricingItemTitle } from "@widgets/pricing";

export default function PricingPage() {

  return (
    <>
      <main className="flex flex-col gap-4 my-2">
        <section className="py-4 lg:py-10">
          <Container>
            <h1 className={cn(styles.pricing_title)}>Пакети підписок та їх ціна</h1>
            <div>
              <Pricing className="grid grid-cols-1 lg:grid-cols-3 items-center gap-4 max-w-[400px] lg:max-w-[100%] mx-auto mt-6 lg:mt-12 relative z-10">
                <PricingItem className="w-full border-[1px] border-[var(--color-lavander-medium-lavander)] lg:my-3">
                  <PricingItemTitle
                    bg="marsh_green"
                  >Безкоштовний пробний період</PricingItemTitle>
                  <PricingItemPrice units="₴" value="0">пробний період</PricingItemPrice>
                  <PricingItemList list={[
                    "персональний план",
                    "7-и денний доступ",
                    "доступ до бази тренувань для початківців.",
                    "персоналізовані рекомендації для старту.",
                    "доступ до закритої спільноти"
                  ]} />
                  <PricingItemButton onClick={() => {
                    alert("Coming soon");
                  }}>Приєднатися безкоштовно</PricingItemButton>
                </PricingItem>
                <PricingItem className="w-full border-[1px] border-[var(--color-lavander-medium-lavander)] lg:h-full">
                  <PricingItemTitle
                    bg="acid_green"
                  >Щомісячна підписка</PricingItemTitle>
                  <PricingItemPrice units="₴" value="499">Щомісячний платіж / ₴ 5988 за рік</PricingItemPrice>
                  <PricingItemList list={[
                    "персональний план",
                    "30-и денний доступ",
                    "стеження за  прогресом через особистий кабінет",
                    "план харчування, що адаптується під твої потреби",
                    "доступ до закритої спільноти"
                  ]} />
                  <PricingItemButton
                    onClick={() => {
                      alert("Coming soon");
                    }}
                    variant="secondary"
                  >Приєднатися за ₴499 в місяць</PricingItemButton>
                </PricingItem>
                <PricingItem className="w-full border-[1px] border-[var(--color-lavander-medium-lavander)] lg:my-3">
                  <PricingItemTitle
                    bg="dark_lavander"
                  >Річна підписка / економія ₴ 998</PricingItemTitle>
                  <PricingItemPrice units="₴" value="4990">Одноразовий платіж / ₴ 415 міс</PricingItemPrice>
                  <PricingItemList list={[
                    "персональний план",
                    "12-и місячний доступ",
                    "доступ до авторських програм",
                    "безкоштовні онлайн консультації з тренером",
                    "персоналізаний план на рік",
                    "доступ до закритої спільноти"
                  ]} />
                  <div className="flex-1 flex items-end justify-center">
                    <PricingItemButton onClick={() => {
                      alert("Coming soon");
                    }}>Приєднатися за ₴4990 на 1 рік</PricingItemButton>
                  </div>
                </PricingItem>
              </Pricing>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}
