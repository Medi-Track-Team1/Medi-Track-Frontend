import React from 'react';
import { FileText, Upload, CalendarDays } from 'lucide-react';
 import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="p-3 bg-blue-100  font-sans">
      <div className="bg-blue-900 text-white rounded-lg p-6">
        <h1 className="text-2xl font-semibold m-0">Medical Reports Center</h1>
        <p className="mt-1 text-sm">
          Centralized platform for managing all medical reports, lab results, and diagnostic files.
        </p>
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-gray-100 p-4 rounded-lg">
        <Link to="/report/browse" className="flex items-center gap-2 px-4 py-2 bg-white border border-black rounded-md shadow-sm text-sm font-medium hover:bg-gray-50">
          <FileText size={18} />
          <span>Browse Reports</span>
        </Link>

        <Link to="/report/upload" className="flex items-center gap-2 px-4 py-2 bg-white border border-black rounded-md shadow-sm text-sm font-medium hover:bg-gray-50">
          <Upload size={18} />
          <span>Upload Reports</span>
        </Link>

        <Link to="/report/recent" className="flex items-center gap-2 px-4 py-2 bg-white border border-black rounded-md shadow-sm text-sm font-medium hover:bg-gray-50">
          <CalendarDays size={18} />
          <span>Recent Activity</span>
        </Link>
      </div>


    </div>
  );
};

export default Navbar;