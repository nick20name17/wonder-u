import styles from './styles.module.sass'
import cn from 'classnames'


export function Badge({...props}: {
  color?: 'default' | 'acid_green',
  variant?: 'solid' | 'outline',
  size?: 'default' | 'lg',
  rounded?: 'none' | 'default'| 'full',
  padding?: boolean,
  className?: string,
  children?: React.ReactNode,
  [key: string]: unknown
}) {
  const {
    color = 'default',
    variant = 'solid',
    rounded = 'default',
    padding = true,
    size = '',
    className,
    children,
    ...other
  } = props;

  const classes = cn({
      [styles.badge]: true,
      [styles[`badge_${variant}__${color}`]]: true,
      [styles[`badge__${size}`]]: size,
      [styles[`badge_rounded__${rounded}`]]: rounded,
      [styles[`badge_padding__${size}`]]: padding,
    }, className);

  return (
    <>
      <div className={classes} {...other}>
        {children}
      </div>
    </>
  );
}