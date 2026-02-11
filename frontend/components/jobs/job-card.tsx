"use client";

import {
  MapPin,
  DollarSign,
  Clock,
  BookmarkPlus,
  Bookmark,
  Send,
  Building2,
} from "lucide-react";
import { Job } from "@/types/job";

type Props = {
  job: Job;
  selected?: boolean;
  onClick?: () => void;
  saved?: boolean;
  onToggleSave?: () => void;
  showApply?: boolean;
};

export default function JobsCard({
  job,
  selected = false,
  onClick,
  saved = false,
  onToggleSave,
  showApply = true,
}: Props) {
  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-xl border-2 p-6 cursor-pointer transition-all ${
        selected
          ? "border-blue-600 shadow-lg"
          : "border-gray-200 hover:border-blue-300 hover:shadow-md"
      }`}
    >
      {/* ===== HEADER ===== */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {job.title}
          </h3>

          <p className="text-gray-700 font-medium mb-2 flex items-center gap-2">
            <Building2 className="w-4 h-4" />
            {job.company}
          </p>
        </div>

        {/* Save Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleSave?.();
          }}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          {saved ? (
            <Bookmark className="w-6 h-6 text-blue-600 fill-blue-600" />
          ) : (
            <BookmarkPlus className="w-6 h-6 text-gray-400" />
          )}
        </button>
      </div>

      {/* ===== INFO ROW ===== */}
      <div className="flex flex-wrap gap-3 mb-4">
        <span className="flex items-center gap-1 text-sm text-gray-600">
          <MapPin className="w-4 h-4" />
          {job.location}
        </span>

        <span className="flex items-center gap-1 text-sm text-gray-600">
          <DollarSign className="w-4 h-4" />
          {job.salary}
        </span>

        <span className="flex items-center gap-1 text-sm text-gray-600">
          <Clock className="w-4 h-4" />
          {job.experience}
        </span>
      </div>

      {/* ===== TAGS ===== */}
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium">
          {job.type}
        </span>

        <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
          {job.industry}
        </span>
      </div>

      {/* ===== FOOTER ===== */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span>Posted {job.posted}</span>
          <span>•</span>
          <span>{job.applicants} applicants</span>
        </div>

        {showApply && (
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center gap-2">
            <Send className="w-4 h-4" />
            Easy Apply
          </button>
        )}
      </div>
    </div>
  );
}
