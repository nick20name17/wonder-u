
import React from 'react';
import styles from './styles.module.sass'
import cn from 'classnames'

export const Title = ({...props} : {
    children?: React.ReactNode,
    tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p" | "div",
    size?: "default" | "lg",
    className?: string,
    [key: string]: unknown
}) => {
    const {
        size = "default",
        tag = "h1",
        className,
        children,
        ...other
      } = props;
    
    const classes = cn({
        [styles.title]: true,
        [styles[`title_${size}`]]: size
    }, className);


    return React.createElement(tag, {
        className: classes,
        ...other
    }, children);
};