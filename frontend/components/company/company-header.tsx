"use client";

import { useState } from "react";
import { Star } from "lucide-react";

type CompanyHeaderProps = {
  company: {
    name: string;
    tagline: string;
    logo: string;
    coverImage: string;
    followers: string;
    tags: string[];
    rating: number;
    reviews: string;
  };
};

export default function CompanyHeader({ company }: CompanyHeaderProps) {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <>
      {/* Cover Image */}
      <div
        className="h-80 relative"
        style={{ background: company.coverImage }}
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Header Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Logo */}
        <div className="absolute -top-20 left-4">
          <div className="w-40 h-40 bg-white rounded-2xl shadow-xl flex items-center justify-center border-4 border-white">
            <span className="text-7xl">{company.logo}</span>
          </div>
        </div>

        {/* Company Info */}
        <div className="pt-24 pb-8">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-900 mb-3">
                {company.name}
              </h1>

              <p className="text-xl text-gray-600 mb-4">
                {company.tagline}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {company.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-lg w-fit">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold text-gray-900">
                  {company.rating}
                </span>
                <span className="text-gray-600">
                  ({company.reviews} reviews)
                </span>
              </div>
            </div>

            {/* Follow Button */}
            <div className="flex flex-col items-end gap-2">
              <button
                onClick={() => setIsFollowing(!isFollowing)}
                className={`px-8 py-3 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg ${
                  isFollowing
                    ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                {isFollowing ? "Following" : "+ Follow"}
              </button>

              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">
                  {company.followers}
                </span>{" "}
                followers
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
