export default function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-blue-600 to-blue-700">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Ready to Find Your Next Opportunity?
        </h2>

        <p className="text-xl text-blue-100 mb-8">
          Join millions of job seekers and start your journey today
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg">
            Create Free Account
          </button>

          <button className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors">
            For Employers
          </button>
        </div>
      </div>
    </section>
  );
}
