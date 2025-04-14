import React from 'react';
import doctors from '../assets/general.jpg';
import AppointHeader from './AppointHeader';
import DoctorList from '../components/DoctorList';

const Heart2 = () => {
  const handleScroll = () => {
    // Scroll to the section with the ID 'scroll-target'
    const section = document.getElementById('scroll-target');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <AppointHeader />

      {/* Main Content Section */}
      <div
        className="min-h-screen bg-[#E9EED9] flex flex-col md:flex-row items-center justify-center py-12"
        style={{ paddingTop: '80px' }} // Adding some padding to avoid overlap with header
      >
        {/* Left Side - Image */}
        <div className="flex-1 flex justify-center items-center p-4">
          <div className="flex justify-center flex-row w-[500px] h-[300px] md:h-[500px] border-4 border-[#54473F] rounded-lg overflow-hidden shadow-xl">
            <img
              src={doctors}
              alt="Doctors"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="flex-1 flex flex-col justify-center p-8 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold text-[#54473F] mb-6 font-handwriting">
            General Physician
          </h1>
          <p className="text-lg md:text-2xl text-[#54473F] leading-relaxed mb-6 font-handwriting">
          General physicians are medical professionals who diagnose, treat, and manage a wide range of health conditions. They provide primary care, preventive services, and refer patients to specialists when necessary.
          </p>

          {/* Scroll Button (Optional) */}
          <button
            onClick={handleScroll}
            className="px-6 py-3 bg-[#54473F] text-[#E9EED9] font-semibold rounded-full shadow-lg hover:bg-[#9A7E6F] transition duration-300"
          >
            Learn More
          </button>
        </div>
      </div>

      <DoctorList />
    </>
  );
};

export default Heart2;
