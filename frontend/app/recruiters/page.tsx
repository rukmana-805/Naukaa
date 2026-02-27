import RecruiterNavbar from "@/components/layout/recruiter-navbar";
import AuthCard from "@/components/recruiters/auth/auth-card";
import RecruiterCTA from "@/components/recruiters/cta/recruiter-cta";
import HeroSection from "@/components/recruiters/hero/hero-section";

export default function RecruiterLandingPage() {

  const labels = [
  {
    label: "Post a job",
    description: "Get started with a job post. Indeed has 1.54 crore unique monthly users.​"
  },
  {
    label: "Find quality applicants",
    description: "Customise your post with screening tools to help narrow down to potential candidates."
  },
  {
    label: "Make connections",
    description: "Track, message, invite and interview directly on Indeed with no extra apps to download."
  },
  {
    label: "Hire confidently",
    description: "You’ re not alone on your hiring journey. We have helpful resources for every step of the hiring process."
  }
];

  return (
    <>
      <RecruiterNavbar />
      <div className="relative bg-linear-to-br from-[#2164e8] to-[#1557d6]">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <HeroSection />
          <div className="w-full max-w-md mx-auto md:mx-0">
            <AuthCard />
          </div>
        </div>

        {/* Wave */}
        <svg
          className="absolute bottom-0 w-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64 C360,10 720,10 1080,64 C1260,90 1350,90 1440,64 L1440,120 L0,120 Z"
            fill="white"
          />
        </svg>
      </div>

      <RecruiterCTA />
      <div className="bg-white">

  <div className="flex flex-col justify-center items-center py-16 px-4 text-center">
    <h1 className="text-3xl md:text-5xl font-light text-gray-800 mb-6 leading-tight">
      Manage your hiring from start to finish
    </h1>
    <div className="h-[3px] w-[120px] bg-blue-500 rounded-full"></div>
  </div>

  <div className="max-w-7xl mx-auto px-6 pb-16">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {labels.map((item, index) => (
        <div
          key={index}
          className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition"
        >
          <h3 className="text-lg font-semibold mb-3">
            {item.label}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  </div>

</div>
    </>
  );
}