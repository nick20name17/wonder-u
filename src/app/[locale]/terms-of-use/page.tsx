'use client';
import { Container } from "@shared/ui/container";
import styles from './styles.module.sass'
import cn from 'classnames'
import { useTranslation } from "react-i18next";

export default function TermsOfUse() {

  const { t } = useTranslation(['common', 'terms-of-use']);

  type ContentT = {
    type: string;
    value: string | string[];
  }

  const content = t('terms-of-use:content', { returnObjects: true }) as ContentT[];

  console.log(content);

  return (
    <>
      <main className="flex flex-col gap-4 my-2">
        <section className="py-4 lg:py-10">
          <Container
            size="sm"
          >
            <h1 className={cn(styles.title)}>{t('terms-of-use:title')}</h1>
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
