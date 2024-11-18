// import Link from "next/link";
import styles from './styles.module.sass'
import cn from 'classnames'
// import { list } from "postcss";

export const Pricing = ({ ...props }: {
  children?: React.ReactNode,
  className?: string
  [key: string]: unknown
}) => {
  const {
    children,
    className,
    ...other
  } = props;
  return (
    <div className={cn(styles.pricing, className)} {...other}>
      {children}
    </div>
  );
}

export const PricingItem = ({ ...props }: {
  children?: React.ReactNode,
  className?: string
  [key: string]: unknown
}) => {
  const {
    children,
    className,
    ...other
  } = props;
  return (
    <div className={cn(styles.pricing_item, className)} {...other}>
      {children}
    </div>
  );
}

export const PricingItemTitle = ({ ...props }: {
  children?: React.ReactNode,
  bg?: "marsh_green" | "acid_green" | "dark_lavander" | "none",
  className?: string
  [key: string]: unknown
}) => {
  const {
    children,
    bg = "acid_green",
    className,
    ...other
  } = props;

  const classes = cn({
    [styles.pricing]: true,
    [styles.pricing_item_title]: true,
    [styles[`pricing_item_title_bg__${bg}`]]: bg,
  }, className);

  return (
    <div className={classes} {...other}>
      {children}
    </div>
  );
}

export const PricingItemPrice = ({ ...props }: {
  units?: string,
  value?: string,
  children?: React.ReactNode,
  className?: string
  [key: string]: unknown
}) => {
  const {
    units,
    value,
    children,
    className,
    ...other
  } = props;
  return (
    <div className={cn(styles.pricing_item_price, className)} {...other}>
      <div className="flex gap-2 items-baseline">
        <span className={styles.pricing_item_price_units}>{units}</span>
        <span className={styles.pricing_item_price_value}>{value}</span>
      </div>
      <div>
        <span className={styles.pricing_item_price_description}>{children}</span>
      </div>
    </div>
  );
}

export const PricingItemList = ({ ...props }: {
  list: string[],
  className?: string
  [key: string]: unknown
}) => {
  const {
    list,
    className,
    ...other
  } = props;
  return (
    <ul className={cn(styles.pricing_item_list, className)} {...other}>
      {list.map((item, index) => <li key={index} className={styles.pricing_item_list_item}>
        🔥{item}
      </li>)}
    </ul>
  );
}

export const PricingItemButton = ({ ...props }: {
  children?: React.ReactNode,
  className?: string
  variant?: "primary" | "secondary",
  [key: string]: unknown
}) => {
  const {
    children,
    className,
    variant = "primary",
    ...other
  } = props;

  const classes = cn({
    [styles.pricing_item_button]: true,
    [styles[`pricing_item_button__${variant}`]]: variant,
  }, className);

  return (
    <button className={classes} {...other}>
      {children}
    </button>
  );
}