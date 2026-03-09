"use client";

import { useState } from "react";

export default function CountryCodeDropdown({
  countryCode,
  setCountryCode,
  mobileNumber,
  setMobileNumber
}:any){

  const [open,setOpen] = useState(false);

  const codes = ["+91","+1","+44","+61","+971","+65"];

  return(
    <div className="space-y-2">

      <label className="text-sm font-semibold">
        Mobile number
      </label>

      <div className="flex gap-3">

        <div className="relative">

          <button
            type="button"
            onClick={()=>setOpen(!open)}
            className="px-4 py-3 border rounded-lg"
          >
            {countryCode}
          </button>

          {open && (
            <div className="absolute top-full mt-2 bg-white border rounded-lg shadow w-32">

              {codes.map(code=>(
                <button
                  key={code}
                  onClick={()=>{setCountryCode(code);setOpen(false)}}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  {code}
                </button>
              ))}

            </div>
          )}

        </div>

        <input
          type="tel"
          value={mobileNumber}
          onChange={(e)=>setMobileNumber(e.target.value)}
          placeholder="Enter mobile number"
          className="flex-1 px-4 py-3 border rounded-lg"
        />

      </div>

    </div>
  )
}