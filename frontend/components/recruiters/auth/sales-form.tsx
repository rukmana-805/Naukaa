"use client";

import { useState } from "react";
import { Building2, Mail, Phone } from "lucide-react";
import Input from "@/components/ui/input";

export default function SalesForm() {
  const [companyName, setCompanyName] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!companyName || !businessEmail || !phoneNumber) {
      alert("Please fill in all fields");
      return;
    }

    console.log("Sales enquiry submitted:", {
      companyName,
      businessEmail,
      phoneNumber,
    });

    // reset
    setCompanyName("");
    setBusinessEmail("");
    setPhoneNumber("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">

      {/* COMPANY NAME */}
      <Input
        label="Company name"
        name="companyName"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        placeholder="Enter company name"
        icon={<Building2 className="w-5 h-5" />}
      />

      {/* BUSINESS EMAIL */}
      <Input
        label="Business email"
        name="businessEmail"
        type="email"
        value={businessEmail}
        onChange={(e) => setBusinessEmail(e.target.value)}
        placeholder="Enter business email"
        icon={<Mail className="w-5 h-5" />}
      />

      {/* PHONE NUMBER */}
      <Input
        label="Phone number"
        name="phoneNumber"
        type="tel"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="Enter phone number"
        icon={<Phone className="w-5 h-5" />}
      />

      {/* SUBMIT BUTTON */}
      <button
        type="submit"
        className="w-full bg-[#2164e8] hover:bg-[#1557d6] text-white font-bold py-3 rounded-xl transition-all shadow-lg"
      >
        Submit enquiry
      </button>
    </form>
  );
}