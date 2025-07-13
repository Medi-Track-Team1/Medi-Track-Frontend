import React from 'react';

const UploadForm = () => {
  return (
    <div className="bg-white shadow-md rounded-md p-6 mt-8 grid md:grid-cols-2 gap-6">
      {/* Upload box */}
      <div className="border-2 border-dashed border-gray-300 rounded-md flex flex-col items-center justify-center p-6 text-center">
        <svg className="w-12 h-12 text-gray-400 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
        <p className="text-gray-500">Drop files here <br /> or click to browse and select files</p>
        <input type="file" className="hidden" />
        <button className="mt-4 px-4 py-2 bg-gray-200 rounded">Choose Files</button>
        <p className="text-sm text-gray-400 mt-2">Supported formats: PDF, JPG, PNG (Max 25MB)</p>
      </div>

      {/* Report Info */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Report Information</h3>
        <p className="text-sm text-gray-600 mb-4">Provide details about the report being uploaded</p>
        <input type="text" placeholder="Enter report title..." className="w-full p-2 border border-gray-300 rounded mb-3" />
        <input type="text" placeholder="Enter patient name..." className="w-full p-2 border border-gray-300 rounded mb-3" />
        <select className="w-full p-2 border border-gray-300 rounded mb-3">
          <option>Select report type</option>
          <option>Blood Test</option>
          <option>X-Ray</option>
          <option>CT Scan</option>
        </select>
        <input type="text" placeholder="Enter doctor name..." className="w-full p-2 border border-gray-300 rounded mb-3" />
        <input type="date" className="w-full p-2 border border-gray-300 rounded mb-3" />
        <button className="w-full bg-blue-900 text-white py-2 rounded mt-2 hover:bg-blue-800">Upload Report</button>
      </div>
    </div>
  );
};

export default UploadForm;