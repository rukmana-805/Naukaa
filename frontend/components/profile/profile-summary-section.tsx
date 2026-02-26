"use client";

import { User, Edit2 } from "lucide-react";

export default function ProfileSummarySection() {
  return (
    <div
      id="profile-summary"
      className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <User className="w-6 h-6 text-blue-600" />
          Profile Summary
        </h2>

        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <Edit2 className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <p className="text-gray-700 leading-relaxed">
        A passionate and dedicated Frontend Developer with strong expertise in
        React.js and modern web technologies. Seeking opportunities to
        contribute to innovative projects and grow professionally in a dynamic
        environment.
      </p>
    </div>
  );
}