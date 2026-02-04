import { Briefcase, Users, TrendingUp } from "lucide-react";
import { SERVICES } from "@/constants/services";

const ICONS = {
  briefcase: Briefcase,
  users: Users,
  trendingUp: TrendingUp,
};

export default function ServicesSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white" id="services">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
          Our Services
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const Icon = ICONS[service.icon as keyof typeof ICONS];

            return (
              <div
                key={service.id}
                className="bg-white rounded-xl border border-slate-100 p-8 text-center shadow-sm"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>

                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-slate-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
