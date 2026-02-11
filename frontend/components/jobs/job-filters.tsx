"use client";

import { ChevronDown, ChevronUp } from "lucide-react";

type Props = {
  filters: any;
  setFilters: any;
  expandedSections: any;
  toggleSection: any;
  filterOptions: any;
};

export default function JobFilters({
  filters,
  setFilters,
  expandedSections,
  toggleSection,
  filterOptions,
}: Props) {
  const handleFilterChange = (category: string, value: string) => {
    setFilters((prev: any) => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter((item: string) => item !== value)
        : [...prev[category], value],
    }));
  };

  return (
    <div className="w-72 shrink-0">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 sticky top-28">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Filters</h2>
        </div>

        <div className="max-h-[calc(100vh-220px)] overflow-y-auto">
          {Object.entries(filterOptions).map(([key, options]: any) => (
            <div key={key} className="border-b border-gray-200">
              <button
                onClick={() => toggleSection(key)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50"
              >
                <span className="font-semibold text-gray-900 capitalize">
                  {key}
                </span>
                {expandedSections[key] ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>

              {expandedSections[key] && (
                <div className="px-6 pb-4 space-y-3">
                  {options.map((option: any, index: number) => (
                    <label
                      key={index}
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={filters[key].includes(option.label)}
                        onChange={() =>
                          handleFilterChange(key, option.label)
                        }
                        className="w-5 h-5 text-blue-600 border-2 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                      />
                      <span className="text-gray-700 flex-1">
                        {option.label}
                      </span>
                      <span className="text-gray-400 text-sm">
                        ({option.count})
                      </span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
