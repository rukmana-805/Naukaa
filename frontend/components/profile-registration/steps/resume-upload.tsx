"use client";

import { useState } from "react";
import { ChevronLeft, Upload, FileText, X } from "lucide-react";

export default function ResumeUploadStep({
  prev,
  updateFormData,
  submitProfile,
  data,
}: any) {

  const [resume, setResume] = useState<File | null>(data || null);

  const handleFile = (file: File) => {
    setResume(file);
  };

  const removeFile = () => {
    setResume(null);
  };

  const handleSubmit = () => {
    updateFormData("resume", resume);
    submitProfile();
  };

  return (
    <div className="space-y-8">

      <div>
        <h2 className="text-3xl font-bold mb-2">Upload Resume</h2>
        <span className="text-gray-500 font-light">Upload your resume</span>
      </div>

      {/* TITLE */}

      {/* <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">
          Upload Resume
        </h2>

        <p className="text-sm text-gray-600">
          Upload your resume so recruiters can easily view your experience.
        </p> */}
      {/* </div> */}

      {/* UPLOAD AREA */}

      {!resume && (

        <div
          className="border-2 border-dashed border-gray-300 rounded-xl p-10 text-center cursor-pointer hover:border-blue-500 transition"
        >

          <input
            type="file"
            accept=".pdf,.doc,.docx"
            className="hidden"
            id="resumeUpload"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleFile(file);
            }}
          />

          <label htmlFor="resumeUpload" className="cursor-pointer">

            <Upload className="w-10 h-10 text-gray-400 mx-auto mb-4" />

            <p className="text-gray-700 font-medium">
              Click to upload your resume
            </p>

            <p className="text-sm text-gray-500 mt-2">
              Supported formats: PDF, DOC, DOCX
            </p>

          </label>

        </div>

      )}

      {/* FILE PREVIEW */}

      {resume && (

        <div className="flex items-center justify-between border-2 border-gray-200 rounded-xl p-4">

          <div className="flex items-center gap-3">

            <FileText className="w-6 h-6 text-blue-600" />

            <div>
              <p className="font-semibold text-gray-900">
                {resume.name}
              </p>

              <p className="text-sm text-gray-500">
                {(resume.size / 1024).toFixed(1)} KB
              </p>
            </div>

          </div>

          <button
            onClick={removeFile}
            className="text-red-500 hover:text-red-700"
          >
            <X className="w-5 h-5" />
          </button>

        </div>

      )}

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
          onClick={handleSubmit}
          className="px-8 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition"
        >
          Complete Profile
        </button>

      </div>

    </div>
  );
}