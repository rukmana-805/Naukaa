"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CareerPreferencesStep({
  next,
  prev,
  updateFormData,
  data,
}: any) {

  const [preferences, setPreferences] = useState(
    data || {
      desiredRole: "",
      preferredIndustry: "",
      department: "",
      employmentType: "",
      shift: "",
      workMode: "",
      expectedSalary: "",
    }
  );

  const handleSave = () => {
    updateFormData("careerPreferences", preferences);
    next();
  };

  return (
    <div className="space-y-8">

      <div>
        <h2 className="text-3xl font-bold mb-2">Career Preferences</h2>
        <span className="text-gray-500 font-light">Your job preferences</span>
      </div>

      <div className="grid grid-cols-2 gap-6">

        {/* Desired Job Role */}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Desired Job Role
          </label>

          <input
            type="text"
            value={preferences.desiredRole}
            onChange={(e) =>
              setPreferences({
                ...preferences,
                desiredRole: e.target.value,
              })
            }
            placeholder="Software Engineer"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
          />
        </div>

        {/* Preferred Industry */}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Preferred Industry
          </label>

          <input
            type="text"
            value={preferences.preferredIndustry}
            onChange={(e) =>
              setPreferences({
                ...preferences,
                preferredIndustry: e.target.value,
              })
            }
            placeholder="IT / Software"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
          />
        </div>

        {/* Department */}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Department
          </label>

          <input
            type="text"
            value={preferences.department}
            onChange={(e) =>
              setPreferences({
                ...preferences,
                department: e.target.value,
              })
            }
            placeholder="Engineering / Development"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
          />
        </div>

        {/* Expected Salary */}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Expected Salary
          </label>

          <input
            type="text"
            value={preferences.expectedSalary}
            onChange={(e) =>
              setPreferences({
                ...preferences,
                expectedSalary: e.target.value,
              })
            }
            placeholder="₹10 LPA"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
          />
        </div>

        {/* Employment Type */}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Employment Type
          </label>

          <select
            value={preferences.employmentType}
            onChange={(e) =>
              setPreferences({
                ...preferences,
                employmentType: e.target.value,
              })
            }
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
          >
            <option value="">Select</option>
            <option>Full Time</option>
            <option>Part Time</option>
            <option>Internship</option>
            <option>Contract</option>
          </select>
        </div>

        {/* Shift */}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Preferred Shift
          </label>

          <select
            value={preferences.shift}
            onChange={(e) =>
              setPreferences({
                ...preferences,
                shift: e.target.value,
              })
            }
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
          >
            <option value="">Select</option>
            <option>Day Shift</option>
            <option>Night Shift</option>
            <option>Flexible</option>
          </select>
        </div>

      </div>

      {/* Work Mode */}

      <div>

        <label className="block text-sm font-medium text-gray-700 mb-3">
          Work Mode
        </label>

        <div className="flex gap-4">

          {["Remote", "Hybrid", "Onsite"].map((mode) => (

            <button
              key={mode}
              onClick={() =>
                setPreferences({
                  ...preferences,
                  workMode: mode,
                })
              }
              className={`px-6 py-3 border-2 rounded-xl transition ${
                preferences.workMode === mode
                  ? "border-blue-600 bg-blue-50"
                  : "border-gray-200"
              }`}
            >
              {mode}
            </button>

          ))}

        </div>

      </div>

      {/* Navigation */}

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