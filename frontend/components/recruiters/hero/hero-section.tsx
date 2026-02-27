import Image from "next/image";
import LanguageSwitcher from "@/components/recruiters/hero/language-switcher";
export default function HeroSection() {
  return (
    <div className="text-white space-y-6 relative">
      <LanguageSwitcher />

      <p className="text-sm font-semibold tracking-wide">
        NAUKAA FOR EMPLOYERS
      </p>

      <h1 className="text-5xl font-bold">
        Let's hire your next great candidate. Fast.
      </h1>

      <p className="text-xl text-white/90">
        No matter the skills, experience or qualifications you're looking for.
      </p>

      <div className="h-64 bg-white/10 rounded-lg flex items-center justify-center">
         <Image
            src="/cherry.png"
            width={200}
            height={100}
            alt="Logo"
          />
      </div>
    </div>
  );
}