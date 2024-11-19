"use client";
import { Button, Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { Container } from "@shared/ui/container";
import { LangSwitcher } from "@widgets/lang-switcher";
import cn from "classnames";
import Link from "next/link";
import { useState } from "react";
import styles from "./styles.module.sass";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const open = () => {
        setIsOpen(true);
    };

    const close = () => {
        setIsOpen(false);
    };
    return (
        <header className={styles.header}>
            <Container size="full">
                <div className="flex gap-4">
                    <div className="flex items-center gap-4">
                        <Button className={styles.button} onClick={open}>
                            <div className="flex gap-1 items-center justify-center">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="md:hidden">
                                    <path
                                        d="M3 12H21"
                                        stroke="#443E3B"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M3 6H21"
                                        stroke="#443E3B"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M3 18H21"
                                        stroke="#443E3B"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </div>
                        </Button>
                        <Link href={""} className="flex items-center gap-[6px]">
                            <svg
                                width="51"
                                height="38"
                                viewBox="0 0 51 38"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M31.5853 0.148438H19.4246C8.6982 0.148438 0 8.59001 0 18.9999C0 29.4098 8.6982 37.8514 19.4246 37.8514H31.5853C42.3117 37.8514 51.0099 29.4098 51.0099 18.9999C51.0099 8.59001 42.3117 0.148438 31.5853 0.148438ZM22.08 29.56C22.0591 29.6534 21.9755 29.7223 21.8751 29.7223C20.3237 29.7223 18.492 29.2232 16.9782 28.3871C15.6358 27.6444 13.8795 26.2727 13.1477 23.9512L9.12474 10.7937C9.10801 10.7329 9.11638 10.6639 9.1582 10.6152C9.19583 10.5624 9.25856 10.534 9.32547 10.534H12.9846C13.0766 10.534 13.1602 10.5949 13.1853 10.6801L16.6897 22.4618L16.9029 23.1193C18.0237 26.6745 19.3451 28.3019 21.9504 29.3246C22.0424 29.3611 22.0968 29.4545 22.0759 29.5519L22.08 29.56ZM31.0041 29.56C30.9832 29.6534 30.8995 29.7223 30.7992 29.7223C29.2477 29.7223 27.416 29.2232 25.9022 28.3871C24.5599 27.6444 22.8035 26.2727 22.0717 23.9512L18.0488 10.7937C18.032 10.7329 18.0404 10.6639 18.0822 10.6152C18.1199 10.5624 18.1826 10.534 18.2495 10.534H21.9086C22.0006 10.534 22.0842 10.5949 22.1093 10.6801L25.6137 22.4618L25.827 23.1193C26.9477 26.6745 28.2691 28.3019 30.8744 29.3246C30.9664 29.3611 31.0208 29.4545 30.9999 29.5519L31.0041 29.56ZM31.2215 11.9707L30.9581 12.2142C30.9371 12.2345 30.9204 12.2548 30.9037 12.2751C30.5441 12.7093 30.1091 14.491 29.967 15.1403C29.9461 15.2337 29.8624 15.3027 29.7621 15.3027C29.6617 15.3027 29.5781 15.2337 29.5571 15.1403C29.4233 14.491 28.9968 12.7093 28.658 12.2994C28.6204 12.2548 28.6037 12.2345 28.587 12.2183L28.4071 12.0437C28.3862 12.0235 28.3653 12.0072 28.3444 11.991C27.897 11.642 26.0611 11.2199 25.392 11.086C25.2959 11.0657 25.2248 10.9845 25.2248 10.8871C25.2248 10.7897 25.2959 10.7085 25.392 10.6882C26.0611 10.5543 27.897 10.1403 28.3193 9.8116C28.3653 9.77507 28.3862 9.75884 28.403 9.74261L28.6371 9.50722C28.9968 9.07296 29.4233 7.29536 29.5571 6.64195C29.5781 6.54861 29.6617 6.47962 29.7621 6.47962C29.8624 6.47962 29.9461 6.54861 29.967 6.64195C30.105 7.29536 30.5399 9.07296 30.8828 9.48287L31.1964 9.79131L31.0877 9.96988L31.2173 9.8116C31.6397 10.1403 33.4755 10.5584 34.1446 10.6882C34.2408 10.7085 34.3119 10.7897 34.3119 10.8871C34.3119 10.9845 34.2408 11.0657 34.1446 11.086C33.4755 11.2199 31.6397 11.6379 31.2173 11.9707H31.2215ZM41.0572 23.8538C41.0572 28.1274 36.9004 29.7223 34.2826 29.7223C34.1864 29.7223 34.0986 29.6574 34.0777 29.5641C34.0568 29.4707 34.107 29.3774 34.1948 29.3368C36.4404 28.3303 37.235 26.711 37.235 23.1477L37.2433 22.4821V10.7369C37.2433 10.6233 37.3354 10.534 37.4524 10.534H40.8355C40.9526 10.534 41.0446 10.6233 41.0446 10.7369V20.6111C41.053 20.6314 41.0572 20.6558 41.0572 20.6761V23.8538Z"
                                    fill="#353342"
                                />
                            </svg>
                            <svg
                                width="176"
                                height="23"
                                viewBox="0 0 176 23"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="hidden md:block">
                                <path
                                    d="M153.024 11.3118C152.624 11.2233 149.854 10.5995 149.192 10.042C149.18 10.032 149.061 9.9394 148.942 9.81262C148.828 9.69188 148.724 9.55504 148.716 9.54296C148.193 8.86077 147.604 6.05955 147.502 5.5625H147.467C147.365 6.05955 146.776 8.86077 146.253 9.54296C146.243 9.55504 146.141 9.69188 146.028 9.81262C145.908 9.9394 145.789 10.032 145.777 10.042C145.113 10.5995 142.345 11.2233 141.945 11.3118V11.334C142.345 11.4225 145.115 12.0463 145.777 12.6038C145.789 12.6138 145.908 12.7064 146.028 12.8332C146.141 12.9539 146.245 13.0908 146.253 13.1028C146.813 13.8313 147.446 16.9787 147.481 17.1497H147.488C147.523 16.9787 148.156 13.8313 148.716 13.1028C148.726 13.0908 148.828 12.9539 148.942 12.8332C149.061 12.7064 149.18 12.6138 149.192 12.6038C149.856 12.0463 152.624 11.4225 153.024 11.334V11.3118Z"
                                    fill="#353342"
                                />
                                <path
                                    d="M30.5386 11.2511C30.5386 5.9063 33.1429 1.40262 36.7018 0C31.1623 0.682193 26.5813 3.94625 26.5813 11.2511C26.5813 17.9946 31.1161 21.6551 36.6113 22.4681C33.0986 21.0252 30.5386 16.5497 30.5386 11.2511Z"
                                    fill="#353342"
                                />
                                <path
                                    d="M47.5673 11.2511C47.5673 5.9063 44.9631 1.40262 41.4042 0C46.9437 0.682193 51.5247 3.94625 51.5247 11.2511C51.5247 17.9946 46.9899 21.6551 41.4946 22.4681C45.0074 21.0252 47.5673 16.5497 47.5673 11.2511Z"
                                    fill="#353342"
                                />
                                <path
                                    d="M160.446 14.6179L160.438 13.815V0.328125H156.754V11.6356C156.754 11.6356 156.745 11.6336 156.739 11.6316V15.4752C156.739 20.329 160.975 22.3273 163.888 22.3273C161.426 21.0998 160.446 19.1297 160.446 14.6179Z"
                                    fill="#353342"
                                />
                                <path
                                    d="M172.303 14.6179L172.31 13.815V0.328125H175.994V11.6356C175.994 11.6356 176.004 11.6336 176.01 11.6316V15.4752C176.01 20.329 171.773 22.3273 168.861 22.3273C171.323 21.0998 172.303 19.1297 172.303 14.6179Z"
                                    fill="#353342"
                                />
                                <path
                                    d="M83.0353 0.305664H79.2069V22.1881H83.0353V1.59961C83.0353 1.39234 83.1084 1.25349 83.2894 1.25349H84.8253C91.7449 1.25349 95.2769 3.8595 95.2769 11.2731C95.2769 18.6866 91.3215 21.5905 86.6558 22.0614C87.1928 22.1398 87.1697 22.1519 87.9493 22.1519C94.4069 22.1519 99.1303 18.582 99.1303 11.2751C99.1303 3.96817 94.2625 0.335848 86.7482 0.335848C86.652 0.335848 85.9051 0.321761 84.8042 0.315723C83.8745 0.309686 83.0334 0.307675 83.0334 0.307675L83.0353 0.305664Z"
                                    fill="#353342"
                                />
                                <path
                                    d="M133.262 12.6254C136.446 12.0962 139.676 9.26076 139.676 6.1275C139.676 1.52522 136.134 0.376156 132.236 0.303711C132.152 0.303711 131.341 0.303711 131.341 0.303711H122.176V22.1862H126.004V1.25154H130.013C130.108 1.25154 130.477 1.25757 130.527 1.25757C134.525 1.25757 135.632 3.99439 135.632 6.12549C135.632 9.05147 134.075 10.6312 130.073 11.6816C129.871 11.7179 129.686 11.7541 129.532 11.7903C129.085 11.897 128.92 12.4725 129.232 12.8226L135.189 19.9645C136.327 21.3712 138.001 22.1842 139.764 22.1842H142.526C142.526 22.1842 141.383 21.6771 140.43 20.9808C140.053 20.7051 139.156 19.7351 139.156 19.7351L133.26 12.6214L133.262 12.6254Z"
                                    fill="#353342"
                                />
                                <path
                                    d="M106.521 20.703V10.9632H112.469V9.48005H106.521V1.78878H117.606V0.305664H102.693V22.1881H117.808V20.703H106.521Z"
                                    fill="#353342"
                                />
                                <path
                                    d="M8.19585 14.6864L7.95141 13.8815L4.14997 0.293945H0.00976562L4.39441 15.5457C5.82453 20.4136 11.0157 22.3736 14.0414 22.3736C11.1215 21.1421 9.52203 19.2122 8.19393 14.6884L8.19585 14.6864Z"
                                    fill="#353342"
                                />
                                <path
                                    d="M18.2913 14.6864L18.0469 13.8815L14.2455 0.293945H10.1072L14.4918 15.5457C15.9219 20.4136 21.1131 22.3736 24.1388 22.3736C21.2189 21.1421 19.6194 19.2122 18.2913 14.6884V14.6864Z"
                                    fill="#353342"
                                />
                                <path
                                    d="M20.3317 4.00878L21.371 0.293945H25.5093L24.4411 4.00878H20.3317Z"
                                    fill="#353342"
                                />
                                <path
                                    d="M74.4333 0.293945H72.4161V17.4755L58.2093 0.306022H55.2664L55.2702 3.17767L55.276 3.18572V22.1885H57.2932V5.22425L71.4345 22.1885H74.2004V22.1845H74.4333V0.293945Z"
                                    fill="#353342"
                                />
                            </svg>
                        </Link>
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                        <nav className="flex items-center hidden md:block">
                            <ul className="flex gap-4 lg:gap-12">
                                <li>
                                    <Link
                                        href={"/"}
                                        className={
                                            styles.header_menu_item_link
                                        }>
                                        Головна
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={"/about"}
                                        scroll={true}
                                        className={
                                            styles.header_menu_item_link
                                        }>
                                        Про проєкт
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={"/blog"}
                                        className={
                                            styles.header_menu_item_link
                                        }>
                                        Блог
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={"/faq"}
                                        scroll={true}
                                        className={
                                            styles.header_menu_item_link
                                        }>
                                        Питання
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={"/pricing"}
                                        scroll={true}
                                        className={
                                            styles.header_menu_item_link
                                        }>
                                        Ціни
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="flex items-center">
                        <LangSwitcher />
                    </div>
                    <div className="flex items-center">
                        <Link
                            href="/pre-subscription"
                            className={cn(styles.user_login_button)}>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                                    stroke="#575554"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                                    stroke="#575554"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </Container>
            <Dialog
                open={isOpen}
                as="div"
                className="relative z-[999] focus:outline-none"
                onClose={close}>
                <DialogBackdrop
                    className="fixed inset-0 bg-black/30 duration-100 ease-out data-[closed]:opacity-0"
                    transition
                />
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="w-full">
                        <DialogPanel
                            transition
                            className="w-full p-8 bg-white duration-100 ease-out data-[closed]:opacity-0 flex flex-col gap-8 rounded-b-2xl">
                            <div className="flex items-center">
                                <span className={styles.mobile_menu_title}>
                                    Меню
                                </span>
                                <div className="flex-1"></div>
                                <button onClick={close}>
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M18 6L6 18"
                                            stroke="#ABA49A"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M6 6L18 18"
                                            stroke="#ABA49A"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <div>
                                <Link
                                    href={"/"}
                                    className={styles.header_menu_item_link}
                                    onClick={close}>
                                    Головна
                                </Link>
                            </div>
                            <div>
                                <Link
                                    href={"/about"}
                                    scroll={true}
                                    className={styles.header_menu_item_link}
                                    onClick={close}>
                                    Про проєкт
                                </Link>
                            </div>
                            <div>
                                <Link
                                    href={"/blog"}
                                    className={styles.header_menu_item_link}
                                    onClick={close}>
                                    Блог
                                </Link>
                            </div>
                            <div>
                                <Link
                                    href={"/faq"}
                                    scroll={true}
                                    className={styles.header_menu_item_link}
                                    onClick={close}>
                                    Питання
                                </Link>
                            </div>
                            <div>
                                <Link
                                    href={"/pricing"}
                                    scroll={true}
                                    className={styles.header_menu_item_link}
                                    onClick={close}>
                                    Ціни
                                </Link>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </header>
    );
};
