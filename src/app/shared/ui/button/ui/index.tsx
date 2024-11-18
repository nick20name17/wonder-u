import cn from "classnames";
import Link from "next/link";
import { ButtonHTMLAttributes } from "react";
import styles from "./styles.module.sass";

export function Button({
    ...props
}: {
    type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
    color?: "default";
    variant?: "solid" | "outline";
    size?: "default";
    className?: string;
    children: React.ReactNode;
    disabled?: boolean;
    [key: string]: unknown;
}) {
    const {
        type = "button",
        color = "default",
        variant = "solid",
        size = "",
        className,
        children,
        href,
        disabled = false,
        ...other
    } = props;

    const classes = cn(
        {
            [styles.button]: true,
            [styles[`button_${variant}__${color}`]]: true,
            [styles[`button__${size}`]]: size,
        },
        className
    );

    return (
        <>
            {href ? (
                <Link href={href} className={classes} {...other}>
                    {children}
                </Link>
            ) : (
                <button
                    disabled={disabled}
                    type={type}
                    className={classes}
                    {...other}>
                    {children}
                </button>
            )}
        </>
    );
}
