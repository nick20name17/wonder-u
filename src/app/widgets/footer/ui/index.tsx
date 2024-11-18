import { Container } from "@shared/ui/container";
import Link from "next/link";
import styles from './styles.module.sass'
import cn from 'classnames'

export const Footer = () => {
  return (
    <footer
      className={cn(styles.footer, "p-6")}
    >
      <Container
        size="full"
      >
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className={cn(styles.footer_item, "flex items-center")}>
              WonderU 2024©
            </div>
            <div className={cn(styles.footer_item, "flex items-center")}>
              <Link href="/privacy-policy" className={styles.footer_item_link}>Політика конфіденційності</Link>
            </div>
            <div className={cn(styles.footer_item, "flex items-center")}>
              <Link href="/terms-of-use" className={styles.footer_item_link}>Умови використання</Link>
            </div>
            <div className={cn(styles.footer_item, "flex items-center gap-2")}>
              Слідкуйте за нами: <a href="https://www.instagram.com/wonderu_ukraine/">
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 2.78906H7C4.23858 2.78906 2 5.02764 2 7.78906V17.7891C2 20.5505 4.23858 22.7891 7 22.7891H17C19.7614 22.7891 22 20.5505 22 17.7891V7.78906C22 5.02764 19.7614 2.78906 17 2.78906Z" stroke="#9694A9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M15.9997 12.1594C16.1231 12.9916 15.981 13.8416 15.5935 14.5884C15.206 15.3352 14.5929 15.9408 13.8413 16.319C13.0898 16.6973 12.2382 16.829 11.4075 16.6953C10.5768 16.5616 9.80947 16.1694 9.21455 15.5745C8.61962 14.9796 8.22744 14.2122 8.09377 13.3816C7.96011 12.5509 8.09177 11.6993 8.47003 10.9477C8.84829 10.1962 9.45389 9.5831 10.2007 9.19561C10.9475 8.80811 11.7975 8.66595 12.6297 8.78936C13.4786 8.91525 14.2646 9.31083 14.8714 9.91767C15.4782 10.5245 15.8738 11.3104 15.9997 12.1594Z" stroke="#9694A9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M17.5 7.28906H17.51" stroke="#9694A9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
            </div>
          </div>
          <div className={cn(styles.footer_item, styles.footer_item_dev, "flex lg:flex-1 gap-2 lg:justify-end items-center")}>
            Розроблено <a className={styles.footer_item_dev_link} href="https://avangraph.com">Avangraph</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}