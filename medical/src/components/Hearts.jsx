import React from 'react';
import { useParams } from 'react-router-dom';

export default function Heart3() {
  // Use useParams to get the dynamic parameter (title)
  const { title } = useParams();

  // Example content: You can display more details based on the `title`
  return (
    <div className="px-8 py-16">
      <h1 className="text-4xl font-bold mb-4">Department: {title}</h1>
      <p className="text-lg">
        This page is all about the {title} department. Here you can provide more information
        about this department, showcase specific products, or any other details.
      </p>
    </div>
  );
}
