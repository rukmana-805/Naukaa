export async function getCompanyBySlug(slug: string) {
  
  return {
    slug,
    name: "TechCorp Solutions",
    tagline: "Innovating the future of technology",
    logo: "🔵",
    coverImage: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    followers: "1.2M",
    rating: 4.5,
    reviews: "2.4k",
    tags: [
      "IT Services & Consulting",
      "Financial Services",
      "Foreign MNC",
      "B2B"
    ],
    overview: {
      about:
        "TechCorp Solutions is a global leader in technology innovation and digital transformation. We empower businesses worldwide with cutting-edge solutions in cloud computing, artificial intelligence, and enterprise software. With over 20 years of experience, we have established ourselves as a trusted partner for Fortune 500 companies and emerging startups alike.",
      founded: "2004",
      employees: "50,000+",
      headquarters: "San Francisco, CA",
      revenue: "$10B+",
      offices: "45+ Countries",
      culture: [
        "Innovation-driven environment",
        "Work-life balance",
        "Inclusive culture",
        "Learning & growth"
      ],
      perks: [
        "Health Insurance",
        "Remote Work",
        "Stock Options",
        "Paid Leaves",
        "Gym Membership"
      ]
    },
    jobs: [
      {
        id: 1,
        title: "Senior Software Engineer",
        department: "Engineering",
        location: "Remote",
        experience: "5-8 years",
        type: "Full-time",
        salary: "$140k - $180k",
        posted: "2 days ago",
        applicants: 45
      }
    ]
  };
}
