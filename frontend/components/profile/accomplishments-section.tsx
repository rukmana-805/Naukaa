"use client";

import { Award, Plus, Edit2, ExternalLink } from "lucide-react";

export default function AccomplishmentsSection() {
  return (
    <div
      id="accomplishments"
      className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <Award className="w-6 h-6 text-blue-600" />
          Accomplishments
        </h2>
      </div>

      {/* Online Profiles */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">
            Online Profiles
          </h3>
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1">
            <Plus className="w-4 h-4" />
            Add
          </button>
        </div>

        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg mb-2">
          <div className="flex items-center gap-3">
            <ExternalLink className="w-5 h-5 text-blue-600" />
            <div>
              <p className="font-medium text-gray-900">LinkedIn</p>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                linkedin.com/in/rukmanabehera
              </a>
            </div>
          </div>
          <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
            <Edit2 className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Certifications */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">
            Certification
          </h3>
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1">
            <Plus className="w-4 h-4" />
            Add
          </button>
        </div>

        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div>
            <p className="font-medium text-gray-900">
              React Developer Certification
            </p>
            <p className="text-sm text-gray-600">
              Meta • 2025
            </p>
          </div>
          <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
            <Edit2 className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
}