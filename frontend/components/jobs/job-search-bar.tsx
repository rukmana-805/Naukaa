"use client";

import { Search, MapPin } from "lucide-react";

type Props = {
  searchFilters: {
    keyword: string;
    city: string;
  };
  setSearchFilters: any;
};

export default function JobsSearch({
  searchFilters,
  setSearchFilters,
}: Props) {
  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-4">
          <div className="flex-1 flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Job title, keywords, or company"
                value={searchFilters.keyword}
                onChange={(e) =>
                  setSearchFilters({
                    ...searchFilters,
                    keyword: e.target.value,
                  })
                }
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="flex-1 relative">
              <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="City or location"
                value={searchFilters.city}
                onChange={(e) =>
                  setSearchFilters({
                    ...searchFilters,
                    city: e.target.value,
                  })
                }
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <button className="px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-md whitespace-nowrap">
            Find Jobs
          </button>
        </div>
      </div>
    </div>
  );
}
