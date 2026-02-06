import CompanyHeader from "@/components/company/company-header";
import CompanyTabs from "@/components/company/company-tabs";
import { getCompanyBySlug } from "@/lib/company";

type Props = {
  params: { slug: string };
};

export default async function CompanyPage({ params }: Props) {
  const company = await getCompanyBySlug(params.slug);

  return (
    <div className="min-h-screen bg-gray-50">
      <CompanyHeader company={company} />
      <CompanyTabs company={company} />
    </div>
  );
}
