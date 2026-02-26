export default function ProfileSidebar() {
  const links = [
    "Resume",
    "Resume headline",
    "Key skills",
    "Education",
    "IT skills",
    "Projects",
    "Profile summary",
    "Accomplishments",
    "Career profile",
    "Personal details",
  ];

  return (
    <div className="w-72 shrink-0">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 sticky top-24">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">
            Quick links
          </h2>
        </div>
        <nav className="p-4">
          {links.map((item) => (
            <a
              key={item}
              href="#"
              className="block px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors hover:text-blue-600 font-medium"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}