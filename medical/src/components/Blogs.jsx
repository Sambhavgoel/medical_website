import React from 'react';
import img1 from '../assets/hush-naidoo-jade-photography-yo01Z-9HQAw-unsplash.jpg';
import img2 from'../assets/freestocks-nss2eRzQwgw-unsplash.jpg';
import img3 from '../assets/jesse-orrico-rmWtVQN5RzU-unsplash.jpg';
import { motion } from 'framer-motion';

const ProductCard = ({ title, description, imageSrc }) => {
  return (
    <motion.div
    
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg w-full sm:w-1/4 m-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.img
      
        src={imageSrc}
        alt={title}
        className="h-48 w-full object-cover"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      />
      <div className="p-4" >
        <h3 className="text-3xl font-bold text-white">{title}</h3>
        <p className="text-gray-400 text-2xl mt-2">{description}</p>
        <a href="#" className="text-blue-400 mt-4 text-xl inline-block">Learn More</a>
      </div>
    </motion.div>
  );
};

const ProductList = () => {
  const products = [
    {
      title: 'Product 1',
      description: 'This is the description for product 1. It also features some interesting information.',
      imageSrc: img1,
    },
    {
      title: 'Product 2',
      description: 'This is the description for product 2. It also features some interesting information.',
      imageSrc: img2,
    },
    {
      title: 'Product 3',
      description: 'This is the description for product 3. It also features some interesting information.',
      imageSrc: img3,
    },
  ];

  return (
    <div style={{backgroundColor: "#E9EED9"}} className=" min-h-screen py-8 flex flex-col justify-center items-center">
      <div className="container mx-auto">
        <motion.h2
          className="text-center text-4xl font-bold  mb-8"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.3 }}
          style={{backgroundColor: "#E9EED9"}}
        >
          Blogs
        </motion.h2>
        <div className="flex flex-row justify-center space-x-8 overflow-x-auto">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
