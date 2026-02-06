"use client";

import { useState } from "react";
import CompanyOverview from "@/components/company/overview/company-overview";
import CompanyJobs from "@/components/company/jobs/company-job";

export default function CompanyTabs({ company }: { company: any }) {
  const [tab, setTab] = useState<"overview" | "jobs">("overview");

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Tabs */}
      <div className="border-b border-b-gray-300 flex gap-8 mb-8">
        {["overview", "jobs"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t as any)}
            className={`pb-4 font-semibold ${
              tab === t ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"
            }`}
          >
            {t === "overview" ? "Overview" : "Jobs"}
          </button>
        ))}
      </div>

      {/* Content */}
      {tab === "overview" && (
        <div className="space-y-8">
          <CompanyOverview company={company}/>
        </div>
      )}

      {tab === "jobs" && <CompanyJobs jobs={company.jobs} />}
    </div>
  );
}
