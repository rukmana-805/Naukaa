"use client";
import { GraduationCap, Plus, Edit2 } from "lucide-react";

export default function EducationSection() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <GraduationCap className="w-6 h-6 text-blue-600" />
          Education
        </h2>
        <button className="flex items-center gap-2 px-4 py-2 text-blue-600 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          <Plus className="w-5 h-5" />
          Add Education
        </button>
      </div>

      <div className="border-l-4 border-blue-600 pl-6 py-4 relative">
        <button className="absolute top-4 right-0 p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <Edit2 className="w-4 h-4 text-gray-600" />
        </button>
        <h3 className="text-lg font-bold text-gray-900 mb-1">
          Bachelor of Technology
        </h3>
        <p className="text-gray-700 font-medium mb-1">
          Computer Science Engineering
        </p>
        <p className="text-gray-600">
          ABC Institute of Technology
        </p>
        <p className="text-gray-600">
          University of Technology
        </p>
        <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
          <span>2022 - 2026</span>
          <span>•</span>
          <span>8.5 CGPA</span>
        </div>
      </div>
    </div>
  );
}