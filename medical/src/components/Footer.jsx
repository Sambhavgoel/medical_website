import React from 'react';
import { motion } from 'framer-motion';
import logoImage from '../assets/WhatsApp Image 2024-09-14 at 02.27.29.jpeg'; // replace with your logo image path
import contactIcon from '../assets/WhatsApp Image 2024-09-14 at 02.27.29.jpeg'; // replace with your contact icon path
import addressIcon from '../assets/WhatsApp Image 2024-09-14 at 02.27.29.jpeg'; // replace with your address icon path
import facebookIcon from '../assets/WhatsApp Image 2024-09-14 at 02.27.29.jpeg'; // replace with your Facebook icon path
import twitterIcon from '../assets/WhatsApp Image 2024-09-14 at 02.27.29.jpeg'; // replace with your Twitter icon path
import linkedinIcon from '../assets/WhatsApp Image 2024-09-14 at 02.27.29.jpeg'; // replace with your LinkedIn icon path

const footerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } }
};

const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      animate="visible"
      style={{backgroundColor: "#54473F"}}
      className=" text-white py-12 px-6"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
          <img src={logoImage} alt="Logo" className="w-40 h-auto mb-4" />
          <span className="text-4xl font-bold">Medical Center</span>
          <p className="text-xl mt-2">Providing quality healthcare for over 20 years.</p>
        </div>

        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12 text-lg">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center mb-2 space-x-2">
              <img src={contactIcon} alt="Contact" className="w-10 h-10" />
              <span>Contact Us: (123) 456-7890</span>
            </div>
            <div className="flex items-center space-x-2">
              <img src={addressIcon} alt="Address" className="w-10 h-10" />
              <span>123 Medical St, Health City, HC 12345</span>
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-xl font-semibold mb-2">Quick Links</h4>
            <a href="#" className="text-white hover:text-gray-400 transition duration-300 mb-1">Home</a>
            <a href="#" className="text-white hover:text-gray-400 transition duration-300 mb-1">Appointment</a>
            <a href="#" className="text-white hover:text-gray-400 transition duration-300 mb-1">Location</a>
            <a href="#" className="text-white hover:text-gray-400 transition duration-300">Blogs</a>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-xl font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-400 transition duration-300">
                <img src={facebookIcon} alt="Facebook" className="w-8 h-8" />
              </a>
              <a href="#" className="text-white hover:text-gray-400 transition duration-300">
                <img src={twitterIcon} alt="Twitter" className="w-8 h-8" />
              </a>
              <a href="#" className="text-white hover:text-gray-400 transition duration-300">
                <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <p className="text-lg">&copy; {new Date().getFullYear()} Medical Center. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
