"use client";

import {
  MapPin,
  DollarSign,
  BookmarkPlus,
  Bookmark,
  Share2,
  Users,
  GraduationCap,
  Briefcase,
  Award,
  TrendingUp,
  CheckCircle2,
  ExternalLink,
  Flag,
} from "lucide-react";
import { Job } from "@/types/job";

type Props = {
  job: Job | null;
  saved: boolean;
  onToggleSave: () => void;
};

export default function JobDetails({ job, saved, onToggleSave }: Props) {
  if (!job) return null;

  return (
    <div className="w-96 shrink-0">
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 sticky top-28 max-h-[calc(100vh-140px)] flex flex-col">

        {/* ================= HEADER ================= */}
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            {job.title}
          </h2>

          <a
            href="#"
            className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 mb-4"
          >
            <Briefcase className="w-4 h-4" />
            {job.company}
            <ExternalLink className="w-4 h-4" />
          </a>

          <div className="space-y-2 mb-4">
            <p className="flex items-center gap-2 text-gray-700">
              <MapPin className="w-5 h-5 text-gray-400" />
              {job.location}
            </p>
            <p className="flex items-center gap-2 text-gray-700 font-semibold">
              <DollarSign className="w-5 h-5 text-gray-400" />
              {job.salary}
            </p>
          </div>

          <div className="flex gap-3">
            <button className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              Apply Now
            </button>

            <button
              onClick={onToggleSave}
              className="p-3 border-2 border-gray-200 rounded-lg hover:bg-gray-50"
            >
              {saved ? (
                <Bookmark className="w-5 h-5 text-blue-600 fill-blue-600" />
              ) : (
                <BookmarkPlus className="w-5 h-5 text-gray-600" />
              )}
            </button>

            <button className="p-3 border-2 border-gray-200 rounded-lg hover:bg-gray-50">
              <Share2 className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* ================= SCROLLABLE CONTENT ================= */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8">

          {/* ================= PROFILE INSIGHTS ================= */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-600" />
              Profile Insights
            </h3>

            <div className="bg-blue-50 rounded-lg p-4 space-y-4">
              <div>
                <p className="text-sm font-semibold text-gray-700 mb-2">
                  Skills Required:
                </p>
                <div className="flex flex-wrap gap-2">
                  {job.description?.skills?.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white text-blue-700 rounded-full text-sm font-medium border border-blue-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-700 mb-2">
                  Education:
                </p>
                {job.description?.education?.map((edu, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <GraduationCap className="w-4 h-4 text-blue-600 mt-0.5" />
                    <p className="text-sm text-gray-700">{edu}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ================= JOB DETAILS ================= */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-blue-600" />
              Job Details
            </h3>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-700 font-medium">Pay:</span>
                <span className="text-gray-900 font-semibold">{job.salary}</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-700 font-medium">Job Type:</span>
                <span className="text-gray-900 font-semibold">{job.type}</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-700 font-medium">Experience:</span>
                <span className="text-gray-900 font-semibold">{job.experience}</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-700 font-medium">Openings:</span>
                <span className="text-gray-900 font-semibold">{job.openings}</span>
              </div>
            </div>
          </div>

          {/* ================= BENEFITS ================= */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-blue-600" />
              Benefits
            </h3>

            <div className="grid grid-cols-2 gap-3">
              {job.description?.benefits?.map((b, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 p-3 bg-green-50 rounded-lg"
                >
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-gray-700">{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ================= FULL JOB DESCRIPTION ================= */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              Full Job Description
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Job Summary
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {job.description?.summary}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Key Requirements
                </h4>
                <ul className="space-y-2">
                  {job.description?.requirements?.map((r, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div>
                      <span className="text-gray-700">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Responsibilities
                </h4>
                <ul className="space-y-2">
                  {job.description?.responsibilities?.map((r, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div>
                      <span className="text-gray-700">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Contact Details
                </h4>
                <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-sm">
                  <p><strong>Recruiter:</strong> {job.description?.contact?.recruiter}</p>
                  <p><strong>Email:</strong> {job.description?.contact?.email}</p>
                  <p><strong>Phone:</strong> {job.description?.contact?.phone}</p>
                </div>
              </div>
            </div>
          </div>

          {/* ================= REPORT ================= */}
          <button className="w-full px-4 py-3 border-2 border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-2">
            <Flag className="w-4 h-4" />
            Report this job
          </button>
        </div>
      </div>
    </div>
  );
}
