"use client";

import JobsCard from "@/components/jobs/job-card";
import JobFilters from "@/components/jobs/job-filters";
import JobsSearch from "@/components/jobs/job-search-bar";
import JobDetails from "@/components/jobs/job-details";
import { FILTER_OPTIONS, JOBS } from "@/constants/job";
import { useState, useEffect } from "react";
import { Job } from "@/types/job";

export default function JobsPage() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [savedJobs, setSavedJobs] = useState<number[]>([]);

  const [searchFilters, setSearchFilters] = useState({
    keyword: "",
    city: "",
  });

  const [filters, setFilters] = useState({
    companyType: [] as string[],
    location: [] as string[],
    industry: [] as string[],
  });

  const [expandedSections, setExpandedSections] = useState({
    companyType: true,
    location: true,
    industry: true,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const toggleSaveJob = (id: number) => {
    setSavedJobs((prev) =>
      prev.includes(id)
        ? prev.filter((i) => i !== id)
        : [...prev, id]
    );
  };

  useEffect(() => {
    if (JOBS.length > 0) {
      setSelectedJob(JOBS[0]);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* SEARCH BAR */}
      <JobsSearch
        searchFilters={searchFilters}
        setSearchFilters={setSearchFilters}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex gap-6">

          {/* LEFT FILTERS */}
          <JobFilters
            filters={filters}
            setFilters={setFilters}
            expandedSections={expandedSections}
            toggleSection={toggleSection}
            filterOptions={FILTER_OPTIONS}
          />

          {/* MIDDLE JOB CARDS */}
          <div className="flex-1 space-y-4">
            <p className="text-gray-600 mb-4">
              Showing <span className="font-semibold">{JOBS.length}</span> jobs
            </p>

            {JOBS.map((job) => (
              <JobsCard
                key={job.id}
                job={job}
                selected={selectedJob?.id === job.id}
                onClick={() => setSelectedJob(job)}
                saved={savedJobs.includes(job.id)}
                onToggleSave={() => toggleSaveJob(job.id)}
              />
            ))}
          </div>

          {/* RIGHT JOB DETAILS */}
          <JobDetails
            job={selectedJob}
            saved={
              selectedJob
                ? savedJobs.includes(selectedJob.id)
                : false
            }
            onToggleSave={() =>
              selectedJob && toggleSaveJob(selectedJob.id)
            }
          />
        </div>
      </div>
    </div>
  );
}
