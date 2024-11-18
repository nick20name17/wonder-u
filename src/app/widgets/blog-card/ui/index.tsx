// import Link from "next/link";
import Link from 'next/link'
import styles from './styles.module.sass'
import cn from 'classnames'
import moment from 'moment'
// import { list } from "postcss";
import Image from 'next/image'

export type BlogCardT = {
  id: number,
  image: string,
  title: string,
  description: string,
  date: Date,
}

export const BlogCard = ({ data, ...props }: {
  data: BlogCardT,
  className?: string
  [key: string]: unknown
}) => {
  const {
    className,
    ...other
  } = props;

  const {
    id,
    image,
    title,
    description,
    date
  } = data;

  return (
    <Link href={`/blog/${id}`} className={cn(styles.card, className, "flex flex-col")} {...other}>
      <div className={cn(styles.image, "relative")}>
        <Image src={image} alt={title} width={500} height={300} className={cn("object-cover w-full aspect-[3/2]")} />
        <div className={cn(styles.image_overlay, "absolute top-0 left-0 w-full h-full")}></div>
      </div>
      <div className="flex-1 flex flex-col align-center justify-center p-4 pt-0">
        <div className={styles.title}>{title}</div>
        <div className={cn(styles.description, "mt-2 flex-1")}>{description}</div>
        <div className="flex items-center mt-4">
          <div className={cn(styles.date, 'flex-1')}>{moment(date).format('DD.MM.YYYY')}</div>
          <Link href={`/blog/${id}`} className={cn(styles.link, "flex items-center w-[180px] h-[48px] radius-[5px] justify-center")}>
            <span>Читати</span>
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.5 18L15.5 12L9.5 6" stroke="#9694A9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </Link>
  );
}