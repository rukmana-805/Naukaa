import { FileText, Download, Trash2 } from "lucide-react";

export default function ResumeSection() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Resume
      </h2>

      <div className="border-2 border-gray-200 rounded-lg p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <FileText className="w-10 h-10 text-red-600" />
          <div>
            <p className="font-semibold text-gray-900">
              RBResume2026.pdf
            </p>
            <p className="text-sm text-gray-500">
              Uploaded on Jan 23, 2026
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Download className="w-5 h-5 text-blue-600" />
          <Trash2 className="w-5 h-5 text-red-600" />
        </div>
      </div>
    </div>
  );
}