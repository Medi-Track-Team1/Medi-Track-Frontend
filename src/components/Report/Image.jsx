import React from 'react'
import img from '../../assets/1.jpg'
const Image = () => {
  return (
    <div className="p-4 bg-blue-100 font-sans">
      {/* <Download_popup /> */}
      <div className=" relative w-ful h-[400px] rounded-lg overflow-hidden shadow-lg">
        <img
          src={img}
          alt="Doctor holding report"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-start justify-center text-white text-left px-10 ">    <div className="text-4xl font-bold">God Gives Life</div>
          <div className="text-4xl mt-1 font-medium">Doctor Saves Life</div>
        </div>
      </div>

      <div className="text-center mt-5 font-sans">
        <h2 className="text-4xl font-semibold text-blue-900 mb-2">“Your health deserves clarity.”</h2>
        <p className="text-black-700  bold text-2xl">
          "Behind every report is a patient’s story — treat both with care and precision. A report uploaded today can guide better care tomorrow."
        </p>
      </div>
    </div>
  )
}

export default Image;