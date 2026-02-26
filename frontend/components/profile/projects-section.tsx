"use client";
import { Briefcase, Plus, Edit2, ExternalLink } from "lucide-react";

export default function ProjectsSection() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <Briefcase className="w-6 h-6 text-blue-600" />
          Projects
        </h2>
        <button className="flex items-center gap-2 px-4 py-2 text-blue-600 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          <Plus className="w-5 h-5" />
          Add Project
        </button>
      </div>

      <div className="border border-gray-200 rounded-lg p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">
              E-commerce Platform
            </h3>
            <p className="text-gray-600">
              Full Stack Developer | Jan 2025 - Dec 2025
            </p>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Edit2 className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        <p className="text-gray-700 mb-4">
          Built a full-featured e-commerce platform with React, Node.js, and MongoDB.
        </p>

        <div className="flex flex-wrap gap-2 mb-3">
          {["React","Node.js","MongoDB","Stripe"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href="#"
          className="text-blue-600 hover:text-blue-700 flex items-center gap-1 text-sm"
        >
          View Project <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}