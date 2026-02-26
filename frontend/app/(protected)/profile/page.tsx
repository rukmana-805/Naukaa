"use client";

import AccomplishmentsSection from "@/components/profile/accomplishments-section";
import CareerProfileSection from "@/components/profile/career-profile-section";
import EducationSection from "@/components/profile/education-section";
import ITSkillsSection from "@/components/profile/it-skills-section";
import KeySkillsSection from "@/components/profile/key-skills-section";
import PersonalDetailsSection from "@/components/profile/personal-details-section";
import ProfileHeader from "@/components/profile/profile-header";
import ProfileSidebar from "@/components/profile/profile-sidebar";
import ProfileSummarySection from "@/components/profile/profile-summary-section";
import ProjectsSection from "@/components/profile/projects-section";
import ResumeHeadlineSection from "@/components/profile/resume-headline-section";
import ResumeSection from "@/components/profile/resume-section";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="px-16 py-8">
        <ProfileHeader />
      </div>
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          <ProfileSidebar />

          <div className="flex-1 space-y-6">
            <ResumeSection />
            <ResumeHeadlineSection />
            <KeySkillsSection />
            <EducationSection />
            <ITSkillsSection />
            <ProjectsSection />
            <ProfileSummarySection />
            <AccomplishmentsSection />
            <CareerProfileSection />
            <PersonalDetailsSection />
          </div>
        </div>
      </div>
    </div>
  );
}