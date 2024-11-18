'use client';
import { Container } from "@shared/ui/container";
// import initTranslations from "@/app/i18n";
// import { useTranslation } from "react-i18next";
import styles from './styles.module.sass'
import cn from 'classnames'
import { BlogCard } from "@widgets/blog-card";
import Link from "next/link";
import Image from "next/image";
import { getArticle } from "@shared/data/article/data";
import { Title } from "@shared/ui/title";

export default function BlogArticte({ params }: { params: { id: string } }) {

  const { id } = params;

  const article = getArticle(Number(id));

  if (!article) {
    return <div>Article not found</div>;
  }

  const { title, image, content, related } = article;


  return (
    <>
      <main className="flex flex-col gap-4 my-2 lg:my-8">
        <section>
          <Container>
            <div className={cn("flex")}>
              <div>
                <Link
                  href={'/blog'}
                  className={cn(styles.button_back, "flex gap-4 items-center")}
                >
                  <span className="w-[48px] h-[48px] rounded-full flex items-center justify-center border border-[var(--color-dark-night-black-support)]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 18L9 12L15 6" stroke="#9694A9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </span>
                  <span>Назад</span>
                </Link>
              </div>
              <div className="flex-1"></div>
              <div className={cn(styles.date, "flex items-center")}>23.09.2024</div>
            </div>
          </Container>
          <Container
            size="sm"
          >
            <div className={cn(styles.image, "w-full rounded-[32px] overflow-hidden relative mt-8")}>
              <Image src={image} alt={title} width={1182} height={0} className={cn("object-cover w-full aspect-[16/9]")} />
              <div className={cn(styles.image_gradient)}></div>
            </div>
          </Container>
          <Container
            size="sm"
          >
            <div className="px-6 lg:px-12">
              <Title tag="h1" className={cn(styles.title, "mt-8")}>{title}</Title>
              {content?.map((block, index) => {
                return (
                  <>
                    {block.type === "paragraph" && <p dangerouslySetInnerHTML={{ __html: block.value }} key={index} className={cn(styles.paragraph)} />}
                    {block.type === "list" && <>
                      <ul className={cn(styles.list)}>
                        {block.value && block.value.length > 0 && typeof block.value === "object" && block.value.map((item, index) => (
                          <li className={cn(styles.list_item)} key={index} dangerouslySetInnerHTML={{ __html: item }} />
                        ))}
                      </ul>
                    </>}
                  </>
                );
              })}
            </div>
          </Container>
        </section>
        <section>
          <Container
            size="sm"
          >
            <div>
              <h2 className={cn(styles.related_title, "mt-8")}>Читайте також:</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
                {related?.map((item, index) => (
                  <BlogCard key={index} data={item} />
                ))}
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}
