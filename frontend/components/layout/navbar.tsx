"use client";

import Link from "next/link";
import { Briefcase } from "lucide-react";
import { useEffect, useState } from "react";
import { getAuth, logout } from "@/lib/auth";
import { useRouter } from "next/navigation";

export default function Navbar() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsLoggedIn(getAuth());
  }, []);

  const handleLogOutUser = () => {
    logout();
    setIsLoggedIn(false);
    router.push("/login");
  }

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Briefcase className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-semibold text-slate-900">
              Naukaa
            </span>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/jobs"
              className="text-slate-600 font-semibold hover:text-slate-900 transition-colors"
            >
              Jobs
            </Link>
            <Link
              href="/companies"
              className="text-slate-600 font-semibold hover:text-slate-900 transition-colors"
            >
              Companies
            </Link>
            <Link
              href="#services"
              className="text-slate-600 font-semibold hover:text-slate-900 transition-colors"
            >
              Services
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (<button
              // href=""
              className="text-blue-600 font-semibold hover:text-blue-700 transition-colors cursor-pointer"
              onClick={handleLogOutUser}
            >
              Log Out
            </button>) : (<Link
              href="/login"
              className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              Log In
            </Link>
          
          )
            }

            <Link
              href="/register"
              className="px-5 py-2 bg-blue-600 font-semibold text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
