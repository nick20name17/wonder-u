
import styles from './styles.module.sass'
import cn from 'classnames'

export const Panel = ({...props} : {
    children?: React.ReactNode,
    bg?: "acid_green" | "gentle_lavander" | "medium_lavander" | "soft_lavander" | "dark_lavander" | "beige_skin_nude" | "none",
    outline?: "beige_selection",
    rounded?: "none" | "default" | "lg" | "xl",
    className?: string,
    [key: string]: unknown
}) => {
    const {
        bg = "none",
        outline = "none",
        rounded = "default",
        className,
        children,
        ...other
      } = props;
    
    const classes = cn({
        [styles.panel]: true,
        [styles[`panel_bg__${bg}`]]: bg,
        [styles[`panel_outline__${outline}`]]: outline,
        [styles[`panel_rounded__${rounded}`]]: rounded
    }, className);


    return <div className={classes} {...other} >
        {children}
    </div>;
};