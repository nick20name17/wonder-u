
export const Section = ({children, className, ...props} : {
    children: React.ReactNode,
    // size?: "default" | "xs" | "sm" | "lg" | "xl",
    className?: string,
    [key: string]: unknown
}) => {

    return <section className={className} {...props}>
        {children}
    </section>;
};