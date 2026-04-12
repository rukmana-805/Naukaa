"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Plus, X } from "lucide-react";

export default function PreferredLocationsStep({
  next,
  prev,
  updateFormData,
  data,
}: any) {

  const [locations, setLocations] = useState<string[]>(data || []);
  const [newLocation, setNewLocation] = useState("");

  const popularCities = [
    "Bangalore",
    "Hyderabad",
    "Pune",
    "Mumbai",
    "Delhi",
    "Chennai",
    "Kolkata",
    "Ahmedabad",
  ];

  const addLocation = (city?: string) => {

    const value = city || newLocation;

    if (!value.trim()) return;

    if (locations.includes(value)) return;

    setLocations([...locations, value]);
    setNewLocation("");
  };

  const removeLocation = (city: string) => {
    setLocations(locations.filter((loc) => loc !== city));
  };

  const handleSave = () => {
    updateFormData("preferredLocations", locations);
    next();
  };

  return (
    <div className="space-y-8">

      <div>
        <h2 className="text-3xl font-bold mb-2">Prefered Location</h2>
        <span className="text-gray-500 font-light">Where you want to work</span>
      </div>

      {/* INPUT */}

      <div>

        <label className="block text-sm font-medium text-gray-700 mb-2">
          Add Preferred Location
        </label>

        <div className="flex gap-2">

          <input
            type="text"
            value={newLocation}
            onChange={(e) => setNewLocation(e.target.value)}
            placeholder="Enter city"
            className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl"
          />

          <button
            onClick={() => addLocation()}
            className="px-4 py-3 bg-blue-600 text-white rounded-xl flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add
          </button>

        </div>

      </div>

      {/* SELECTED LOCATIONS */}

      <div>

        <h3 className="text-sm font-medium text-gray-700 mb-3">
          Selected Locations
        </h3>

        <div className="flex flex-wrap gap-2">

          {locations.map((city, index) => (

            <span
              key={index}
              className="flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
            >

              {city}

              <button onClick={() => removeLocation(city)}>
                <X className="w-3 h-3" />
              </button>

            </span>

          ))}

        </div>

      </div>

      {/* POPULAR CITIES */}

      <div>

        <h3 className="text-sm font-medium text-gray-700 mb-3">
          Popular Cities
        </h3>

        <div className="flex flex-wrap gap-2">

          {popularCities.map((city) => (

            <button
              key={city}
              onClick={() => addLocation(city)}
              className="px-3 py-1 border border-gray-200 rounded-full text-sm hover:bg-gray-50"
            >
              {city}
            </button>

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