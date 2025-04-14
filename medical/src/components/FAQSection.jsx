import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    { question: "What services do you offer?", answer: "We offer a range of medical services including cardiology, dermatology, and more." },
    { question: "What are your opening hours?", answer: "We are open 24/7 to accommodate all your medical needs." },
    { question: "How can I book an appointment?", answer: "You can book an appointment through our website or by calling our office." },
    { question: "Do you accept insurance?", answer: "Yes, we accept a variety of insurance plans. Please contact us for more details." },
    { question: "Where are you located?", answer: "We are located at 123 Health Ave, Wellness City." },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const answerVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto' },
  };

  return (
    <section style={{backgroundColor: "#54473F"}}  className="py-12 ">
      <div className="container mx-auto">
        <motion.h2
          className="text-center text-3xl font-bold mb-8 text-white"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.3 }} 
        >
          Frequently Asked Question
        </motion.h2>
        <div className="space-y-4">
          {questions.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-4 border-b bg-white shadow-md rounded-lg cursor-pointer"
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              <motion.h3
                className="font-bold text-2xl"
                animate={{ scale: activeIndex === index ? 1.05 : 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.question}
              </motion.h3>
              <motion.div
                variants={answerVariants}
                initial="hidden"
                animate={activeIndex === index ? "visible" : "hidden"}
                transition={{ duration: 0.3 }}
                className="mt-2 text-lg overflow-hidden"
              >
                {item.answer}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
