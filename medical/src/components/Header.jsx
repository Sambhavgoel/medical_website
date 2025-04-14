import { useState } from "react";
import { Link } from 'react-router-dom';
import logo from '../assets/WhatsApp Image 2024-09-14 at 02.27.29.jpeg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="shadow p-4" style={{backgroundColor: "#54473F"}}>
      <div className="w-full flex items-center justify-between relative">
        {/* Logo on the left */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="w-12 h-12 mr-4 rounded-full"
          />
        </div>

        {/* Center the title "Medical Clinic" */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <h1 style={{color: "#E9EED9"}} className="text-2xl sm:text-3xl md:text-4xl font-bold transition-transform duration-300 hover:scale-110">
            MedixCare
          </h1>
        </div>

        {/* Hamburger menu button for mobile view */}
        <button
          className="block lg:hidden ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-8 h-8"
            style={{color: "#E9EED9"}}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Navigation items in column when menu is open */}
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } lg:flex z-10 lg:space-x-6 lg:relative lg:flex-row flex flex-col items-center absolute top-full right-0 mt-4 lg:mt-0 lg:bg-transparent lg:w-auto w-full bg-[#54473F]`}
        >
          <Link
            to="/"
            className="text-lg md:text-xl font-semibold px-3 py-2 transition-all duration-300 hover:scale-110 hover:bg-[#9A7E6F] hover:text-[#9A7E6F] rounded"
            style={{color: "#E9EED9"}}
          >
            Home
          </Link>
          <Link
            to="/appointments"
            className="text-lg md:text-xl font-semibold px-3 py-2 transition-all duration-300 hover:scale-110 hover:bg-[#9A7E6F] hover:text-[#9A7E6F] rounded"
            style={{color: "#E9EED9"}}
          >
            Appointments
          </Link>
          <Link
            to="/Location"
            className="text-lg md:text-xl font-semibold px-3 py-2 transition-all duration-300 hover:scale-110 hover:bg-[#9A7E6F] hover:text-[#9A7E6F] rounded"
            style={{color: "#E9EED9"}}
          >
            Location
          </Link>
          {/* <Link
            to="/blogs"
            className="text-lg md:text-xl font-semibold px-3 py-2 transition-all duration-300 hover:scale-110 hover:bg-[#9A7E6F] hover:text-[#9A7E6F] rounded"
            style={{color: "#E9EED9"}}
          >
            Blogs
          </Link> */}
          <Link
            to="/profilesection"
            className="text-lg md:text-xl font-semibold px-3 py-2 transition-all duration-300 hover:scale-110 hover:bg-[#9A7E6F] hover:text-[#9A7E6F] rounded"
            style={{color: "#E9EED9"}}
          >
            Profile
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
