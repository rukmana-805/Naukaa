'use client';

import Pagination from '@/components/common/pagination';
import CategoryPills from '@/components/companies/catagory-pills';
import CompaniesList from '@/components/companies/companies-list';
import FiltersSidebar from '@/components/companies/filters-sidebar';
import { useState } from 'react';

export default function CompaniesPage() {
  const [activeCategory, setActiveCategory] = useState('MNCs');

  const [filters, setFilters] = useState({
    companyType: [],
    location: [],
    industry: [],
    experience: [],
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* TITLE (EXACT SAME STYLE) */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          {activeCategory} actively hiring
        </h1>

        {/* CATEGORY PILLS */}
        <CategoryPills
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        <div className="flex gap-8">
          <FiltersSidebar filters={filters} setFilters={setFilters} />

          <div className="flex-1">
            <CompaniesList />
            <div className="mt-8">
              <Pagination />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
