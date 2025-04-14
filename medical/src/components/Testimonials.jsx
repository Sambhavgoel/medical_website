import React from 'react';

const Testimonials = () => {
  return (
    <section className="bg-blue-50 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Testimonials</h2>
        <div className="mt-8">
          <blockquote className="italic text-lg">
            "The best care I have ever received! Highly recommend this clinic!"
          </blockquote>
          <cite>- Jane Doe</cite>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
