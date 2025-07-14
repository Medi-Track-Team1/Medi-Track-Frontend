import React, { useRef, useState } from "react";

const UploadForm = () => {
  const fileInputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [images, setImages] = useState([]);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const selected = Array.from(e.target.files);
    handleFiles(selected);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const dropped = Array.from(e.dataTransfer.files);
    handleFiles(dropped);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleFiles = (fileList) => {
    const imageFiles = fileList.filter(file => file.type.startsWith("image/"));
    const imagePreviews = imageFiles.map(file => ({
      file,
      url: URL.createObjectURL(file),
    }));
    setImages(prev => [...prev, ...imagePreviews]);
  };

  return (
    <div className="bg-white shadow-md rounded-md p-6 mt-8 grid md:grid-cols-2 gap-6">
      {/* Upload box */}
      <div
        onClick={handleClick}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`border-2 border-dashed rounded-md flex flex-col items-center justify-center p-6 text-center cursor-pointer transition ${
          isDragging ? "bg-blue-50 border-blue-400" : "border-gray-300 bg-white"
        }`}
      >
        <svg
          className="w-12 h-12 text-gray-400 mb-2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
        <p className="text-gray-500">
         Click to browse and select files
        </p>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          multiple
          accept="image/*"
        />
        <p className="text-sm text-gray-400 mt-2">
          Supported formats: JPG, PNG, WEBP (Max 25MB)
        </p>

        {images.length > 0 && (
          <div className="grid grid-cols-3 gap-2 mt-4">
            {images.map((img, idx) => (
              <div key={idx} className="relative w-24 h-24 rounded overflow-hidden border">
                <img
                  src={img.url}
                  alt={`Preview ${idx}`}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Report Info */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Report Information</h3>
        <p className="text-sm text-gray-600 mb-4">
          Provide details about the report being uploaded
        </p>
        <input
          type="text"
          placeholder="Enter report title..."
          className="w-full p-2 border border-gray-300 rounded mb-3"
        />
        <input
          type="text"
          placeholder="Enter patient ID..."
          className="w-full p-2 border border-gray-300 rounded mb-3"
        />
        <input
          type="text"
          placeholder="Enter patient name..."
          className="w-full p-2 border border-gray-300 rounded mb-3"
        />
        <select className="w-full p-2 border border-gray-300 rounded mb-3">
          <option value="">Select report type</option>
          <option value="blood">Blood Test</option>
          <option value="xray">X-Ray</option>
          <option value="ctscan">CT Scan</option>
        </select>
        <input
          type="text"
          placeholder="Enter doctor name..."
          className="w-full p-2 border border-gray-300 rounded mb-3"
        />
        <input
          type="date"
          className="w-full p-2 border border-gray-300 rounded mb-3"
        />
        <button className="w-full bg-blue-900 text-white py-2 rounded mt-2 hover:bg-blue-800">
          Upload Report
        </button>
      </div>
    </div>
  );
};

export default UploadForm;
