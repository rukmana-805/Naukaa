"use client";

import { useState } from "react";
import Input from "@/components/ui/input";

type Props = {
  onFinish: () => void;
  onVerifySuccess: () => void;
};

// type Props = {
//   onFinish: () => void;
//   onVerifySuccess: () => void;
// };

// export default function RecruiterCompanyDetails({ 
//   onFinish, 
//   onVerifySuccess 
// }: Props) {
export default function RecruiterCompanyDetails({ onFinish, onVerifySuccess }: Props) {
  const [form, setForm] = useState({
    company: "",
    size: "",
    designation: "",
    pincode: "",
    address: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Company Details:", form);
    onFinish(); // 👉 DONE
    onVerifySuccess();
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow w-full max-w-lg">
      <h2 className="text-xl font-semibold mb-4">
        Company Details
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <Input
          label="Company"
          name="company"
          value={form.company}
          onChange={handleChange}
          placeholder="Enter company name"
        />

        <Input
          label="Number of employees"
          name="size"
          value={form.size}
          onChange={handleChange}
          placeholder="Select range"
        />

        <Input
          label="Your designation"
          name="designation"
          value={form.designation}
          onChange={handleChange}
          placeholder="Enter designation"
        />

        <Input
          label="Pin code"
          name="pincode"
          value={form.pincode}
          onChange={handleChange}
          placeholder="Enter pincode"
        />

        <Input
          label="Company address"
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="Enter address"
        />

        <button className="w-full bg-blue-600 text-white py-3 rounded-xl">
          Finish
        </button>
      </form>
    </div>
  );
}