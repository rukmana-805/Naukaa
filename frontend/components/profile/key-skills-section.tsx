"use client";
import { Award, Edit2 } from "lucide-react";

export default function KeySkillsSection() {
  const skills = [
    "React.js","JavaScript","TypeScript","Node.js",
    "HTML/CSS","Tailwind CSS","Git","REST APIs",
    "MongoDB","Express.js","Redux","Next.js"
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <Award className="w-6 h-6 text-blue-600" />
          Key Skills
        </h2>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <Edit2 className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-medium border border-blue-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}