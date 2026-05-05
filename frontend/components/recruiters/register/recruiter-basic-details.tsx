"use client";

import { useState } from "react";
import Input from "@/components/ui/input";

type Props = {
  mobile: string;
  onNext: () => void;
};

export default function RecruiterBasicDetails({ mobile, onNext }: Props) {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    accountType: "company",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.fullName || !form.email || !form.password) {
      alert("Fill all fields");
      return;
    }

    console.log("Basic Details:", form);
    onNext(); // 👉 move to next step
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow w-full max-w-lg">
      <h2 className="text-xl font-semibold mb-4">
        Basic Details
      </h2>

      <p className="text-sm text-gray-500 mb-4">
        Mobile: {mobile}
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">

        <Input
          label="Full name"
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          placeholder="Name as per PAN"
        />

        <Input
          label="Official email ID"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter email ID"
        />

        <Input
          label="Create password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Enter new password"
        />

        <button className="w-full bg-blue-600 text-white py-3 rounded-xl">
          Continue
        </button>
      </form>
    </div>
  );
}