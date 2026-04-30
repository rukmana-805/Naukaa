"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Plus, X } from "lucide-react";

export default function SkillsStep({
  next,
  prev,
  updateFormData,
  data,
}: any) {

  const [skills, setSkills] = useState(
    data || {
      keySkills: [],
      itSkills: [],
    }
  );

  const [newSkill, setNewSkill] = useState("");
  const [itSkill, setItSkill] = useState({
    name: "",
    experience: "",
    version: "",
  });

  const addKeySkill = () => {
    if (!newSkill.trim()) return;

    setSkills({
      ...skills,
      keySkills: [...skills.keySkills, newSkill],
    });

    setNewSkill("");
  };

  const removeKeySkill = (skill: string) => {
    setSkills({
      ...skills,
      keySkills: skills.keySkills.filter((s: string) => s !== skill),
    });
  };

  const addITSkill = () => {
    if (!itSkill.name) return;

    setSkills({
      ...skills,
      itSkills: [...skills.itSkills, itSkill],
    });

    setItSkill({
      name: "",
      experience: "",
      version: "",
    });
  };

  const removeITSkill = (index: number) => {
    const updated = skills.itSkills.filter((_: any, i: number) => i !== index);

    setSkills({
      ...skills,
      itSkills: updated,
    });
  };

  const handleSave = () => {
    updateFormData("skills", skills);
    next();
  };

  return (
    <div className="space-y-8">

      <div>
        <h2 className="text-3xl font-bold mb-2">Skills</h2>
        <span className="text-gray-500 font-light">Your technical and soft skills</span>
      </div>

      {/* KEY SKILLS */}

      <div>

        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Key Skills
        </h3>

        <div className="flex gap-2 mb-4">

          <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            placeholder="Add a skill (React, Java, Python...)"
            className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl"
          />

          <button
            onClick={addKeySkill}
            className="px-4 py-3 bg-blue-600 text-white rounded-xl flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add
          </button>

        </div>

        <div className="flex flex-wrap gap-2">

          {skills.keySkills.map((skill: string, i: number) => (

            <span
              key={i}
              className="flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
            >

              {skill}

              <button onClick={() => removeKeySkill(skill)}>
                <X className="w-3 h-3" />
              </button>

            </span>

          ))}

        </div>

      </div>

      {/* IT SKILLS */}

      <div>

        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          IT Skills
        </h3>

        <div className="grid grid-cols-3 gap-4 mb-4">

          <input
            type="text"
            value={itSkill.name}
            onChange={(e) =>
              setItSkill({ ...itSkill, name: e.target.value })
            }
            placeholder="Skill name"
            className="px-4 py-3 border-2 border-gray-200 rounded-xl"
          />

          <input
            type="text"
            value={itSkill.experience}
            onChange={(e) =>
              setItSkill({ ...itSkill, experience: e.target.value })
            }
            placeholder="Experience"
            className="px-4 py-3 border-2 border-gray-200 rounded-xl"
          />

          <input
            type="text"
            value={itSkill.version}
            onChange={(e) =>
              setItSkill({ ...itSkill, version: e.target.value })
            }
            placeholder="Version / tool"
            className="px-4 py-3 border-2 border-gray-200 rounded-xl"
          />

        </div>

        <button
          onClick={addITSkill}
          className="px-4 py-3 bg-blue-600 text-white rounded-xl flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add IT Skill
        </button>

        <div className="space-y-3 mt-6">

          {skills.itSkills.map((skill: any, index: number) => (

            <div
              key={index}
              className="flex justify-between items-center border-2 border-gray-200 rounded-xl p-4"
            >

              <div>
                <p className="font-semibold text-gray-900">
                  {skill.name}
                </p>

                <p className="text-sm text-gray-600">
                  {skill.experience} experience
                </p>

                <p className="text-sm text-gray-500">
                  Version: {skill.version}
                </p>
              </div>

              <button
                onClick={() => removeITSkill(index)}
                className="text-red-500"
              >
                <X className="w-4 h-4" />
              </button>

            </div>

          ))}

        </div>

      </div>

      {/* NAVIGATION */}

      <div className="flex justify-between pt-6">

        <button
          onClick={prev}
          className="px-6 py-3 border-2 border-gray-200 rounded-xl flex items-center gap-2"
        >
          <ChevronLeft className="w-5 h-5" />
          Previous
        </button>

        <button
          onClick={handleSave}
          className="px-8 py-3 bg-blue-600 text-white rounded-xl flex items-center gap-2"
        >
          Save & Continue
          <ChevronRight className="w-5 h-5" />
        </button>

      </div>

    </div>
  );
}