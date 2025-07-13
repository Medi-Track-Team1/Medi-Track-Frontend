import React from 'react';
import { Eye, Download, FileText } from 'lucide-react';

const uploads = [
  {
    fileName: 'CT_Scan_Patient_123.pdf',
    uploader: 'Dr. Ragavan',
    timestamp: '2024-01-15 14:30',
    size: '8.2 MB',
  },
  {
    fileName: 'Lab_Results_Batch_45.pdf',
    uploader: 'Lab Tech - Boopathi',
    timestamp: '2024-01-15 11:20',
    size: '3.1 MB',
  },
  {
    fileName: 'Pathology_Report_789.pdf',
    uploader: 'Dr. Seenivasan',
    timestamp: '2024-01-14 16:45',
    size: '1.9 MB',
  },
  {
    fileName: 'X-Ray Chest Routin Checkup.pdf',
    uploader: 'Dr. Mahesh',
    timestamp: '2025-01-30 10:45',
    size: '1.4 MB',
  },
  {
    fileName: 'MRI Brain Scan.pdf',
    uploader: 'Dr. KaviBharathan',
    timestamp: '2024-11-14 11:35',
    size: '4.9 MB',
  },
  {
    fileName: 'Urine Analysis Report.pdf',
    uploader: 'Dr. Sunil Kumar',
    timestamp: '2024-01-25 14:00',
    size: '8.1 MB',
  }
];

const RecentUploadActivity = () => {
  return (
    <div className="bg-blue-100 rounded-xl shadow p-6">
      <h2 className="text-xl font-semibold text-gray-800">Recent Upload Activity</h2>
      <p className="text-sm text-gray-500 mb-4">Track recently uploaded reports and files</p>

      <div className="space-y-4">
        {uploads.map((upload, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-white p-4 border border-gray-200 rounded-lg"
          >
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
                <FileText size={20} />
              </div>

              <div>
                <h3 className="font-medium text-gray-800">{upload.fileName}</h3>
                <p className="text-sm text-gray-500">
                  Uploaded by {upload.uploader}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  {upload.timestamp}   Size: {upload.size}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1 px-3 py-1.5 text-sm text-gray-700 border rounded bg-blue-300 hover:bg-gray-100">
                <Eye size={16} />
                Preview
              </button>
              <button className="flex items-center gap-1 px-3 py-1.5 text-sm text-white bg-blue-500 rounded hover:bg-gray-700">
                <Download size={16} />
                Download
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentUploadActivity;