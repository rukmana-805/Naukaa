"use client";

import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

export default function ProfessionalDetailsStep({
  next,
  prev,
  updateFormData,
  data,
}: any) {
  const [details, setDetails] = useState(
    data || {
      experienceType: "",
      totalExperience: "",
      currentCompany: "",
      currentSalary: "",
      expectedSalary: "",
      noticePeriod: "",
      availability: "",
    }
  );

  const handleSave = () => {
    updateFormData("professionalDetails", details);
    next();
  };

  return (
    <div className="space-y-8">

      <div>
        <h2 className="text-3xl font-bold mb-2">Professional Details</h2>
        <span className="text-gray-500 font-light">Your current professional status</span>
      </div>

      {/* EXPERIENCE TYPE */}

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-4">
          Current Status <span className="text-red-500">*</span>
        </label>

        <div className="grid grid-cols-2 gap-4">

          {/* Fresher */}

          <div
            onClick={() =>
              setDetails({ ...details, experienceType: "Fresher" })
            }
            className={`border-2 rounded-xl p-6 text-center cursor-pointer transition ${
              details.experienceType === "Fresher"
                ? "border-blue-600 bg-blue-50"
                : "border-gray-200 hover:border-blue-400"
            }`}
          >
            <h3 className="text-lg font-semibold text-gray-900">
              Fresher
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              0-1 years of experience
            </p>
          </div>

          {/* Experienced */}

          <div
            onClick={() =>
              setDetails({ ...details, experienceType: "Experienced" })
            }
            className={`border-2 rounded-xl p-6 text-center cursor-pointer transition ${
              details.experienceType === "Experienced"
                ? "border-blue-600 bg-blue-50"
                : "border-gray-200 hover:border-blue-400"
            }`}
          >
            <h3 className="text-lg font-semibold text-gray-900">
              Experienced
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              1+ years of experience
            </p>
          </div>

        </div>
      </div>

      {/* EXPERIENCE DETAILS */}

      {details.experienceType === "Experienced" && (

        <div className="grid grid-cols-2 gap-6">

          {/* Total Experience */}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Total Experience
            </label>

            <input
              type="text"
              value={details.totalExperience}
              onChange={(e) =>
                setDetails({
                  ...details,
                  totalExperience: e.target.value,
                })
              }
              placeholder="e.g. 3 Years"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
            />
          </div>

          {/* Current Company */}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Company
            </label>

            <input
              type="text"
              value={details.currentCompany}
              onChange={(e) =>
                setDetails({
                  ...details,
                  currentCompany: e.target.value,
                })
              }
              placeholder="Company name"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
            />
          </div>

          {/* Current Salary */}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Salary
            </label>

            <input
              type="text"
              value={details.currentSalary}
              onChange={(e) =>
                setDetails({
                  ...details,
                  currentSalary: e.target.value,
                })
              }
              placeholder="₹"
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
              value={details.expectedSalary}
              onChange={(e) =>
                setDetails({
                  ...details,
                  expectedSalary: e.target.value,
                })
              }
              placeholder="₹"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
            />
          </div>

          {/* Notice Period */}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Notice Period
            </label>

            <select
              value={details.noticePeriod}
              onChange={(e) =>
                setDetails({
                  ...details,
                  noticePeriod: e.target.value,
                })
              }
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
            >
              <option value="">Select Notice Period</option>
              <option value="Immediate">Immediate</option>
              <option value="15 Days">15 Days</option>
              <option value="30 Days">30 Days</option>
              <option value="60 Days">60 Days</option>
            </select>
          </div>

          {/* Availability */}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Availability
            </label>

            <select
              value={details.availability}
              onChange={(e) =>
                setDetails({
                  ...details,
                  availability: e.target.value,
                })
              }
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
            >
              <option value="">Select Availability</option>
              <option value="Immediate Joiner">Immediate Joiner</option>
              <option value="Within 15 days">Within 15 days</option>
              <option value="Within 30 days">Within 30 days</option>
            </select>
          </div>

        </div>
      )}

      {/* BUTTONS */}

      <div className="flex justify-between pt-6">

        <button
          onClick={prev}
          className="px-6 py-3 border-2 border-gray-200 rounded-xl font-medium hover:bg-gray-50 flex items-center gap-2"
        >
          <ChevronLeft className="w-5 h-5" />
          Previous
        </button>

        <button
          onClick={handleSave}
          className="px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 flex items-center gap-2"
        >
          Save & Continue
          <ChevronRight className="w-5 h-5" />
        </button>

      </div>

    </div>
  );
}