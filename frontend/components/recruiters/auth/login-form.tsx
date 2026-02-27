"use client";

import { useState } from "react";
import { User, Lock, Eye, EyeOff } from "lucide-react";
import Input from "@/components/ui/input";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }

    console.log("Recruiter login:", { email, password });

    // reset
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">

      {/* EMAIL */}
      <Input
        label="Email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
        icon={<User className="w-5 h-5" />}
      />

      {/* PASSWORD */}
      <div className="relative">
        <Input
          label="Password"
          name="password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          icon={<Lock className="w-5 h-5" />}
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-[42px] text-gray-400"
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>

      {/* FORGOT PASSWORD */}
      <div className="text-right">
        <a href="#" className="text-sm text-blue-600 hover:underline">
          Forgot password?
        </a>
      </div>

      {/* SUBMIT */}
      <button
        type="submit"
        className="w-full bg-[#2164e8] hover:bg-[#1557d6] text-white py-3 rounded-xl transition font-semibold shadow-lg"
      >
        Log in
      </button>
    </form>
  );
}