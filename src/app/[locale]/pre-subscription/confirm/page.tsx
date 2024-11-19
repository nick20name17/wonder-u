"use client";

import { Button } from "@shared/ui/button";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useLayoutEffect } from "react";

interface PreSubscriptionConfrimProps {
    code: string;
}
const PreSubscriptionConfrim = () => {
    const searchParams = useSearchParams();
    const mutation = useMutation({
        mutationFn: async (formData: PreSubscriptionConfrimProps) => {
            const response = await fetch(
                "https://wonder-u-rest-api.efil-web.com/api/user/v1/pre-subscription/confirmation",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            if (!response.ok) {
                throw new Error("Something went wrong");
            }
        },
    });

    useLayoutEffect(() => {
        mutation.mutate({
            code: searchParams.get("code")! || "",
        });
    }, []);

    return (
        <main className="h-[calc(100vh-64px)] relative bg-[#F9F8F3] px-2">
            <section className="min-h-full flex items-center justify-center">
                {mutation.isIdle || mutation.isPending ? (
                    <div className="relative z-20 h-72 w-[592px] rounded-[15px] animate-pulse bg-gray-100"></div>
                ) : (
                    <div className="relative z-20 py-12 px-16 max-md:px-6 max-md:py-5 rounded-[15px] w-[592px]  bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60 border border-[#D6CEB7]">
                        {mutation.isSuccess ? (
                            <h1 className="text-center text-[#575554] text-4xl">
                                Вітаємо
                            </h1>
                        ) : (
                            ""
                        )}

                        {mutation.isError ? (
                            <h1 className="text-center text-[#575554] text-4xl">
                                Щось пішло не так
                            </h1>
                        ) : (
                            ""
                        )}

                        {mutation.isSuccess ? (
                            <p className="text-center mt-3 text-[#575554]">
                                Імейл підтверджено і Ваша заявка прийнята
                            </p>
                        ) : (
                            ""
                        )}

                        {mutation.isError ? (
                            <p className="text-center mt-3 text-[#575554]">
                                Спробуйте ще раз або напишіть у підтримку
                            </p>
                        ) : (
                            ""
                        )}
                        {mutation.isSuccess ? (
                            <div className="flex justify-center">
                                <Button href="/" className="w-60 mx-auto mt-14">
                                    На головну сторінку
                                </Button>
                            </div>
                        ) : (
                            ""
                        )}
                        {mutation.isError ? (
                            <div className="flex justify-center">
                                <Button
                                    href="/pre-subscription"
                                    className="w-60 mx-auto mt-14">
                                    Спробувати ще раз
                                </Button>
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                )}
                <Image
                    className="absolute right-0 top-0 bottom-0 h-full object-cover object-left-top w-[730px]"
                    src={"/assets/images/signup-bg.png"}
                    alt="pre-subscription"
                    width={1080}
                    height={720}
                />
            </section>
        </main>
    );
};

export default PreSubscriptionConfrim;
