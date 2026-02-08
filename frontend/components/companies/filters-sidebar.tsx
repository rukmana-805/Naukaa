"use client";

import { useState } from "react";
import FilterSection from "@/components/companies/filter-section";

const filterOptions: Record<FilterKey, { label: string; count: number }[]> = {
  companyType: [
    { label: "Corporate", count: 4780 },
    { label: "Foreign MNC", count: 1585 },
    { label: "Startup", count: 766 },
    { label: "Indian MNC", count: 652 },
  ],
  location: [
    { label: "Bangalore", count: 3245 },
    { label: "Mumbai", count: 2890 },
    { label: "Delhi", count: 2456 },
  ],
  industry: [
    { label: "IT Services & Consulting", count: 2340 },
    { label: "E-commerce & Retail", count: 1567 },
  ],
  experience: [
    { label: "Fresher (0-1 years)", count: 5678 },
    { label: "Senior (5-10 years)", count: 2345 },
  ],
};

type FilterKey = "companyType" | "location" | "industry" | "experience";

export default function FiltersSidebar({ filters, setFilters }: any) {
  const [expanded, setExpanded] = useState<Record<FilterKey, boolean>>({
    companyType: true,
    location: true,
    industry: true,
    experience: true,
  });

  const toggle = (key: FilterKey) =>
    setExpanded((p) => ({ ...p, [key]: !p[key] }));

  const onChange = (key: string, value: string) => {
    setFilters((p: any) => ({
      ...p,
      [key]: p[key].includes(value)
        ? p[key].filter((v: string) => v !== value)
        : [...p[key], value],
    }));
  };

  return (
    <div className="w-80 shrink-0">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 sticky top-24">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">All Filters</h2>
        </div>

        {(
          Object.entries(filterOptions) as [
            FilterKey,
            { label: string; count: number }[],
          ][]
        ).map(([key, options]) => (
          <FilterSection
            key={key}
            title={key.replace(/^\w/, (c) => c.toUpperCase())}
            options={options}
            value={filters[key]}
            expanded={expanded[key]}
            toggle={() => toggle(key)}
            onChange={(val: string) => onChange(key, val)}
          />
        ))}
      </div>
    </div>
  );
}
