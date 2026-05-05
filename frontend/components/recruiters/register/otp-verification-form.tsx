'use client';

import { useState, useRef } from "react";

export default function OTPVerificationForm({
  phoneNumber,
  onVerifySuccess,
  onBack
}: any) {

  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (i: number, val: string) => {
    if (!/^\d*$/.test(val)) return;

    const newOtp = [...otp];
    newOtp[i] = val;
    setOtp(newOtp);

    if (val && i < 5) inputRefs.current[i + 1]?.focus();
  };

  const handleVerify = () => {
    const value = otp.join('');

    if (value.length !== 6) {
      alert("Enter complete OTP");
      return;
    }

    alert("OTP Verified ✅");
    onVerifySuccess();
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow space-y-4">

      <h2 className="text-lg font-bold">
        OTP sent to {phoneNumber}
      </h2>

      <div className="flex gap-2 justify-center">
        {otp.map((d, i) => (
          <input
            key={i}
            ref={(el) => { inputRefs.current[i] = el }}
            value={d}
            onChange={(e) => handleChange(i, e.target.value)}
            className="w-12 h-12 border text-center"
          />
        ))}
      </div>

      <button
        onClick={handleVerify}
        className="w-full bg-blue-600 text-white py-3 rounded"
      >
        Verify OTP
      </button>

      <button onClick={onBack} className="text-sm text-gray-500">
        Change number
      </button>

    </div>
  );
}