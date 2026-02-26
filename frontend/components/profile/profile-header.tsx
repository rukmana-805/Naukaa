"use client";
import { MapPin, Phone, Mail, Calendar, Briefcase, Check } from "lucide-react";

export default function ProfileHeader() {
  return (
    <div className="bg-white border-b border-gray-200 rounded-lg shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-start gap-8">
          <div className="relative">
            <div className="w-40 h-40 rounded-full border-4 border-green-500 overflow-hidden bg-gray-200" />
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-full border-2 border-green-500">
              <span className="text-green-600 font-semibold text-sm">
                100%
              </span>
            </div>
          </div>

          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900">
              Rukmana Behera
            </h1>
            <div className="mb-2">
              <span className="text-sm text-gray-500">Profile Updated - Jan 23, 2026</span>
            </div>

            <hr className="text-gray-200" />

            <div className="grid grid-cols-2 gap-6 mt-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-700">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  Varanasi, INDIA
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Briefcase className="w-5 h-5 text-gray-400" />
                  Fresher
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  Available to join in 15 Days or less
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-700">
                  <Phone className="w-5 h-5 text-gray-400" />
                  8260522156
                  <Check color="green" size={20} strokeWidth={3} />
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Mail className="w-5 h-5 text-gray-400" />
                  rukmanabehera805@gmail.com
                  <Check color="green" size={20} strokeWidth={3} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}