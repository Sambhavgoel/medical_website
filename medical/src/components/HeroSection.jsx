import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import image from '../assets/doctors.jpg';

const HeroSection = () => {
  useEffect(() => {
    // GSAP timeline for initial animations
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });

    // Text animations
    tl.fromTo(
      ".hero-text h2",
      { opacity: 0, y: 50, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, stagger: 0.3, ease: "bounce.out" }
    )
    .fromTo(
      ".hero-text p",
      { opacity: 0, y: 30, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, ease: "bounce.out" },
      "-=0.6"
    )
    .fromTo(
      ".hero-text button",
      { opacity: 0, y: 20, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, ease: "bounce.out" },
      "-=0.4"
    );

    // Image animation
    tl.fromTo(
      ".hero-image img",
      { opacity: 0, scale: 1.1 },
      { opacity: 1, scale: 1, duration: 1.5, ease: "power3.out" },
      "-=1"
    );

    // Hover effect animation setup
    gsap.set(".hero-image img", { perspective: 1000 }); // Set perspective for 3D effect

    const imageElement = document.querySelector(".hero-image img");
    
    imageElement.addEventListener("mouseenter", () => {
      gsap.to(imageElement, {
        scale: 1.1,
        rotationX: 5,
        rotationY: 5,
        boxShadow: "0 20px 30px rgba(0, 0, 0, 0.3)",
        duration: 0.6,
        ease: "power3.out"
      });
      gsap.to(".hero-image::after", {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    });

    imageElement.addEventListener("mouseleave", () => {
      gsap.to(imageElement, {
        scale: 1,
        rotationX: 0,
        rotationY: 0,
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
        duration: 0.6,
        ease: "power3.inOut"
      });
      gsap.to(".hero-image::after", {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in"
      });
    });

  }, []);

  return (
    <section style={{backgroundColor: "#E9EED9"}} className=" text-white py-40 flex items-center justify-center">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side text with GSAP animations */}
        <div className="w-1/2 text-left hero-text">
          <h2 style={{color: "#54473F"}} className="text-6xl font-bold leading-tight">
            Complete Health Care Solution for Everyone
          </h2>
          <p style={{color: "#54473F"}} className="mt-4 text-2xl">
            Quality care for you and your loved ones
          </p>
          <button style={{backgroundColor: "#54473F"}} className="mt-6 bg-white text-blue-500 py-3 px-8 rounded-full text-2xl">
            <Link to='/profileSection' style={{color: "#E9EED9"}}>Sign up</Link>
          </button>
        </div>

        {/* Right side image with GSAP hover animation */}
        <div className="w-1/2 flex justify-center items-center hero-image">
          <div className="relative w-full h-full max-w-2xl max-h-2xl bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              src={image}
              alt="Transition"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 ease-out" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
