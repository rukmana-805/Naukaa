import CTASection from "@/components/landing/cta-section";
import FeaturedCompaniesCarousel from "@/components/landing/featured-compinies";
import FeaturedJobs from "@/components/landing/featured-job";
import HeroSection from "@/components/landing/hero-section";
import ServicesSection from "@/components/landing/services-section";
import TopCompaniesCarousel from "@/components/landing/top-companies-section";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturedJobs />
      <TopCompaniesCarousel />
      <FeaturedCompaniesCarousel />
      <ServicesSection />
      <CTASection />
      <Footer />
    </div>
  );
}
