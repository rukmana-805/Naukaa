import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FilterSection({
  title,
  options,
  value,
  expanded,
  toggle,
  onChange,
}: any) {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={toggle}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50"
      >
        <span className="font-semibold text-gray-900">{title}</span>
        {expanded ? (
          <ChevronUp className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </button>

      {expanded && (
        <div className="px-6 pb-4 space-y-3">
          {options.map((opt: any, i: number) => (
            <label key={i} className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={value.includes(opt.label)}
                onChange={() => onChange(opt.label)}
                className="w-5 h-5 text-blue-600 border-2 border-gray-300 rounded"
              />
              <span className="text-gray-700 flex-1">{opt.label}</span>
              <span className="text-gray-400 text-sm">
                ({opt.count})
              </span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
