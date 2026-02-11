// import { FEATURED_JOBS } from "@/constants/featured-jobs";
// import { ChevronRight } from "lucide-react";
// import JobCard from "../jobs/job-card";


// export default function FeaturedJobs() {
//   return (
//     <section className="py-16 px-4 sm:px-6 lg:px-16 bg-white" id="jobs">
//       <div className="max-w-7xl mx-auto">

//         <div className="flex justify-between items-center mb-8">
//           <h2 className="text-3xl font-bold text-slate-900">
//             Featured Jobs
//           </h2>

//           <a
//             href="#"
//             className="text-blue-600 font-medium flex items-center hover:text-blue-700"
//           >
//             View all jobs
//             <ChevronRight className="w-5 h-5 ml-1" />
//           </a>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {FEATURED_JOBS.map((job) => (
//             <JobCard key={job.id} job={job} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import JobCard from "@/components/jobs/job-card";
import { JOBS } from "@/constants/job";


export default function FeaturedJobs() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Featured Jobs</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {JOBS.slice(0, 3).map((job) => (
            <JobCard
              key={job.id}
              job={job}
              showApply={false}   // no save/apply
            />
          ))}
        </div>
      </div>
    </section>
  );
}

