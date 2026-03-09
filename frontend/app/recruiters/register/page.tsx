import RecruiterLogoHeader from "@/components/layout/recruiter-logo-header";
import RecruiterRegisterForm from "@/components/recruiters/register/recruiter-register-form";
import RecruiterRegisterHero from "@/components/recruiters/register/recruiter-register-hero";
export default function RecruiterRegistrationPage() {
  return (
    <div className="min-h-screen bg-[#f5f7fa]">
      
      <RecruiterLogoHeader/>

      <div className="max-w-7xl mx-auto px-8 py-16 grid md:grid-cols-2 gap-16 items-center">
        
        <RecruiterRegisterHero />
        <RecruiterRegisterForm />

      </div>
    </div>
  );
}