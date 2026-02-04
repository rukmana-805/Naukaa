import { Briefcase } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-white">
                Naukaa
              </span>
            </div>

            <p className="text-slate-400">
              Your trusted partner in finding the perfect career opportunity.
            </p>
          </div>

          {/* Job Seekers */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              For Job Seekers
            </h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-white transition-colors">Browse Jobs</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Career Advice</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Resume Builder</Link></li>
            </ul>
          </div>

          {/* Employers */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              For Employers
            </h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-white transition-colors">Post a Job</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Talent Solutions</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
          <p>© 2024 Naukaa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
