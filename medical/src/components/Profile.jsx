import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const Profile = () => {
  const [profile_image, set_profile_image] = useState(null);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const [errors, setErrors] = useState({
    name: '',
    age: '',
    phone: '',
    email: ''
  });

  const handle_image_change = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        set_profile_image(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    // GSAP animation for the image upload button
    gsap.fromTo(
      "#upload-button",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
    gsap.fromTo(
      ".label",
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1.2, stagger: 0.2, ease: "power3.out" }
    );
  }, []);

  const validateForm = () => {
    const newErrors = {
      name: '',
      age: '',
      phone: '',
      email: ''
    };

    if (!name) newErrors.name = 'Name is required';
    if (!age || age <= 0) newErrors.age = 'Age must be a positive number';
    if (!phone || !/^\d{10}$/.test(phone)) newErrors.phone = 'Phone number must be 10 digits';
    if (!email || !/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid';

    setErrors(newErrors);

    return !Object.values(newErrors).some(error => error);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Submit the form data
      console.log({ name, age, phone, email });
    }
  };

  return (
    <div className="min-h-screen w-full p-0 m-0 flex items-center justify-center bg-gradient-to-r from-[#A0937D] to-[#54473F]">
      <motion.div
        className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 p-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Left Side - Profile Image */}
        <div className="flex flex-col items-center md:items-start justify-start col-span-1">
          {profile_image ? (
            <motion.img
              src={profile_image}
              alt="Profile"
              className="w-40 h-40 rounded-full object-cover mb-6 shadow-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          ) : (
            <motion.div
              className="w-40 h-40 bg-gray-300 rounded-full mb-6 shadow-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            ></motion.div>
          )}
          <label
            htmlFor="upload-button"
            className="bg-[#54473F] text-[#E9EED9] px-6 text-xl py-3 rounded-lg focus:outline-none hover:bg-[#A0937D] cursor-pointer shadow-lg transition-transform transform hover:scale-105"
          >
            {profile_image ? 'Change Image' : 'Upload Image'}
          </label>
          <input
            id="upload-button"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handle_image_change}
          />
        </div>

        {/* Right Side - User Info in Single Column with Labels */}
        <motion.div
          className="md:col-span-2 flex flex-col justify-center w-full space-y-6"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="label block text-lg font-semibold text-[#E9EED9] mb-2"
              >
                Name
              </label>
              <motion.input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className={`w-full p-4 border border-[#E9EED9] rounded-lg focus:outline-none shadow-md ${errors.name ? 'border-red-500' : ''}`}
                whileFocus={{ scale: 1.05, borderColor: '#60A5FA' }}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            {/* Age Field */}
            <div>
              <label
                htmlFor="age"
                className="label block text-lg font-semibold text-[#E9EED9] mb-2"
              >
                Age
              </label>
              <motion.input
                id="age"
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Age"
                className={`w-full p-4 border border-[#E9EED9] rounded-lg focus:outline-none shadow-md ${errors.age ? 'border-red-500' : ''}`}
                whileFocus={{ scale: 1.05, borderColor: '#60A5FA' }}
              />
              {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
            </div>

            {/* Phone Number Field */}
            <div>
              <label
                htmlFor="phone"
                className="label block text-lg font-semibold text-[#E9EED9] mb-2"
              >
                Phone Number
              </label>
              <motion.input
                id="phone"
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number"
                className={`w-full p-4 border border-[#E9EED9] rounded-lg focus:outline-none shadow-md ${errors.phone ? 'border-red-500' : ''}`}
                whileFocus={{ scale: 1.05, borderColor: '#60A5FA' }}
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="label block text-lg font-semibold text-[#E9EED9] mb-2"
              >
                Email
              </label>
              <motion.input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className={`w-full p-4 border border-[#E9EED9] rounded-lg focus:outline-none shadow-md ${errors.email ? 'border-red-500' : ''}`}
                whileFocus={{ scale: 1.05, borderColor: '#60A5FA' }}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#54473F] my-10 text-xl text-[#E9EED9] px-8 py-3 rounded-lg focus:outline-none hover:bg-[#A0937D] shadow-lg transition-transform transform hover:scale-105"
            >
              Submit
            </button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Profile;
