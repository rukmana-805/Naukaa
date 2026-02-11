import JobCard from "./job-card";
import { Job } from "@/types/job";

type Props = {
  jobs: Job[];
  selectedJob?: Job | null;
  onSelect: (job: Job) => void;
  savedJobs: number[];
  toggleSave: (id: number) => void;
};

export default function JobList({
  jobs,
  selectedJob,
  onSelect,
  savedJobs,
  toggleSave,
}: Props) {
  return (
    <div className="space-y-4">
      {jobs.map((job) => (
        <JobCard
          key={job.id}
          job={job}
          selected={selectedJob?.id === job.id}
          onClick={() => onSelect(job)}
          saved={savedJobs.includes(job.id)}
          onToggleSave={() => toggleSave(job.id)}
          showApply={false}
        />
      ))}
    </div>
  );
}
