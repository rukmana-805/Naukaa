"use client";

import { useState } from "react";
import LoginForm from "@/components/recruiters/auth/login-form";
import SalesForm from "@/components/recruiters/auth/sales-form";

export default function AuthCard() {
  const [tab, setTab] = useState<"login" | "sales">("login");

  return (
    <div className="bg-white rounded-2xl p-8 shadow-xl">
      <div className="flex bg-gray-100 rounded-full mb-6">
        <button
          onClick={() => setTab("sales")}
          className={`flex-1 py-3 rounded-full ${
            tab === "sales" ? "bg-white shadow" : ""
          }`}
        >
          Sales enquiry
        </button>

        <button
          onClick={() => setTab("login")}
          className={`flex-1 py-3 rounded-full ${
            tab === "login" ? "bg-white shadow" : ""
          }`}
        >
          Register / Log in
        </button>
      </div>

      {tab === "login" ? <LoginForm /> : <SalesForm />}
    </div>
  );
}