"use client";

import { ReactQueryProvider } from "@/providers/react-query-provider";
import { Button } from "@shared/ui/button";
import Image from "next/image";
import { useState } from "react";
import { SignUpForm } from "./components/form";

const SignUpPage = () => {
    const [success, setSuccess] = useState(false);

    return (
        <ReactQueryProvider>
            <main className="h-[calc(100vh-64px)] relative bg-[#F9F8F3] px-2">
                <section className="min-h-full flex items-center justify-center">
                    <div className="relative z-20 py-12 px-16 max-md:px-6 max-md:py-5 rounded-[15px] w-[592px]  bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60 border border-[#D6CEB7]">
                        {success ? (
                            <>
                                <h1 className="text-center text-[#575554] text-4xl">
                                    Вашу заявку прийнято
                                </h1>
                                <p className="text-center mt-3 text-[#575554]">
                                    Дякуємо! Скоро ви отримаєте електронного
                                    листа із інструкціями входу в сервіс
                                </p>
                                <div className="flex justify-center">
                                    <Button
                                        href="/"
                                        className="w-48 mx-auto mt-14">
                                        Ок
                                    </Button>
                                </div>
                            </>
                        ) : (
                            <>
                                <h1 className="text-center text-[#575554] text-4xl">
                                    Пробний період
                                </h1>
                                <p className="text-center mt-3 text-[#575554]">
                                    Заповніть ваші дані, щоб отримати
                                    безкоштовний пробний доступ до сервісу
                                    Wonder-u
                                </p>
                                <SignUpForm setSuccess={setSuccess} />
                            </>
                        )}
                    </div>
                    <Image
                        className="absolute right-0 top-0 bottom-0 h-full object-cover object-left-top w-[730px]"
                        src={"/assets/images/signup-bg.png"}
                        alt="signup"
                        width={1080}
                        height={720}
                    />
                </section>
            </main>
        </ReactQueryProvider>
    );
};

export default SignUpPage;
