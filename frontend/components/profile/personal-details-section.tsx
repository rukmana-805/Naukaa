"use client";

import { UserCircle, Edit2 } from "lucide-react";

export default function PersonalDetailsSection() {
  return (
    <div
      id="personal-details"
      className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <UserCircle className="w-6 h-6 text-blue-600" />
          Personal Details
        </h2>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <Edit2 className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <p className="text-sm text-gray-600 mb-1">Gender</p>
          <p className="font-semibold text-gray-900">Male</p>
        </div>

        <div>
          <p className="text-sm text-gray-600 mb-1">Marital Status</p>
          <p className="font-semibold text-gray-900">Single</p>
        </div>

        <div>
          <p className="text-sm text-gray-600 mb-1">Date of Birth</p>
          <p className="font-semibold text-gray-900">
            15 March 2000
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-600 mb-1">Category</p>
          <p className="font-semibold text-gray-900">General</p>
        </div>

        <div className="col-span-2">
          <p className="text-sm text-gray-600 mb-1">
            Permanent Address
          </p>
          <p className="font-semibold text-gray-900">
            Varanasi, Uttar Pradesh, India
          </p>
        </div>
      </div>

      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Languages Known
      </h3>

      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
        <p className="font-medium text-gray-900">English</p>
        <div className="flex items-center gap-6 text-sm text-gray-700">
          <span>Read</span>
          <span>Write</span>
          <span>Speak</span>
        </div>
      </div>
    </div>
  );
}