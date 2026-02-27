"use client";
export default function RecruiterNavbar() {
  return (
    <nav className="bg-[#2d2d2d] border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="text-white font-bold text-2xl py-5">
          Naukaa <span className="text-sm font-normal">for employers</span>
        </div>

        <div className="flex gap-4">
          <button className="bg-[#2164e8] px-6 py-2 text-white rounded-md">
            Sign in
          </button>
          <button className="text-white px-4 py-2">
            Find jobs
          </button>
        </div>
      </div>
    </nav>
  );
}