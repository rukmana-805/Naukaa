import {
  Calendar,
  Users,
  MapPin,
  DollarSign,
  Globe,
  Building2,
  Award,
  TrendingUp,
} from "lucide-react";

export default function CompanyOverview({ company }: { company: any }) {
  const { overview } = company;

  return (
    <div className="space-y-8 my-16">
      {/* About */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          About the Company
        </h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          {overview.about}
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <Stat icon={Calendar} label="Founded" value={overview.founded} />
        <Stat icon={Users} label="Employees" value={overview.employees} />
        <Stat
          icon={MapPin}
          label="Headquarters"
          value={overview.headquarters.split(",")[0]}
        />
        <Stat icon={DollarSign} label="Revenue" value={overview.revenue} />
        <Stat icon={Globe} label="Global Offices" value={overview.offices} />
        <Stat icon={Building2} label="Website" value="Visit" link />
      </div>

      {/* Culture */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <Award className="w-7 h-7 text-blue-600" />
          Company Culture
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {overview.culture.map((item: string) => (
            <div
              key={item}
              className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg"
            >
              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-0.5">
                <svg
                  className="w-3 h-3 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  />
                </svg>
              </div>
              <p className="text-gray-700 font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Perks */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <TrendingUp className="w-7 h-7 text-blue-600" />
          Perks & Benefits
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {overview.perks.map((perk: string) => (
            <div
              key={perk}
              className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-lg p-4 text-center border border-blue-100"
            >
              <p className="text-gray-800 font-medium text-sm">{perk}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Stat({
  icon: Icon,
  label,
  value,
  link,
}: {
  icon: any;
  label: string;
  value: string;
  link?: boolean;
}) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
      <Icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
      <p className="text-sm text-gray-600 mb-1">{label}</p>
      {link ? (
        <a className="text-sm font-bold text-blue-600 hover:text-blue-700">
          {value}
        </a>
      ) : (
        <p className="text-lg font-bold text-gray-900">{value}</p>
      )}
    </div>
  );
}
