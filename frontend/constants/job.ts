// // src/constants/jobs.ts
// import { Job } from "@/types/job";

// export const JOBS: Job[] = [
//   {
//     id: 1,
//     title: "Senior Frontend Developer",
//     company: "Google",
//     location: "Bangalore",
//     salary: "₹15-25 LPA",
//     type: "Full-time",
//     experience: "5-7 years",
//     industry: "Technology",
//     tags: ["React", "TypeScript"],
//     posted: "2 days ago",
//     applicants: 45,
//     openings: 3,
//     description: {
//       summary: "We are looking for an experienced frontend developer...",
//       requirements: ["5+ years experience", "Strong React knowledge"],
//       responsibilities: ["Build UI", "Collaborate with backend"],
//       skills: ["React", "TS"],
//       education: ["B.Tech / equivalent"],
//       benefits: ["WFH", "Health Insurance"],
//       contact: {
//         recruiter: "HR Team",
//         email: "hr@google.com",
//         phone: "+91 99999 99999",
//       },
//     },
//   },
// ];

import { Job } from "@/types/job";

export const JOBS: Job[] = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "Google Inc.",
    companyType: "Foreign MNC",
    location: "Bangalore, Karnataka",
    salary: "₹15-25 LPA",
    type: "Full-time",
    experience: "5-7 years",
    industry: "Technology",
    tags: ["React", "TypeScript", "CSS"],
    posted: "2 days ago",
    applicants: 45,
    openings: 3,
    description: {
      summary:
        "We are looking for an experienced Frontend Developer to join our dynamic team.",
      requirements: [
        "5+ years of experience in frontend development",
        "Strong expertise in React.js",
        "Experience with TypeScript",
      ],
      responsibilities: [
        "Develop new user-facing features",
        "Build reusable components",
        "Collaborate with backend teams",
      ],
      skills: ["React", "TypeScript", "Redux"],
      education: ["Bachelor's degree in Computer Science"],
      benefits: ["Work From Home", "Health Insurance", "Stock Options"],
      contact: {
        recruiter: "Sarah Johnson",
        email: "careers@google.com",
        phone: "+91 80-1234-5678",
      },
    },
  },

  {
    id: 2,
    title: "Product Manager",
    company: "Microsoft",
    companyType: "Foreign MNC",
    location: "Hyderabad, Telangana",
    salary: "₹20-35 LPA",
    type: "Full-time",
    experience: "4-6 years",
    industry: "Technology",
    tags: ["Product Strategy", "Agile", "Analytics"],
    posted: "1 week ago",
    applicants: 78,
    openings: 2,
    description: {
      summary:
        "Drive product vision and work closely with cross-functional teams.",
      requirements: [
        "4+ years of product management experience",
        "Strong analytical skills",
      ],
      responsibilities: [
        "Define product roadmap",
        "Collaborate with engineering",
      ],
      skills: ["Agile", "Analytics", "Roadmapping"],
      education: ["MBA or Engineering degree"],
      benefits: ["Healthcare", "Paid Leave", "Learning Budget"],
      contact: {
        recruiter: "Michael Chen",
        email: "hiring@microsoft.com",
        phone: "+91 40-9876-5432",
      },
    },
  },

  {
    id: 3,
    title: "UX/UI Designer",
    company: "Adobe",
    companyType: "Foreign MNC",
    location: "Mumbai, Maharashtra",
    salary: "₹12-18 LPA",
    type: "Full-time",
    experience: "3-5 years",
    industry: "Design",
    tags: ["Figma", "Prototyping", "User Research"],
    posted: "3 days ago",
    applicants: 92,
    openings: 1,
    description: {
      summary:
        "Create beautiful and intuitive user experiences for millions of users.",
      requirements: [
        "3+ years UX/UI experience",
        "Strong portfolio",
      ],
      responsibilities: [
        "Design wireframes",
        "Conduct user research",
      ],
      skills: ["Figma", "Adobe XD"],
      education: ["Bachelor's in Design"],
      benefits: ["Creative Cloud", "Remote Work"],
      contact: {
        recruiter: "Emma Williams",
        email: "design-jobs@adobe.com",
        phone: "+91 22-5555-7777",
      },
    },
  },
];


export const FILTER_OPTIONS = {
  companyType: [
    { label: "Foreign MNC", count: 1585 },
    { label: "Indian MNC", count: 652 },
    { label: "Startup", count: 766 },
    { label: "Corporate", count: 4780 },
  ],
  location: [
    { label: "Bangalore", count: 3245 },
    { label: "Mumbai", count: 2890 },
    { label: "Delhi", count: 2456 },
    { label: "Hyderabad", count: 1678 },
    { label: "Pune", count: 1234 },
    { label: "Remote", count: 890 },
  ],
  industry: [
    { label: "Technology", count: 2340 },
    { label: "Design", count: 567 },
    { label: "Finance", count: 1234 },
    { label: "Healthcare", count: 890 },
    { label: "E-commerce", count: 1567 },
  ],
};

