"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Plus, Trash2 } from "lucide-react";

export default function EducationStep({
  next,
  prev,
  updateFormData,
  data,
}: any) {

  const [education, setEducation] = useState(
    data?.length
      ? data
      : [
          {
            degree: "",
            institution: "",
            field: "",
            startYear: "",
            endYear: "",
            grade: "",
          },
        ]
  );

  const updateEducation = (index: number, field: string, value: any) => {
    const updated = [...education];
    updated[index][field] = value;
    setEducation(updated);
  };

  const addEducation = () => {
    setEducation([
      ...education,
      {
        degree: "",
        institution: "",
        field: "",
        startYear: "",
        endYear: "",
        grade: "",
      },
    ]);
  };

  const removeEducation = (index: number) => {
    const updated = education.filter((_: any, i: number) => i !== index);
    setEducation(updated);
  };

  const handleSave = () => {
    updateFormData("education", education);
    next();
  };

  return (
    <div className="space-y-8">

      <div>
        <h2 className="text-3xl font-bold mb-2">Educational Details</h2>
        <span className="text-gray-500 font-light">Your educational background</span>
      </div>

      {education.map((edu: any, index: number) => (

        <div
          key={index}
          className="border-2 border-gray-200 rounded-xl p-6 space-y-6"
        >

          <div className="flex justify-between items-center">

            <h3 className="text-lg font-semibold text-gray-900">
              Education {index + 1}
            </h3>

            {education.length > 1 && (
              <button
                onClick={() => removeEducation(index)}
                className="text-red-500 hover:text-red-700 flex items-center gap-1"
              >
                <Trash2 className="w-4 h-4" />
                Remove
              </button>
            )}

          </div>

          <div className="grid grid-cols-2 gap-6">

            {/* Degree */}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Degree
              </label>

              <input
                type="text"
                value={edu.degree}
                onChange={(e) =>
                  updateEducation(index, "degree", e.target.value)
                }
                placeholder="B.Tech / MBA / B.Sc"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
              />
            </div>

            {/* Institution */}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Institution
              </label>

              <input
                type="text"
                value={edu.institution}
                onChange={(e) =>
                  updateEducation(index, "institution", e.target.value)
                }
                placeholder="University / College name"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
              />
            </div>

            {/* Field */}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Field of Study
              </label>

              <input
                type="text"
                value={edu.field}
                onChange={(e) =>
                  updateEducation(index, "field", e.target.value)
                }
                placeholder="Computer Science"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
              />
            </div>

            {/* Grade */}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Grade / CGPA
              </label>

              <input
                type="text"
                value={edu.grade}
                onChange={(e) =>
                  updateEducation(index, "grade", e.target.value)
                }
                placeholder="8.5 CGPA"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
              />
            </div>

            {/* Start Year */}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Start Year
              </label>

              <input
                type="number"
                value={edu.startYear}
                onChange={(e) =>
                  updateEducation(index, "startYear", e.target.value)
                }
                placeholder="2018"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
              />
            </div>

            {/* End Year */}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                End Year
              </label>

              <input
                type="number"
                value={edu.endYear}
                onChange={(e) =>
                  updateEducation(index, "endYear", e.target.value)
                }
                placeholder="2022"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
              />
            </div>

          </div>

        </div>

      ))}

      {/* Add Education */}

      <button
        onClick={addEducation}
        className="flex items-center gap-2 text-blue-600 font-semibold"
      >
        <Plus className="w-4 h-4" />
        Add Another Education
      </button>

      {/* Navigation */}

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