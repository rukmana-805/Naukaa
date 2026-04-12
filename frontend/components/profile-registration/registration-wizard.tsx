"use client";

import { useState } from "react";
import PersonalDetailsStep from "./steps/personal-details";
import ProfessionalDetailsStep from "./steps/professional-details";
import WorkExperienceStep from "./steps/work-experience";
import EducationStep from "./steps/education";
import SkillsStep from "./steps/skills";
import CareerPreferencesStep from "./steps/career-preferences";
import PreferredLocationsStep from "./steps/preferred-locations";
import LanguagesStep from "./steps/languages";
import ProfileSummaryStep from "./steps/profile-summary";
import ResumeUploadStep from "./steps/resume-upload";
import ProfileStepper from "./profile-stepper";

export default function RegistrationWizard() {

  const [currentStep, setCurrentStep] = useState(0);

  const [formData, setFormData] = useState({
    personalDetails: {},
    professionalDetails: {},
    workExperience: [],
    education: [],
    skills: { keySkills: [], itSkills: [] },
    careerPreferences: {},
    preferredLocations: [],
    languages: [],
    profileSummary: "",
    resume: null,
  });

  const steps = [
  "Personal Details",
  "Professional Details",
  "Work Experience",
  "Education",
  "Skills",
  "Career Preferences",
  "Preferred Locations",
  "Languages",
  "Profile Summary",
  "Resume Upload",
];

  const next = () => {
    setCurrentStep((prev) => prev + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const prev = () => {
    setCurrentStep((prev) => prev - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const updateFormData = (section: any, data: any) => {
    setFormData((prev) => ({
      ...prev,
      [section]: data,
    }));
  };

  const submitProfile = () => {
    console.log("FINAL DATA", formData);
  };

  const renderStep = () => {

    switch (currentStep) {

      case 0:
        return (
          <PersonalDetailsStep
            next={next}
            updateFormData={updateFormData}
            data={formData.personalDetails}
          />
        );

      case 1:
        return (
          <ProfessionalDetailsStep
            next={next}
            prev={prev}
            updateFormData={updateFormData}
            data={formData.professionalDetails}
          />
        );

      case 2:
        return (
          <WorkExperienceStep
            next={next}
            prev={prev}
            updateFormData={updateFormData}
            data={formData.workExperience}
          />
        );

      case 3:
        return (
          <EducationStep
            next={next}
            prev={prev}
            updateFormData={updateFormData}
            data={formData.education}
          />
        );

      case 4:
        return (
          <SkillsStep
            next={next}
            prev={prev}
            updateFormData={updateFormData}
            data={formData.skills}
          />
        );

      case 5:
        return (
          <CareerPreferencesStep
            next={next}
            prev={prev}
            updateFormData={updateFormData}
            data={formData.careerPreferences}
          />
        );

      case 6:
        return (
          <PreferredLocationsStep
            next={next}
            prev={prev}
            updateFormData={updateFormData}
            data={formData.preferredLocations}
          />
        );

      case 7:
        return (
          <LanguagesStep
            next={next}
            prev={prev}
            updateFormData={updateFormData}
            data={formData.languages}
          />
        );

      case 8:
        return (
          <ProfileSummaryStep
            next={next}
            prev={prev}
            updateFormData={updateFormData}
            data={formData.profileSummary}
          />
        );

      case 9:
        return (
          <ResumeUploadStep
            prev={prev}
            updateFormData={updateFormData}
            submitProfile={submitProfile}
            data={formData.resume}
          />
        );

    }

  };

  return (

    <div className="min-h-screen bg-gray-50 py-10">

      <div className="max-w-7xl mx-auto px-4">

        {/* STEPPER */}

        <ProfileStepper
          steps={steps}
          currentStep={currentStep}
        />

        {/* FORM CARD */}

        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-8 mt-8">

          {renderStep()}

        </div>

      </div>

    </div>

  );
}