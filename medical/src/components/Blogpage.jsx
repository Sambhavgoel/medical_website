import React, { useEffect, useState } from 'react';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 
const url = 'https://us-doctors-and-medical-professionals.p.rapidapi.com/search_npi?npi=1033112214';
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '',
    'x-rapidapi-host': 'us-doctors-and-medical-professionals.p.rapidapi.com'
  }
};

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(url, options);
        const result = await response.json(); // Assuming the API returns JSON
        setBlogs(result); // Adjust if the API response has a different structure
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []); // Empty dependency array means this runs once when the component mounts.

  if (loading) {
    return <div className="text-center text-lg">Loading blogs...</div>;
  }

  if (error) {
    return <div className="text-center text-lg text-red-500">Error: {error.message}</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-semibold mb-6">Latest Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800">{blog.title}</h3>
            <p className="mt-2 text-gray-600">{blog.description}</p>
            <a
              href={blog.url} // Assuming 'url' contains the link to the blog
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-blue-600 hover:text-blue-800"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
