"use client";

import { Target, Edit2 } from "lucide-react";

export default function CareerProfileSection() {
  return (
    <div
      id="career-profile"
      className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <Target className="w-6 h-6 text-blue-600" />
          Career Profile
        </h2>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <Edit2 className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <p className="text-sm text-gray-600 mb-1">Current Industry</p>
          <p className="font-semibold text-gray-900">
            IT Services & Consulting
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-600 mb-1">Department</p>
          <p className="font-semibold text-gray-900">
            Engineering - Software
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-600 mb-1">Job Role</p>
          <p className="font-semibold text-gray-900">
            Frontend Developer
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-600 mb-1">Expected Salary</p>
          <p className="font-semibold text-gray-900">
            ₹6-8 Lakhs
          </p>
        </div>

        <div className="col-span-2">
          <p className="text-sm text-gray-600 mb-2">
            Preferred Locations
          </p>
          <div className="flex flex-wrap gap-2">
            {["Bangalore", "Hyderabad", "Remote"].map((loc) => (
              <span
                key={loc}
                className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
              >
                {loc}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}