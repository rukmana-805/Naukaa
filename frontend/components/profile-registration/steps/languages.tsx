"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Plus, X } from "lucide-react";

export default function LanguagesStep({
  next,
  prev,
  updateFormData,
  data,
}: any) {

  const [languages, setLanguages] = useState<any[]>(data || []);
  const [languageName, setLanguageName] = useState("");
  const [proficiency, setProficiency] = useState({
    read: false,
    write: false,
    speak: false,
  });

  const addLanguage = () => {

    if (!languageName.trim()) return;

    const newLang = {
      name: languageName,
      proficiency,
    };

    setLanguages([...languages, newLang]);

    setLanguageName("");

    setProficiency({
      read: false,
      write: false,
      speak: false,
    });
  };

  const removeLanguage = (index: number) => {
    const updated = languages.filter((_: any, i: number) => i !== index);
    setLanguages(updated);
  };

  const toggleSkill = (type: string) => {
    setProficiency({
      ...proficiency,
      [type]: !proficiency[type as keyof typeof proficiency],
    });
  };

  const handleSave = () => {
    updateFormData("languages", languages);
    next();
  };

  return (
    <div className="space-y-8">

      <div>
        <h2 className="text-3xl font-bold mb-2">Languages</h2>
        <span className="text-gray-500 font-light">Languages you know</span>
      </div>

      {/* ADD LANGUAGE */}

      <div>

        <label className="block text-sm font-medium text-gray-700 mb-2">
          Language
        </label>

        <input
          type="text"
          value={languageName}
          onChange={(e) => setLanguageName(e.target.value)}
          placeholder="Hindi / English"
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl mb-4"
        />

        {/* PROFICIENCY */}

        <div className="flex gap-4 mb-4">

          {["read", "write", "speak"].map((skill) => (

            <button
              key={skill}
              onClick={() => toggleSkill(skill)}
              className={`px-4 py-2 border rounded-lg capitalize ${
                proficiency[skill as keyof typeof proficiency]
                  ? "bg-blue-600 text-white border-blue-600"
                  : "border-gray-200"
              }`}
            >
              {skill}
            </button>

          ))}

        </div>

        <button
          onClick={addLanguage}
          className="px-4 py-3 bg-blue-600 text-white rounded-xl flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add Language
        </button>

      </div>

      {/* LIST */}

      <div className="space-y-3">

        {languages.map((lang, index) => (

          <div
            key={index}
            className="flex justify-between items-center border-2 border-gray-200 rounded-xl p-4"
          >

            <div>

              <p className="font-semibold text-gray-900">
                {lang.name}
              </p>

              <p className="text-sm text-gray-600">

                {Object.entries(lang.proficiency)
                  .filter(([_, val]) => val)
                  .map(([key]) => key)
                  .join(", ")}

              </p>

            </div>

            <button
              onClick={() => removeLanguage(index)}
              className="text-red-500"
            >
              <X className="w-4 h-4" />
            </button>

          </div>

        ))}

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