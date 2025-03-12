"use client";

import { useRouter } from "next/navigation";

export default function MenuLateralDashboard() {
  const isPro = false;
  const router = useRouter();
  
  const premium = "Premium"

  return (
    <div className="menu-lateral bg-slate-100 h-full">
      <div className="mt-2 mb-7">
        <h1 className="text-violet-500 text-2xl font-bold">MindFlow</h1>
        {isPro ? <p className="text-[12px]">Premium</p> : <p className="text-[12px]">Free</p>}
      </div>

      <div className="menu-lateral flex flex-col gap-4">
        <a
          onClick={() => router.push("/dashboard")}
          className="cursor-pointer"
        >
          Visão Geral
        </a>
        <a href="/dashboard/habitos">Habitos</a>
        <a href="/dashboard/financas">Financas {premium}</a>
        <a href="/dashboard/timer">Timer</a>

        <div className="botao-de-sair-premium flex flex-col gap-2">
          <button
            onClick={() => router.push("/pricing")}
            className="bg-violet-500 text-white p-2 rounded-md cursor-pointer"
            href="/pricing"
          >
            Upgrade para o plano premium
          </button>
          <button
            className="bg-red-500 text-white p-2 rounded-md cursor-pointer"
            href="/dashboard/sair"
          >
            Sair
          </button>
        </div>
      </div>
    </div>
  );
}
