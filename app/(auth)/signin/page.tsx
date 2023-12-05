"use client";

import Link from "next/link";
import { useFormState } from "react-dom";

import { login } from "@/app/lib/actions/login";
import { Input } from "@/app/ui/forms/input";
import { Submit } from "@/app/ui/forms/submit";

export default function Page() {
  const [state, dispatch] = useFormState(login, { message: "" });

  return (
    <>
      <form action={dispatch} className="flex flex-col gap-2">
        <Input name="email" type="email" placeholder="email" />
        <Input name="password" type="password" placeholder="senha" />

        <Submit>Entrar</Submit>
      </form>

      <p className="text-center text-red-500">{state?.message}</p>

      <Link
        href="/signup"
        className="text-darkGray/60 hover:text-darkGray text-center text-sm hover:underline"
      >
        Não tenho uma conta.
      </Link>
    </>
  );
}