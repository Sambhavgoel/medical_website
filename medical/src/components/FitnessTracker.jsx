import React from 'react';
import { useNavigate } from 'react-router-dom';
import imge3 from '../assets/ashkan-forouzani-NqFTRkJ_dhU-unsplash.jpg';
import { motion } from 'framer-motion';

const FitnessTracker = () => {
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate('/dashboard');
  };

  return (
    <div style={{backgroundColor: "#54473F"}} className="w-screen h-screen flex flex-col justify-center items-center ">
        {/* bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-[length:400%_400%] animate-gradient-move */}
      <motion.h2
        className="text-center text-3xl font-bold text-white mb-8"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ amount: 0.3 }}
      >
        Fitness Tracker
      </motion.h2>

      <div className="flex justify-center items-center">
        <div
          className="cursor-pointer transition-transform duration-300 transform hover:scale-105"
          onClick={handleImageClick}
        >
          <img
            src={imge3}
            alt="Fitness Tracker"
            className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default FitnessTracker;
