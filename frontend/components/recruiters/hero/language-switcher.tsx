"use client";
import { LANGUAGES } from "@/constants/recruiter-languages";
import { useState } from "react";
export default function LanguageSwitcher() {
  const [lang, setLang] = useState("EN");

  return (
    <div className="absolute top-0 right-0">
      <select
        value={lang}
        onChange={(e) => setLang(e.target.value)}
        className="bg-white/10 border border-white/30 text-white px-4 py-2 rounded-lg"
      >
        {LANGUAGES.map(l => (
          <option key={l} value={l}>{l}</option>
        ))}
      </select>
    </div>
  );
}