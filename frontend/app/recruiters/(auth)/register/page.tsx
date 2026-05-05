// 'use client';
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import RecruiterLogoHeader from "@/components/layout/recruiter-logo-header";
// import RecruiterRegisterHero from "@/components/recruiters/register/recruiter-register-hero";
// import RecruiterRegisterForm from "@/components/recruiters/register/recruiter-register-form";
// import OTPVerificationForm from "@/components/recruiters/register/otp-verification-form";

// export default function RecruiterRegistrationPage() {
//   const [step, setStep] = useState<'form' | 'otp'>('form');
//   const [phone, setPhone] = useState('');
//   const router = useRouter();

//   return (
//     <div className="min-h-screen bg-[#f5f7fa]">
//       <RecruiterLogoHeader />

//       <div className="max-w-7xl mx-auto px-8 py-16 grid md:grid-cols-2 gap-16 items-center">
        
//         <RecruiterRegisterHero />
//         {step === 'form' ? (
//           <RecruiterRegisterForm
//             onSuccess={(mobile) => {
//               setPhone(mobile);
//               setStep('otp');
//             }}
//           />
//         ) : (
//           <OTPVerificationForm
//             phoneNumber={phone}
//             onBack={() => setStep('form')}
//             onVerifySuccess={() => router.push('/recruiter/dashboard')}
//           />
//         )}

//       </div>
//     </div>
//   );
// }
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import RecruiterRegisterForm from "@/components/recruiters/register/recruiter-register-form";
import OTPVerificationForm from "@/components/recruiters/register/otp-verification-form";
import RecruiterBasicDetails from "@/components/recruiters/register/recruiter-basic-details";
import RecruiterCompanyDetails from "@/components/recruiters/register/recruiter_company_details";
import RecruiterLogoHeader from "@/components/layout/recruiter-logo-header";
import RecruiterRegisterHero from "@/components/recruiters/register/recruiter-register-hero";

export default function Page() {
  const [step, setStep] = useState<"form" | "otp" | "basic" | "company">("form");
  const [phone, setPhone] = useState("");
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#f5f7fa]">
    {/* <div className="flex justify-center"> */}
      <RecruiterLogoHeader/>
      <div className="max-w-7xl mx-auto px-8 py-16 grid md:grid-cols-2 gap-16 items-center">
        <RecruiterRegisterHero/>
      {step === "form" && (
        <RecruiterRegisterForm
          onSuccess={(mobile) => {
            setPhone(mobile);
            setStep("otp");
          }}
        />
      )}

      {step === "otp" && (
        <OTPVerificationForm
          phoneNumber={phone}
          onBack={() => setStep("form")}
          onVerifySuccess={() => setStep("basic")}
        />
      )}

      {step === "basic" && (
        <RecruiterBasicDetails
          mobile={phone}
          onNext={() => setStep("company")}
        />
      )}
      {step === "company" && (
  <RecruiterCompanyDetails
    onFinish={() => {
      alert("🎉 Registration Complete");
    }}
            onVerifySuccess={() => router.push('/recruiter/dashboard')}
  />
)}
  </div>
    </div>
  );
}