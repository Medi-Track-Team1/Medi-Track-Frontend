import React, { useEffect, useState } from 'react';
import img1 from '../../assets/1.jpg';
import img2 from '../../assets/2.jpg';
import img3 from '../../assets/3.jpg';
import img4 from '../../assets/4.jpg';

const Image = () => {
  const images = [img1, img2, img3, img4]; // Add as many images as you want
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <div className="p-4 bg-blue-100 font-sans">
      <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg transition-all duration-1000">
        <img
          src={images[currentIndex]}
          alt="Doctor holding report"
          className="w-full h-full object-cover transition-opacity duration-1000"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-start justify-center text-white text-left px-10">
          <div className="text-4xl font-bold">God Gives Life</div>
          <div className="text-4xl mt-1 font-medium">Doctor Saves Life</div>
        </div>
      </div>

      <div className="text-center mt-5 font-sans">
        <h2 className="text-4xl font-semibold text-blue-900 mb-2">“Your health deserves clarity.”</h2>
        <p className="text-black-700 bold text-2xl">
          "Behind every report is a patient’s story — treat both with care and precision. A report uploaded today can guide better care tomorrow."
        </p>
      </div>
    </div>
  );
};

export default Image;
