import { Link } from 'react-router-dom';

const AppointHeader = () => {
  return (
    <div
      className="w-full h-1/5 p-4 flex justify-around items-center shadow-md"
      style={{
        height: '20vh',
        backgroundColor: '#A0937D', // Background color of the header
      }}
    >
      <Link
        to="/heartdiseasespage"
        className="px-6 py-3 bg-[#E9EED9] text-[#54473F] rounded hover:bg-[#54473F] hover:text-[#E9EED9] transition-all duration-300"
      >
        Cardiologist
      </Link>
      <Link
        to="/Heart2"
        className="px-6 py-3 bg-[#E9EED9] text-[#54473F] rounded hover:bg-[#54473F] hover:text-[#E9EED9] transition-all duration-300"
      >
        GeneralPhysician
      </Link>
      <Link
        to="/Heart3"
        className="px-6 py-3 bg-[#E9EED9] text-[#54473F] rounded hover:bg-[#54473F] hover:text-[#E9EED9] transition-all duration-300"
      >
        Gynaecologist
      </Link>
      <Link
        to="/Heart4"
        className="px-6 py-3 bg-[#E9EED9] text-[#54473F] rounded hover:bg-[#54473F] hover:text-[#E9EED9] transition-all duration-300"
      >
        Dentist
      </Link>
      <Link
        to="/Heart5"
        className="px-6 py-3 bg-[#E9EED9] text-[#54473F] rounded hover:bg-[#54473F] hover:text-[#E9EED9] transition-all duration-300"
      >
        Orthologist
      </Link>
      <Link
        to="/Heart6"
        className="px-6 py-3 bg-[#E9EED9] text-[#54473F] rounded hover:bg-[#54473F] hover:text-[#E9EED9] transition-all duration-300"
      >
        Pediatrics
      </Link>
    </div>
  );
};

export default AppointHeader;
