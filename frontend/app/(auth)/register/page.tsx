"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import {
  Check,
  Eye,
  EyeOff,
  Briefcase,
  User,
  Mail,
  Lock,
  Phone,
} from "lucide-react";
import Input from "@/components/ui/input";


type RegisterFormData = {
  fullName: string;
  email: string;
  password: string;
  mobile: string;
  workingStatus: string;
  acceptTerms: boolean;
};

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState<RegisterFormData>({
    fullName: "",
    email: "",
    password: "",
    mobile: "",
    workingStatus: "",
    acceptTerms: false,
  });

  const benefits = [
    "Access to 2M+ job opportunities worldwide",
    "Get personalized job recommendations",
    "Connect with top recruiters instantly",
    "Build your professional profile",
    "Track your applications in one place",
  ];

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex">

      {/* LEFT SIDE */}
      <div className="hidden lg:flex lg:w-1/2 bg-linear-to-br from-blue-600 via-blue-700 to-blue-800 p-12 flex-col justify-center items-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full opacity-20 -translate-x-32 -translate-y-32" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900 rounded-full opacity-20 translate-x-32 translate-y-32" />

        <div className="relative z-10 max-w-md">
          <div className="mb-12 text-center">
            <div className="w-80 h-80 mx-auto mb-8 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center p-8">
              <span className="text-9xl">🚀</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-3">
              Start Your Career Journey
            </h2>
            <p className="text-blue-100 text-lg">
              Join thousands of professionals finding their dream jobs
            </p>
          </div>

          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 text-white">
                <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-green-900" strokeWidth={3} />
                </div>
                <p className="text-blue-50">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md">

          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">Naukaa</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Create Account
            </h1>
            <p className="text-gray-600">
              Start your journey to success today
            </p>
          </div>

          {/* SOCIAL LOGIN */}
          <div className="space-y-3 mb-6">
            <button className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-white border-2 border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all font-medium text-gray-700 shadow-sm">
              <span>Continue with Google</span>
            </button>

            <button className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-black border-2 border-black rounded-xl hover:bg-gray-900 transition-all font-medium text-white shadow-sm">
              <span>Continue with Apple</span>
            </button>
          </div>

          {/* DIVIDER */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-gray-50 text-gray-500">
                Or register with email
              </span>
            </div>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="John Doe"
              icon={<User className="w-5 h-5" />}
            />

            <Input
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john.doe@example.com"
              icon={<Mail className="w-5 h-5" />}
            />

            {/* PASSWORD */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-12 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
            </div>

            <Input
              label="Mobile Number"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="+1 (555) 000-0000"
              icon={<Phone className="w-5 h-5" />}
            />

            {/* WORKING STATUS */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Working Status
              </label>
              <select
                name="workingStatus"
                value={formData.workingStatus}
                onChange={handleChange}
                className="w-full py-3 px-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select your status</option>
                <option value="fresher">Fresher (0–1 years)</option>
                <option value="experienced">Experienced (1+ years)</option>
              </select>
            </div>

            {/* TERMS */}
            <div className="flex items-start">
              <input
                type="checkbox"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleChange}
                className="w-5 h-5 mt-1"
                required
              />
              <p className="ml-3 text-sm text-gray-600">
                I agree to the{" "}
                <span className="text-blue-600 font-medium">
                  Terms and Privacy Policy
                </span>
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-linear-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold text-lg hover:shadow-xl transition-all"
            >
              Create Account
            </button>
          </form>

          <p className="text-center mt-6 text-gray-600">
            Already have an account?{" "}
            <span className="text-blue-600 font-semibold cursor-pointer">
              Sign In
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
