"use client";

import { useState } from "react";
import { ChevronRight, ChevronLeft, Plus, Trash2 } from "lucide-react";

export default function WorkExperienceStep({
  next,
  prev,
  updateFormData,
  data,
}: any) {

  const [experiences, setExperiences] = useState(
    data?.length
      ? data
      : [
          {
            company: "",
            role: "",
            startDate: "",
            endDate: "",
            current: false,
            description: "",
          },
        ]
  );

  const updateExperience = (index: number, field: string, value: any) => {
    const updated = [...experiences];
    updated[index][field] = value;
    setExperiences(updated);
  };

  const addExperience = () => {
    setExperiences([
      ...experiences,
      {
        company: "",
        role: "",
        startDate: "",
        endDate: "",
        current: false,
        description: "",
      },
    ]);
  };

  const removeExperience = (index: number) => {
    const updated = experiences.filter((_: any, i: number) => i !== index);
    setExperiences(updated);
  };

  const handleSave = () => {
    updateFormData("workExperience", experiences);
    next();
  };

  return (
    <div className="space-y-8">

      <div>
        <h2 className="text-3xl font-bold mb-2">Work Experience</h2>
        <span className="text-gray-500 font-light">Your work history</span>
      </div>

      {experiences.map((exp: any, index: number) => (

        <div
          key={index}
          className="border-2 border-gray-200 rounded-xl p-6 space-y-6"
        >

          <div className="flex justify-between items-center">

            <h3 className="text-lg font-semibold text-gray-900">
              Work Experience {index + 1}
            </h3>

            {experiences.length > 1 && (
              <button
                onClick={() => removeExperience(index)}
                className="text-red-500 hover:text-red-700 flex items-center gap-1"
              >
                <Trash2 className="w-4 h-4" />
                Remove
              </button>
            )}

          </div>

          <div className="grid grid-cols-2 gap-6">

            {/* Company */}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company Name
              </label>

              <input
                type="text"
                value={exp.company}
                onChange={(e) =>
                  updateExperience(index, "company", e.target.value)
                }
                placeholder="Company name"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
              />
            </div>

            {/* Role */}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Role / Designation
              </label>

              <input
                type="text"
                value={exp.role}
                onChange={(e) =>
                  updateExperience(index, "role", e.target.value)
                }
                placeholder="Software Engineer"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
              />
            </div>

            {/* Start Date */}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Start Date
              </label>

              <input
                type="date"
                value={exp.startDate}
                onChange={(e) =>
                  updateExperience(index, "startDate", e.target.value)
                }
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
              />
            </div>

            {/* End Date */}

            {!exp.current && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  End Date
                </label>

                <input
                  type="date"
                  value={exp.endDate}
                  onChange={(e) =>
                    updateExperience(index, "endDate", e.target.value)
                  }
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
                />
              </div>
            )}

            {/* Current Working */}

            <div className="col-span-2 flex items-center gap-2">

              <input
                type="checkbox"
                checked={exp.current}
                onChange={(e) =>
                  updateExperience(index, "current", e.target.checked)
                }
                className="w-5 h-5 text-blue-600 border-2 border-gray-300 rounded"
              />

              <span className="text-gray-700">
                I currently work here
              </span>

            </div>

            {/* Description */}

            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Job Description
              </label>

              <textarea
                value={exp.description}
                onChange={(e) =>
                  updateExperience(index, "description", e.target.value)
                }
                rows={4}
                placeholder="Describe your responsibilities..."
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
              />
            </div>

          </div>

        </div>
      ))}

      {/* Add Experience */}

      <button
        onClick={addExperience}
        className="flex items-center gap-2 text-blue-600 font-semibold"
      >
        <Plus className="w-4 h-4" />
        Add Another Experience
      </button>

      {/* Navigation Buttons */}

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