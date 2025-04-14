import React, { useState } from "react";
import imge1 from '../assets/ozkan-guner-aOnJSN230sA-unsplash.jpg';
import imge2 from '../assets/jeremy-alford-O13B7suRG4A-unsplash.jpg';
import imge3 from '../assets/humberto-chavez-FVh_yqLR9eA-unsplash.jpg';
import imge4 from '../assets/austin-distel-7bMdiIqz_J4-unsplash.jpg';
import imge5 from '../assets/dalton-ngangi-ZCztndOWdjs-unsplash.jpg';
import imge6 from '../assets//dweb_find_doctors.png';
import { motion } from 'framer-motion';

const Slider = () => {
  const [counter, setCounter] = useState(0);

  // Array of images with messages
  const slides = [
    { img: imge1, message: (
      <>
        <p className="mb-4">Here are some details:</p>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Point 1: This is the first bullet point.</li>
          <li>Point 2: Here is the second bullet point.</li>
          <li>Point 3: This is the third point.</li>
          <br />
          <a href="#"> See More</a>
        </ul>
      </>
    )},
    { img: imge5, message: (
      <>
        <p className="mb-4">Key features:</p>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Feature 1: This feature is highlighted first.</li>
          <li>Feature 2: Second feature to consider.</li>
          <li>Feature 3: Another important feature.</li>
          <br />
          <a href="#"> See More</a>
        </ul>
      </>
    )},
    { img: imge2, message: (
      <>
        <p className="mb-4">Important points include:</p>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Detail 1: This is the first detail.</li>
          <li>Detail 2: This detail is the second in line.</li>
          <li>Detail 3: Another important detail.</li>
          <br />
          <a href="#"> See More</a>
        </ul>
      </>
    )},
    { img: imge4, message: (
      <>
        <p className="mb-4">Key features:</p>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Feature 1: This feature is highlighted first.</li>
          <li>Feature 2: Second feature to consider.</li>
          <li>Feature 3: Another important feature.</li>
          <br />
          <a href="#"> See More</a>
        </ul>
      </>
    )},
    { img: imge5, message: (
      <>
        <p className="mb-4">Key features:</p>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Feature 1: This feature is highlighted first.</li>
          <li>Feature 2: Second feature to consider.</li>
          <li>Feature 3: Another important feature.</li>
          <br />
          <a href="#"> See More</a>
        </ul>
      </>
    )},
    { img: imge3, message: (
      <>
        <p className="mb-4">Key features:</p>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Feature 1: This feature is highlighted first.</li>
          <li>Feature 2: Second feature to consider.</li>
          <li>Feature 3: Another important feature.</li>
          <br />
          <a href="#"> See More</a>
        </ul>
      </>
    )}

  ];

  const goNext = () => {
    if (counter < slides.length - 1) {
      setCounter(counter + 1);
    } else {
      setCounter(0); // Reset to the first image when reaching the last one
    }
  };

  const goPrev = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      setCounter(slides.length - 1); // Go to the last image when reaching the first one
    }
  };

  return (
    <div style={{backgroundColor: "#E9EED9"}} className="w-screen h-screen bg-black flex flex-col items-center">
      {/* Heading at the Top of the Page */}
      <motion.h2
        className="text-center text-3xl font-bold text-white mt-8 mb-24"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ amount: 0.3 }} 
        style={{color: "#54473F"}}
        
      >
        Our Doctors
      </motion.h2>

      {/* Slider Container */}
      <div style={{backgroundColor: "#54473F"}} className=" relative w-full max-w-4xl h-80 md:h-96 lg:h-[32rem] mx-8 my-12 flex justify-center items-center">
        {/* Card Container */}
        <div className="relative w-full h-full group perspective">
          <div className="relative w-full h-full transition-transform duration-500 ease-in-out transform-style-3d group-hover:rotate-y-180">
            {/* Front Side - Image */}
            <div className="absolute w-full h-full   backface-hidden">
              <img
                src={slides[counter].img}
                className="w-full h-full object-contain rounded-lg shadow-lg"
                alt={`Slide ${counter + 1}`}
              />
            </div>
            {/* Back Side - Message */}
            <div className="absolute w-full h-full bg-gray-700 text-white flex flex-col justify-center items-center p-6 rounded-lg shadow-lg backface-hidden rotate-y-180">
              <div className="text-lg leading-relaxed text-center">
                {slides[counter].message}
              </div>
            </div>
          </div>
        </div>

        {/* Left and Right Arrow Buttons */}
        <div className="btn-slider flex justify-between items-center absolute top-1/2 w-full px-4 transform -translate-y-1/2">
          {/* Left arrow */}
          <button
            onClick={goPrev}
            className="slide-btn bg-white text-4xl text-black p-4 rounded-full opacity-75 hover:opacity-100 transition-opacity duration-300"
          >
            &#8592;
          </button>

          {/* Right arrow */}
          <button
            onClick={goNext}
            className="slide-btn bg-white text-4xl text-black p-4 rounded-full opacity-75 hover:opacity-100 transition-opacity duration-300"
          >
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
