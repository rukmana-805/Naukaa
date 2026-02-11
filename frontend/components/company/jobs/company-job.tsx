"use client";

import JobCard from "@/components/jobs/job-card";
import JobFilters from "@/components/jobs/job-filters";
import { useState } from "react";

export default function CompanyJobs({ jobs }: { jobs: any[] }) {
  const [filters, setFilters] = useState({
    department: "",
    location: "",
    experience: "",
  });

  const departments = [...new Set(jobs.map((j) => j.department))];
  const locations = [...new Set(jobs.map((j) => j.location))];
  const experiences = [...new Set(jobs.map((j) => j.experience))];

  const filteredJobs = jobs.filter(
    (job) =>
      (!filters.department || job.department === filters.department) &&
      (!filters.location || job.location === filters.location) &&
      (!filters.experience || job.experience === filters.experience)
  );

  return (
    <div className="my-16">
      <JobFilters
        filters={filters}
        departments={departments}
        locations={locations}
        experiences={experiences}
        onChange={setFilters}
      />

      <p className="text-gray-600 mb-6">
        Showing{" "}
        <span className="font-semibold text-gray-900">
          {filteredJobs.length}
        </span>{" "}
        jobs
      </p>

      <div className="space-y-4">
        {filteredJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}
