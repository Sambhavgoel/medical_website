import React from 'react';
import img1 from '../assets/abdulai-sayni-1QcLbPi3S7Y-unsplash.jpg'
import img2 from '../assets/priscilla-du-preez-aPa843frIzI-unsplash.jpg'
import img3 from '../assets/accuray-jEC4Tco8I9E-unsplash.jpg'

const doctors = [
  { name: "Certified Doctors", detail: "Our team includes highly skilled doctors", image: img3 },
  { name: "24/7 Support",detail: "We are here for you round the clock", image:img2 },
  { name: "Advanced Equipment", detail: "We use the latest medical technology", image: img1 }
];

const Features = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        {/* <h2 className="text-center text-3xl font-bold">Meet Our Great Doctors</h2> */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <div key={index} className="text-center">
              <img src={doctor.image} alt={doctor.name} className="rounded-full mx-auto w-32 h-32 object-cover" />
              <h3 className="mt-4 text-xl font-bold">{doctor.name}</h3>
              <p>{doctor.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
