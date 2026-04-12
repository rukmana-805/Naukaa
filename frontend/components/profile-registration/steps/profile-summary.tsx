"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProfileSummaryStep({
  next,
  prev,
  updateFormData,
  data,
}: any) {

  const [summary, setSummary] = useState(data || "");

  const handleSave = () => {
    updateFormData("profileSummary", summary);
    next();
  };

  return (
    <div className="space-y-8">

      <div>
        <h2 className="text-3xl font-bold mb-2">Profile Summary</h2>
        <span className="text-gray-500 font-light">Tell us about yourself</span>
      </div>

      {/* TITLE */}

      <div>
        <h2 className="font-semibold  text-gray-700 mb-2">
          Write a brief summary about yourself
        </h2>

        <p className="text-sm text-gray-600">
          Highlight your key strengths, career goals, and what makes you unique. This will be visible to recruiters.
        </p>
      </div>

      {/* TEXTAREA */}

      <div>

        <textarea
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          rows={8}
          placeholder="Example: I am a passionate frontend developer with 3+ years of experience building scalable web applications using React, TypeScript and modern UI frameworks..."
          className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
        />

        <div className="flex justify-between text-sm text-gray-500 mt-2">

          <span>
            Tip: Highlight your key achievements and technologies.
          </span>

          <span>{summary.length} characters</span>

        </div>

      </div>

      {/* NAVIGATION */}

      <div className="flex justify-between pt-6">

        <button
          onClick={prev}
          className="px-6 py-3 border-2 border-gray-200 rounded-xl flex items-center gap-2"
        >
          <ChevronLeft className="w-5 h-5" />
          Previous
        </button>

        <button
          onClick={handleSave}
          className="px-8 py-3 bg-blue-600 text-white rounded-xl flex items-center gap-2"
        >
          Save & Continue
          <ChevronRight className="w-5 h-5" />
        </button>

      </div>

    </div>
  );
}