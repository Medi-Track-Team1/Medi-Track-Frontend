import React, { useState } from 'react';

import { Eye, Download, FileText } from 'lucide-react';


const reports = [
  {
    title: "Blood Test Report - Complete Panel",
    patient: "John Doe",
    doctor: "Dr. Sarah Johnson",
    date: "2024-01-15",
    size: "2.3 MB",
    type: "Lab Report",
  },
  {
    title: "X-Ray Chest - Routine Check",
    patient: "Sarah Wilson",
    doctor: "Dr. Michael Brown",
    date: "2024-01-14",
    size: "5.7 MB",
    type: "Imaging",
  },
  {
    title: "X-Ray Chest - Routine Check",
    patient: "Sarah Wilson",
    doctor: "Dr. Michael Brown",
    date: "2024-01-14",
    size: "5.7 MB",
    type: "Imaging",
  },
  {
    title: "X-Ray Chest - Routine Check",
    patient: "Sarah Wilson",
    doctor: "Dr. Michael Brown",
    date: "2024-01-14",
    size: "5.7 MB",
    type: "Imaging",
  },
  {
    title: "ECG Report - Cardiology Assessment",
    patient: "David Smith",
    doctor: "Dr. Laura Adams",
    date: "2024-01-13",
    size: "1.9 MB",
    type: "Lab Report",
  },
];

const getTypeColor = (type) => {
  switch (type) {
    case "Lab Report":
      return "bg-blue-100 text-blue-600";
    case "Imaging":
      return "bg-purple-100 text-purple-600";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

const MedicalReports = () => {
  const [search, setSearch] = useState("");

  return (
     <div className="bg-blue-100 rounded-xl shadow p-6">
      <h1 className="text-2xl font-semibold mb-6">Medical Reports Database</h1>

      <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by title, patient, or doctor..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 w-full px-4 py-2 border rounded-md shadow-sm"
        />
        <select className="px-4 py-2 bg-blue-300 border rounded-md shadow-sm w-full md:w-auto">
          <option>All Types</option>
          <option>Lab Report</option>
          <option>Imaging</option>
        </select>
      </div>

      {/* Report List */}
      <div className="space-y-4">
        {reports
          .filter((r) =>
            `${r.title} ${r.patient} ${r.doctor}`.toLowerCase().includes(search.toLowerCase())
          )
          .map((report, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between bg-white p-4 border border-gray-200 rounded-lg"
            >
              <div className="flex items-start gap-4 ">
               <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
                <FileText size={20} />
              </div>
                <div>
                  <h2 className="font-semibold">{report.title}</h2>
                  <p className="text-sm text-gray-600">
                    👤 Patient: {report.patient} &nbsp;&nbsp; 🩺 Doctor: {report.doctor}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    📅 {report.date} &nbsp;&nbsp; 💾 Size: {report.size}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className={`px-2 py-1 text-xs rounded-full ${getTypeColor(report.type)}`}>
                      {report.type}
                    </span>
                    <span className="bg-green-100 text-green-600 px-2 py-1 text-xs rounded-full">
                      Available
                    </span>
                  </div>
                </div>
              </div>
    
              <div className="flex gap-2 mt-4 md:mt-0">
                <button className="flex items-center gap-1 px-4 py-2 text-sm border rounded-md bg-blue-300 hover:bg-gray-100">
                   <Eye size={16} />
                Preview
                </button>
                <button className="flex items-center gap-1 px-4 py-2 text-sm bg-blue-500 text-white rounded-md hover:bg-gray-800">
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

export default MedicalReports;