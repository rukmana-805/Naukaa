"use client";
import { useState } from "react";
import CountryCodeDropdown from "./country-code-dropdown";
type Props = {
  onSuccess: (mobile: string) => void;
};
export default function RecruiterRegisterForm({ onSuccess }: Props) {

  const [countryCode,setCountryCode] = useState("+91");
  const [mobileNumber,setMobileNumber] = useState("");
  const [terms,setTerms] = useState(true);

  const handleSubmit = (e:React.FormEvent)=>{
    e.preventDefault();

    if(!mobileNumber){
      alert("Enter mobile number");
      return;
    }
    onSuccess(mobileNumber);
    console.log({countryCode,mobileNumber});
  }

  return (
    <div className="flex justify-end">

      <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-[500px] border border-gray-100">

        <h2 className="text-2xl font-bold mb-6">
          Continue with mobile
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">

          <CountryCodeDropdown
            countryCode={countryCode}
            setCountryCode={setCountryCode}
            mobileNumber={mobileNumber}
            setMobileNumber={setMobileNumber}
          />

          <div className="flex items-start gap-3">

            <input
              type="checkbox"
              checked={terms}
              onChange={(e)=>setTerms(e.target.checked)}
              className="w-5 h-5"
            />

            <p className="text-sm text-gray-700">
              I agree to the Privacy Policy and Terms & Conditions
            </p>

          </div>

          <button
            type="submit"
            className="w-full py-4 bg-blue-600 text-white rounded-lg font-bold"
          >
            Send OTP
          </button>

        </form>

      </div>

    </div>
  );
}