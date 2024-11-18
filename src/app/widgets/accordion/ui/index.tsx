import cn from "classnames";
import styles from "./styles.module.sass";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion"

type AccordionItemContentT = {
  type: "paragraph" | "image" | "subtitle" | "list";
  value: string | string[];
};

type AccordionItemT = {
  title: string;
  content: AccordionItemContentT[];
  opened?: boolean;
};

export const AccordionWidget = ({
  className,
  ...props
}: {
  data: AccordionItemT[];
  [key: string]: any;
}) => {
  const data = props.data;
  return (
    <ul className={cn(styles.accordion, className)} {...props}>
      {data.map((item, index) => (
        <AccordionItem key={index} opened={index === 0} title={item.title} content={item.content} />
      ))}
    </ul>
  );
};

const AccordionItem = ({ title, content, opened }: AccordionItemT) => {

  const [isOpen, setIsOpen] = useState(opened);
  return (
    <>
      <li
        className={cn(styles.item)}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={styles.header}>
          <h3 className={styles.title}>
            {title}
          </h3>
          <div className={styles.arrow}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                transform: isOpen ? "rotateX(0)" : "rotateX(180deg)",
                transition: "transform 0.3s ease",
              }}
            >
              <path d="M18 15.5L12 9.5L6 15.5" stroke="#9694A9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className={cn(styles.content)}
              initial={{
                opacity: 0,
                height: '0px',
              }}
              animate={{
                opacity: 1,
                height: 'auto'
              }}
              exit={{
                opacity: 0,
                height: '0px',
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="mt-4">
                {content.map((item, index) => {
                  return (
                    <>
                      {item.type === "paragraph" && <p key={index} className={styles.paragraph}>{item.value}</p>}
                      {item.type === "subtitle" && <p key={index} className={styles.subtitle_paragraph}>{item.value}</p>}
                      {item.type === "list" && <>
                        <ul className={cn(styles.list)}>
                          {item.value && item.value.length > 0 && typeof item.value === "object" && item.value.map((item, index) => (
                            <li className={cn(styles.list_item)} key={index} dangerouslySetInnerHTML={{ __html: item }} />
                          ))}
                        </ul>
                      </>}
                    </>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </li>
    </>
  );
};
