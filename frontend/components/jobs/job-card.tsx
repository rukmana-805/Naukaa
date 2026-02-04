import { Building2, MapPin, Star } from "lucide-react";
import { Job } from "@/types/job";

type JobCardProps = {
  job: Job;
};

export default function JobCard({ job }: JobCardProps) {
  return (
    <div className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm hover:shadow-md transition-shadow">
      
      {/* Top Section */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-slate-900 mb-2">
            {job.title}
          </h3>

          <p className="text-slate-600 flex items-center">
            <Building2 className="w-4 h-4 mr-2" />
            {job.company}
          </p>
        </div>

        <button className="p-2 rounded-lg hover:bg-slate-100 transition-colors">
          <Star className="w-5 h-5 text-slate-400" />
        </button>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
          {job.type}
        </span>

        <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm flex items-center">
          <MapPin className="w-3 h-3 mr-1" />
          {job.location}
        </span>
      </div>

      {/* Bottom */}
      <div className="flex justify-between items-center">
        <span className="text-lg font-semibold text-slate-900">
          {job.salary}
        </span>

        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Apply Now
        </button>
      </div>
    </div>
  );
}
