// export interface Job {
//   id: number;
//   title: string;
//   company: string;
//   location: string;
//   salary: string;
//   type: string;
// }

export type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;

  companyType?: string;
  experience?: string;
  industry?: string;
  tags?: string[];
  posted?: string;
  applicants?: number;
  openings?: number;

  description?: {
    summary?: string;
    requirements?: string[];
    responsibilities?: string[];
    skills?: string[];
    education?: string[];
    benefits?: string[];
    contact?: {
      recruiter?: string;
      email?: string;
      phone?: string;
    };
  };
};
