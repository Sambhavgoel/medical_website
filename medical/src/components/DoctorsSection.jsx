import React from 'react';
import img from '../assets/doctors.jpg'

const doctors = [
  { name: "Certified Doctors", specialization: "Our team includes highly skilled doctors", image: img },
  { name: "24/7 Support", specialization: "We are here for you round the clock", image:img },
  { name: "Advanced Equipment", specialization: "We use the latest medical technology", image: img }
];

const DoctorsSection = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        {/* <h2 className="text-center text-3xl font-bold">Meet Our Great Doctors</h2> */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <div key={index} className="text-center">
              <img src={doctor.image} alt={doctor.name} className="rounded-full mx-auto w-32 h-32 object-cover" />
              <h3 className="mt-4 text-xl font-bold">{doctor.name}</h3>
              <p>{doctor.specialization}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
