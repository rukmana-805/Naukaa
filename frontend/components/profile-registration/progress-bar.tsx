export default function ProgressBar({ currentStep, steps }: any) {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-semibold text-gray-900">
          Complete Your Profile
        </h2>

        <span className="text-sm text-gray-600">
          Step {currentStep + 1} of {steps.length}
        </span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-blue-600 h-2 rounded-full transition-all"
          style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
        />
      </div>
    </div>
  );
}