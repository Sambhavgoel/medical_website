import React from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  return (
    <section  className="py-12 relative overflow-hidden">
      {/* Animated Background with Texture */}
      <div className="absolute inset-0 bg-gray-800">
        {/* Bubbles Effect */}
        <motion.div
          className="absolute inset-0 overflow-hidden"
          style={{ background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 20%, rgba(255, 255, 255, 0) 40%)' }}
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
        />
      </div>
      <div className="relative container mx-auto z-10">
        <div className="bg-white shadow-lg p-8 rounded-lg max-w-lg mx-auto transition-colors duration-500 hover:bg-gray-100">
          <h2 className="text-center text-4xl font-extrabold text-gray-800">Contact Us</h2>
          <form className="mt-6 space-y-4">
            <input
              style={{backgroundColor: "#54473F",color:"white"}}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300 transform hover:scale-105"
              type="text"
              placeholder="Name"
            />
            <input
              style={{backgroundColor: "#54473F",color:"white"}}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300 transform hover:scale-105"
              type="email"
              placeholder="Email"
            />
            <textarea
              style={{backgroundColor: "#54473F",color:"white"}}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300 transform hover:scale-105"
              placeholder="Message"
            ></textarea>
            <button
              className="w-full bg-gradient-to-r from-slate-500 to-slate-800 text-white py-3 px-6 rounded-lg shadow-md transform transition-transform duration-300 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
