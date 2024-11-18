'use client';
import { Container } from "@shared/ui/container";
import styles from './styles.module.sass'
import cn from 'classnames'
import { useTranslation } from "react-i18next";

export default function PrivacyPolicy() {

  const { t } = useTranslation(['common', 'privacy-policy']);

  type ContentT = {
    type: string;
    value: string | string[];
  }

  const content = t('privacy-policy:content', { returnObjects: true }) as ContentT[];

  return (
    <>
      <main className="flex flex-col gap-4 my-2">
        <section className="py-4 lg:py-10">
          <Container
            size="sm"
          >
            <h1 className={cn(styles.title)}>{t('privacy-policy:title')}</h1>
            <div className={cn("mt-6 lg:mt-12")}>
              {content.map((item, index) => {
                return (
                  <>
                    {item.type === "paragraph" && (
                      <p className={cn(styles.paragraph)} key={index} dangerouslySetInnerHTML={{ __html: item.value }} />
                    )}
                    {item.type === "subtitle" && (
                      <h2 className={cn(styles.subtitle)} key={index} dangerouslySetInnerHTML={{ __html: item.value }} />
                    )}
                  </>
                )
              })}
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}
