
import styles from './styles.module.sass'
import cn from 'classnames'

export const Container = ({...props} : {
    children: React.ReactNode,
    size?: "default" | "xs" | "sm" | "lg" | "xl" | "full",
    className?: string,
    [key: string]: unknown
}) => {
    const {
        size = "default",
        className,
        children,
        ...other
      } = props;
    
    const classes = cn({
        [styles.container]: true,
        [styles[`container_${size}`]]: size
    }, className);


    return <div className={classes} {...other}>
        {children}
    </div>;
};