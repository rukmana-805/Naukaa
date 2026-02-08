import CompanyCard from "@/components/companies/company-card";

const companies = [
  {
    id: 1,
    name: 'Google',
    logo: '🔵',
    rating: 4.6,
    reviews: 2400,
    tags: ['Foreign MNC'],
    industry: 'Internet & Technology',
    location: 'Bangalore',
  },
  {
    id: 2,
    name: 'Microsoft',
    logo: '🟦',
    rating: 4.5,
    reviews: 1850,
    tags: ['Foreign MNC'],
    industry: 'Software & Services',
    location: 'Hyderabad',
  },
];

export default function CompaniesList() {
  return (
    <>
      <p className="text-gray-600 mb-6">
        Showing <span className="font-semibold">9394</span> companies
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {companies.map((c) => (
          <CompanyCard key={c.id} company={c} />
        ))}
      </div>
    </>
  );
}
