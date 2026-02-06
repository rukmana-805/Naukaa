import { Star } from "lucide-react";
import { Company } from "@/types/company";

type CompanyCardProps = {
  company: Company;
};

export default function CompanyCard({ company }: CompanyCardProps) {
  return (
    <div className="flex-none w-80 bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-all">
      <div className="flex flex-col items-center text-center">

        {/* Logo */}
        <div className="w-20 h-20 bg-linear-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mb-4 shadow-sm">
          <span className="text-5xl">{company.logo}</span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1 bg-green-50 px-3 py-1 rounded-full">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-semibold text-gray-900">
              {company.rating}
            </span>
          </div>

          <span className="text-sm text-gray-500">|</span>

          <span className="text-sm text-gray-600">
            {company.reviews} reviews
          </span>
        </div>

        {/* Tagline */}
        <p className="text-gray-600 text-sm leading-relaxed mb-6 min-h-15">
          {company.tagline}
        </p>

        {/* CTA */}
        <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-medium shadow-sm hover:shadow-md">
          View Jobs
        </button>
      </div>
    </div>
  );
}
