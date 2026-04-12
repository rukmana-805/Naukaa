"use client";

import {
  User,
  Briefcase,
  Target,
  GraduationCap,
  Award,
  Layers,
  MapPin,
  Languages,
  FileText,
  Upload,
  Check,
} from "lucide-react";

const icons = [
  User,
  Briefcase,
  Target,
  GraduationCap,
  Award,
  Layers,
  MapPin,
  Languages,
  FileText,
  Upload,
];

type Props = {
  steps: string[];
  currentStep: number;
};

export default function ProfileStepper({ steps, currentStep }: Props) {

  return (

    <div className="w-full overflow-x-auto pb-4">

      <div className="flex items-center min-w-[1100px]">

        {steps.map((step, index) => {

          const Icon = icons[index];

          const completed = index < currentStep;
          const active = index === currentStep;

          return (

            <div key={index} className="flex items-center">

              <div className="flex flex-col items-center text-center w-[120px]">

                {/* ICON CIRCLE */}

                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center transition
                  
                  ${
                    completed
                      ? "bg-green-500 text-white"
                      : active
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-500"
                  }
                  
                  `}
                >

                  {completed ? (
                    <Check className="w-6 h-6" />
                  ) : (
                    <Icon className="w-6 h-6" />
                  )}

                </div>

                {/* STEP LABEL */}

                <p
                  className={`mt-2 text-sm font-medium ${
                    active ? "text-blue-600" : "text-gray-700"
                  }`}
                >
                  {step}
                </p>

              </div>

              {/* CONNECTOR LINE */}

              {index !== steps.length - 1 && (
                <div className="w-16 h-[2px] bg-gray-300 mx-2" />
              )}

            </div>

          );
        })}

      </div>

    </div>
  );
}