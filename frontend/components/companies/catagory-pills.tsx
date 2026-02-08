import { ChevronRight } from 'lucide-react';

const categories = [
  { name: 'MNCs', count: '2.2k+' },
  { name: 'Product', count: '1.2k+' },
  { name: 'Banking & Finance', count: '430' },
  { name: 'Hospitality', count: '109' },
  { name: 'Fintech', count: '138' },
  { name: 'Healthcare', count: '245' },
  { name: 'E-commerce', count: '567' },
];

export default function CategoryPills({
  activeCategory,
  setActiveCategory,
}: {
  activeCategory: string;
  setActiveCategory: (v: string) => void;
}) {
  return (
    <div className="mb-8 bg-amber-50 rounded-2xl shadow-sm p-6">
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((category) => {
          const isActive = category.name === activeCategory;

          return (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`shrink-0 px-6 py-4 rounded-xl border-2 transition-all ${
                isActive
                  ? 'bg-white border-blue-600 shadow-md'
                  : 'bg-gray-50 border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center justify-between gap-8">
                <div className="text-left">
                  <p className="font-bold text-gray-900">
                    {category.name}
                  </p>
                  <p className="text-sm text-blue-600 flex items-center gap-1">
                    {category.count} Companies
                    <ChevronRight className="w-4 h-4" />
                  </p>
                </div>

                {isActive && (
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
