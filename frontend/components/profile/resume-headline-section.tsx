"use client";
import { FileText, Edit2 } from "lucide-react";

export default function ResumeHeadlineSection() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <FileText className="w-6 h-6 text-blue-600" />
          Resume Headline
        </h2>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <Edit2 className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <p className="text-gray-700 leading-relaxed">
        Passionate Frontend Developer | React.js Specialist | Building Modern Web Applications
      </p>
    </div>
  );
}