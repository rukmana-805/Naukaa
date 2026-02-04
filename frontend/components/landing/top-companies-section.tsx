"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { COMPANY_CATEGORIES } from "@/constants/company-categories";

export default function TopCompaniesCarousel() {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;

    const scrollAmount = 400;
    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="py-16 px-4 sm:px-6 lg:px-16 bg-gray-50"
      id="companies"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Top Companies Hiring Now
          </h2>

          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>

            <button
              onClick={() => scroll("right")}
              className="p-2 rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {COMPANY_CATEGORIES.map((category, index) => (
            <div
              key={index}
              className="flex-none w-72 bg-white rounded-lg shadow-sm border border-gray-100 p-5 hover:shadow-md transition-all"
            >
              {/* Title */}
              <div className="mb-4">
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {category.tagline}
                </h3>
                <p className="text-sm text-gray-600">
                  {category.description}
                </p>
              </div>

              {/* Logos */}
              <div className="flex items-center justify-between gap-3 py-3 px-2 bg-gray-50 rounded-lg">
                {category.companies.map((company, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center w-12 h-12 bg-white rounded-lg hover:bg-gray-100 transition-colors cursor-pointer shadow-sm"
                    title={company.name}
                  >
                    <span className="text-2xl">{company.logo}</span>
                  </div>
                ))}
              </div>

              {/* Button */}
              <button className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                View All Compinies
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
