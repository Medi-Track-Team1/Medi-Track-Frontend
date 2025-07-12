import React, { useState, useEffect } from 'react';

const Download_popup = () => {
  const [mobile, setMobile] = useState('');
  const [show, setShow] = useState(true);
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      img: 'https://cdn-icons-png.flaticon.com/512/3774/3774299.png',
      text: 'Trusted By Leading Doctors & Hospitals',
    },
    {
      img: 'https://cdn-icons-png.flaticon.com/512/3774/3774233.png',
      text: 'Your Reports Are Safe & Secure',
    },
    {
      img: 'https://cdn-icons-png.flaticon.com/512/3774/3774276.png',
      text: 'Access Health Records Anywhere Anytime',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => setCurrent(index);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <div className="flex flex-col md:flex-row bg-white rounded-xl max-w-4xl w-full shadow-xl animate-fadeInDown overflow-hidden transition-all duration-300 ease-in-out">
        
       
        <div className="bg-[#E8F0FA] p-6 md:p-8 flex-1 flex flex-col justify-center items-center text-center">
          <img
            src={slides[current].img}
            alt="Slide"
            className="w-36 h-auto mb-5 animate-fadeIn"
          />
          <p className="font-semibold text-gray-700 mt-2">{slides[current].text}</p>
          <div className="mt-4 flex justify-center space-x-2">
            {slides.map((_, idx) => (
              <span
                key={idx}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                  idx === current ? 'bg-[#1775D1]' : 'bg-gray-300'
                }`}
                onClick={() => handleDotClick(idx)}
              />
            ))}
          </div>
        </div>

     
        <div className="flex-1 p-8 relative flex flex-col justify-center">
     <button
  className="absolute top-5 right-5 flex items-center justify-center text-red-600 text-xl font-bold w-8 h-8 rounded-full hover:bg-black hover:text-white transition"
  onClick={() => setShow(false)}
>
  &times;
</button>



          <h3 className="text-[#1775D1] text-xl font-semibold mb-1">Sample Tracking</h3>
          <h3 className="text-[#1775D1] text-xl font-semibold mb-3">Download Report</h3>
          <p className="text-sm text-gray-600 mb-4">
            View your reports and upcoming health checkups at one place.
          </p>
          <input
            type="text"
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md outline-[#1775D1] mb-2"
          />
          <small className="text-xs text-gray-500 mb-3">
            An OTP will be sent on this number or email
          </small>
          <button className="bg-[#1775D1] text-white py-2 px-4 rounded-md font-medium mt-2 hover:bg-[#105ea7] transition">
            Proceed
          </button>
          <p className="text-xs text-gray-600 mt-4">
            By proceeding, you agree to Metropolis <a href="#" className="text-[#1775D1] hover:underline">T&C</a> and <a href="#" className="text-[#1775D1] hover:underline">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Download_popup;