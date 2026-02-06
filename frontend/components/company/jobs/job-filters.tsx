"use client";

import { Filter } from "lucide-react";

type Filters = {
  department: string;
  location: string;
  experience: string;
};

type JobFiltersProps = {
  filters: Filters;
  departments: string[];
  locations: string[];
  experiences: string[];
  onChange: (filters: Filters) => void;
};

export default function JobFilters({
  filters,
  departments,
  locations,
  experiences,
  onChange,
}: JobFiltersProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="w-5 h-5 text-gray-600" />
        <h3 className="text-lg font-semibold text-gray-900">Filter Jobs</h3>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {/* Department */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Department
          </label>
          <select
            value={filters.department}
            onChange={(e) =>
              onChange({ ...filters, department: e.target.value })
            }
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Departments</option>
            {departments.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Location
          </label>
          <select
            value={filters.location}
            onChange={(e) =>
              onChange({ ...filters, location: e.target.value })
            }
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Locations</option>
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        {/* Experience */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Experience
          </label>
          <select
            value={filters.experience}
            onChange={(e) =>
              onChange({ ...filters, experience: e.target.value })
            }
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Levels</option>
            {experiences.map((exp) => (
              <option key={exp} value={exp}>
                {exp}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
