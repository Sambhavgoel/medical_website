import {React,useState} from 'react';
import imge1 from "../assets//brian-j-tromp-gQIoRjakTZI-unsplash.jpg";
import imge2 from "../assets/ozkan-guner-AduzI0N9iRI-unsplash.jpg";
import imge3 from '../assets/humberto-chavez-FVh_yqLR9eA-unsplash.jpg';

// import WalletConnect from '../components/WalletConnect'; 





const doctors = [
  {
    name: 'Dr. Divija Bunga',
    experience: '9 years of Experience',
    qualification: 'MBBS, MD - Psychiatry',
    clinic: 'Private clinic, Hyderabad',
    rating: 4.7,
    reviews: '692 Patient Stories',
    fee: 1, // Fee in Ether (Replace with actual currency if needed)
    profileUrl: '#',
    image: imge3,  // Added image for this doctor
  },
  {
    name: 'Dr. Narayanan A',
    experience: '9 years of Experience',
    qualification: 'MBBS, MD - DVL',
    clinic: 'Crispr Skin and Hair Clinic, Chennai',
    rating: 4.5,
    reviews: '66 Patient Stories',
    fee: 1,
    profileUrl: '#',
    image: imge2,  // Added image for this doctor
  },
  {
    name: 'Dr. Ananya Reddy',
    experience: '5 years of Experience',
    qualification: 'MBBS, MD - Dermatology',
    clinic: 'Skin and Laser Clinic, Bengaluru',
    rating: 4.9,
    reviews: '134 Patient Stories',
    fee: 1, // Fee in Ether (Replace with actual currency if needed)
    profileUrl: '#',
    image: imge1,  // Added image for this doctor
  }
];

const DoctorCard = ({ doctor }) => {
  if (!doctor) {
    return null; // Safeguard if doctor object is not available
  }
  const [showWalletConnect, setShowWalletConnect] = useState(false);

  const handleClick = () => {
    setShowWalletConnect((prev) => !prev);
  };


  const handlePayment = () => {
    const options = {
      key: "rzp_test_meSDnGTZeI5qCq", // Replace with your Razorpay key
      amount: doctor.fee * 100, // Convert fee to smallest currency unit (paise for INR)
      currency: "INR",
      name: doctor.name,
      description: `Consultation Fee for ${doctor.name}`,
      image: "https://your-logo-url.com/logo.png", // Optional: Add your logo URL
      handler: function (response) {
        alert(
          `Payment successful! Payment ID: ${response.razorpay_payment_id}`
        );
        console.log(response);
      },
      prefill: {
        name: "Your Name", // Prefill the user's name
        email: "email@example.com", // Prefill the user's email
        contact: "1234567890", // Prefill the user's contact number
      },
      theme: {
        color: "#825B32", // Customize the payment UI theme
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();

    // Handle Razorpay payment modal closure
    rzp.on("payment.failed", function (response) {
      alert("Payment failed. Please try again.");
      console.error(response.error);
    });
  };

  return (
    <div className="bg-[#A0937D] shadow-lg rounded-lg p-6 w-full flex flex-col items-center text-center space-y-4 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-[#54473F]">
      <div className="w-32 h-32 rounded-full bg-gray-200 overflow-hidden mb-4">
        <img
          src={doctor.image} // Dynamically setting the image here
          alt={doctor.name || "Doctor"}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="space-y-2">
        <h3 className="text-2xl font-semibold text-[#E9EED9]">
          {doctor.name || "Name not available"}
        </h3>
        <p className="text-md text-[#E9EED9]">
          {doctor.experience || "Experience not available"}
        </p>
        <p className="text-md text-[#E9EED9]">
          {doctor.qualification || "Qualification not available"}
        </p>
        <p className="text-md text-[#E9EED9]">
          {doctor.clinic || "Clinic not available"}
        </p>
        <div className="flex justify-center items-center space-x-2 mt-2">
          <span className="bg-[#54473F] text-[#E9EED9] rounded-full px-3 py-1 text-xs font-semibold">
            {doctor.rating || "N/A"}
          </span>
        </div>
      </div>

      <div className="space-y-2 mt-4">
        <p className="text-lg font-semibold text-[#E9EED9]">Consultation Fee</p>
        <p className="text-2xl font-bold text-[#E9EED9]">₹ {doctor.fee || "0"}</p>

        {/* Pay Now button */}
        <button
          onClick={handlePayment}
          className="px-6 py-2 bg-[#54473F] text-[#E9EED9] rounded-full text-lg font-semibold transition duration-200 hover:bg-[#A0937D] hover:scale-105"
        >
          Pay Now
        </button>
         {/* Button to toggle WalletConnect visibility */}
      {/* <button
        onClick={handleClick}
        className="py-2 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        {showWalletConnect ? 'Hide Wallet' : 'Connect Wallet'}
      </button>

      {/* Conditionally render the WalletConnect component */}
      {/* {showWalletConnect && <WalletConnect />} */} 
      </div>
    </div>
  );
};


const DoctorList = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#825B32] py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-[#E9EED9] mb-12 text-center">Our Doctors</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <DoctorCard key={index} doctor={doctor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorList;
