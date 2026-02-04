"use client";

import { useState, ChangeEvent } from "react";
import { Search, MapPin } from "lucide-react";
import { QUICK_FILTERS } from "@/constants/filters";

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchQuery(e.target.value);

  const handleLocationChange = (e: ChangeEvent<HTMLInputElement>) =>
    setLocation(e.target.value);

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-white via-slate-50 to-white">
      <div className="max-w-7xl mx-auto">

        <header className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
            Find Your Dream Job
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Discover thousands of opportunities from top companies worldwide
          </p>
        </header>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <SearchInput
              icon={<Search />}
              placeholder="Job title, keywords, or company"
              value={searchQuery}
              onChange={handleSearchChange}
            />

            <SearchInput
              icon={<MapPin />}
              placeholder="City, state, or remote"
              value={location}
              onChange={handleLocationChange}
            />

            <button className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 shadow-lg">
              Search Jobs
            </button>
          </div>

          <QuickFilters />
        </div>
      </div>
    </section>
  );
}

/* ---------- Internal Components (UI SAME) ---------- */

type InputProps = {
  icon: React.ReactNode;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

function SearchInput({ icon, ...props }: InputProps) {
  return (
    <div className="flex-1 relative">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
        {icon}
      </span>
      <input
        {...props}
        className="w-full pl-12 pr-4 py-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

function QuickFilters() {
  return (
    <div className="mt-6 flex flex-wrap gap-3 items-center">
      <span className="text-sm text-slate-500">Popular searches:</span>

      {QUICK_FILTERS.map((tag) => (
        <button
          key={tag}
          className="px-4 py-1.5 bg-slate-100 text-slate-700 rounded-full text-sm hover:bg-slate-200 transition"
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
