"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@shared/ui/button";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface SignUpFormData {
    name: string;
    email: string;
}

const signupSchema = z.object({
    email: z
        .string({})
        .email({
            message: "Некоректний імейл",
        })
        .min(1, "Імейл є обов'язковим"),
    name: z.string().min(1, "Ім'я є обов'язковим"),
});

interface SignUpFormProps {
    setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}
export const SignUpForm = ({ setSuccess }: SignUpFormProps) => {
    const [error, setError] = useState("");

    const form = useForm({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            name: "",
            email: "",
        },
    });

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const mutation = useMutation({
        mutationFn: async (formData: SignUpFormData) => {
            const response = await fetch("/api/send", {
                method: "POST",
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                return response.json();
            }

            throw new Error("Something went wrong");
        },
        onSuccess: () => {
            setEmail("");
            setName("");
            setSuccess(true);
        },
        onError: () => {
            setError("Щось пішло не так");
        },
    });

    const onSubmit = () => {
        setError("");
        mutation.mutate({
            name,
            email,
        });
    };

    return (
        <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-8"
            noValidate>
            <div className="flex flex-col gap-2 mx-auto w-60">
                <label className="px-2 text-xs text-[#ABA49A]" htmlFor="name">
                    Ваше ім’я
                </label>
                <input
                    {...form.register("name")}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="px-2 border-b pb-2 border-black bg-transparent outline-none"
                    name="name"
                    id="name"
                    type="text"
                    placeholder="Ім'я"
                />
                {form.formState.errors.name?.message ? (
                    <span className="text-xs text-red-500">
                        {form.formState.errors.name?.message}
                    </span>
                ) : null}
            </div>
            <div className="flex flex-col gap-2 mx-auto w-60 mt-6 ">
                <label className="px-2 text-xs text-[#ABA49A]" htmlFor="name">
                    Ваше імейл
                </label>
                <input
                    {...form.register("email")}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-2 border-b pb-2 border-black bg-transparent outline-none"
                    name="email"
                    id="email"
                    type="email"
                    inputMode="email"
                    placeholder="Імейл"
                />
                {form.formState.errors.email?.message ? (
                    <span className="text-xs text-red-500">
                        {form.formState.errors.email?.message}
                    </span>
                ) : null}
            </div>
            <div className="flex flex-col gap-4 mt-14  items-center justify-center">
                <Button
                    disabled={mutation.isPending}
                    className="w-52 mx-auto disabled:opacity-50"
                    type="submit">
                    {mutation.isPending
                        ? "Підтвердження..."
                        : "Отримати доступ"}
                </Button>
                {error ? (
                    <p className="text-sm text-center text-red-500 w-full">
                        {error}
                    </p>
                ) : null}
                <p className="text-sm text-center text-[#ABA49A]">
                    Натискаючи кнопку “Отримати доступ” ви погоджуєтесь із нашою{" "}
                    <Link
                        className="underline underline-offset-2 hover:text-[#A79AF8] transition-colors"
                        href="/privacy-policy">
                        Політикою конфіденційності
                    </Link>
                </p>
            </div>
        </form>
    );
};
