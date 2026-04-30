"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

export default function PersonalDetailsStep({ next, updateFormData, data }: any) {

  const [details, setDetails] = useState(
    data || {
      fullName: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      gender: "",
      maritalStatus: "",
      category: "",
      differentlyAbled: false,
      permanentAddress: "",
      currentAddress: "",
      city: "",
      state: "",
      pincode: "",
      hometown: "",
    }
  );

  const handleSave = () => {
    updateFormData("personalDetails", details);
    next();
  };

  return (
    <div className="space-y-6">

      <div>
        <h2 className="text-3xl font-bold mb-2">Personal Details</h2>
        <span className="text-gray-500 font-light">Basic information about you</span>
      </div>

      <div className="grid grid-cols-2 gap-6">

        {/* Full Name */}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            value={details.fullName}
            onChange={(e) =>
              setDetails({ ...details, fullName: e.target.value })
            }
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="John Doe"
            required
          />
        </div>

        {/* Email */}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>

          <input
            type="email"
            value={details.email}
            onChange={(e) =>
              setDetails({ ...details, email: e.target.value })
            }
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="john.doe@example.com"
            required
          />
        </div>

        {/* Phone */}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number <span className="text-red-500">*</span>
          </label>

          <input
            type="tel"
            value={details.phone}
            onChange={(e) =>
              setDetails({ ...details, phone: e.target.value })
            }
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="+91 98765 43210"
            required
          />
        </div>

        {/* DOB */}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Date of Birth <span className="text-red-500">*</span>
          </label>

          <input
            type="date"
            value={details.dateOfBirth}
            onChange={(e) =>
              setDetails({ ...details, dateOfBirth: e.target.value })
            }
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        {/* Gender */}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Gender <span className="text-red-500">*</span>
          </label>

          <select
            value={details.gender}
            onChange={(e) =>
              setDetails({ ...details, gender: e.target.value })
            }
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Marital Status */}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Marital Status
          </label>

          <select
            value={details.maritalStatus}
            onChange={(e) =>
              setDetails({ ...details, maritalStatus: e.target.value })
            }
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
          >
            <option value="">Select Status</option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
          </select>
        </div>

        {/* Category */}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Category
          </label>

          <select
            value={details.category}
            onChange={(e) =>
              setDetails({ ...details, category: e.target.value })
            }
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
          >
            <option value="">Select Category</option>
            <option value="General">General</option>
            <option value="OBC">OBC</option>
            <option value="SC">SC</option>
            <option value="ST">ST</option>
          </select>
        </div>

        {/* Hometown */}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Hometown
          </label>

          <input
            type="text"
            value={details.hometown}
            onChange={(e) =>
              setDetails({ ...details, hometown: e.target.value })
            }
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
            placeholder="Your hometown"
          />
        </div>

        {/* Differently Abled */}

        <div className="col-span-2">
          <label className="flex items-center gap-2">

            <input
              type="checkbox"
              checked={details.differentlyAbled}
              onChange={(e) =>
                setDetails({
                  ...details,
                  differentlyAbled: e.target.checked,
                })
              }
              className="w-5 h-5 text-blue-600 border-2 border-gray-300 rounded"
            />

            <span className="text-gray-700">
              I am differently abled
            </span>

          </label>
        </div>

        {/* Address */}

        <div className="col-span-2">

          <label className="block text-sm font-medium text-gray-700 mb-2">
            Permanent Address <span className="text-red-500">*</span>
          </label>

          <textarea
            value={details.permanentAddress}
            onChange={(e) =>
              setDetails({
                ...details,
                permanentAddress: e.target.value,
              })
            }
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
            rows={3}
            placeholder="Enter your permanent address"
          />

        </div>

        {/* City */}

        <div>
          <input
            type="text"
            value={details.city}
            onChange={(e) =>
              setDetails({ ...details, city: e.target.value })
            }
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
            placeholder="City"
          />
        </div>

        {/* State */}

        <div>
          <input
            type="text"
            value={details.state}
            onChange={(e) =>
              setDetails({ ...details, state: e.target.value })
            }
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
            placeholder="State"
          />
        </div>

        {/* Pincode */}

        <div>
          <input
            type="text"
            value={details.pincode}
            onChange={(e) =>
              setDetails({ ...details, pincode: e.target.value })
            }
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
            placeholder="Pincode"
          />
        </div>

      </div>

      {/* Save button */}

      <div className="flex justify-end">

        <button
          onClick={handleSave}
          className="px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          Save & Continue
          <ChevronRight className="w-5 h-5" />
        </button>

      </div>

    </div>
  );
}