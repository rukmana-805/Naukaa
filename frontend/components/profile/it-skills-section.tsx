"use client";
import { Code, Plus, Edit2 } from "lucide-react";

export default function ITSkillsSection() {
  const skills = [
    { name: "React.js", version: "v18", lastUsed: "2026", exp: "2 years" },
    { name: "JavaScript", version: "ES6+", lastUsed: "2026", exp: "3 years" },
    { name: "Node.js", version: "v18", lastUsed: "2026", exp: "2 years" },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <Code className="w-6 h-6 text-blue-600" />
          IT Skills
        </h2>
        <button className="flex items-center gap-2 px-4 py-2 text-blue-600 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          <Plus className="w-5 h-5" />
          Add Skill
        </button>
      </div>

      <div className="space-y-4">
        {skills.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
          >
            <div>
              <p className="font-semibold text-gray-900">
                {item.name}
              </p>
              <p className="text-sm text-gray-600">
                Version: {item.version} | Last Used: {item.lastUsed}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">
                {item.exp}
              </span>
              <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                <Edit2 className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}