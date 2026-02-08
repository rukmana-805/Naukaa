import { Star, MapPin, Building2, ChevronRight } from 'lucide-react';

export default function CompanyCard({ company }: any) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all cursor-pointer group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-linear-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center text-3xl">
            {company.logo}
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600">
              {company.name}
            </h3>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold text-gray-900">
                {company.rating}
              </span>
              <span className="text-gray-500 text-sm">
                {company.reviews}+ reviews
              </span>
            </div>
          </div>
        </div>
        <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-blue-600" />
      </div>

      <div className="flex flex-wrap gap-2 mb-3">
        {company.tags.map((tag: string, i: number) => (
          <span
            key={i}
            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="space-y-2 text-sm text-gray-600">
        <p className="flex items-center gap-2">
          <Building2 className="w-4 h-4" />
          {company.industry}
        </p>
        <p className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          {company.location}
        </p>
      </div>
    </div>
  );
}
