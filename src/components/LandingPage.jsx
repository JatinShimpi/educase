import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center h-screen px-5 bg-[#f9f9f9] box-border">
      <div className="bg-gray-100 h-screen p-8 rounded-xl shadow-md w-full max-w-md text-left max-h-[97%] overflow-y-auto flex flex-col justify-end">
        {/* Header Section */}
        <div >
          <div>
            <h2 className="text-[30px] font-bold mt-5 mb-2">Welcome to PopX</h2>
            <p className="text-sm text-[#7c7979]">
              Lorem ipsum dolor sit amet,
              <br />
              consectetur adipiscing elit,
            </p>
          </div>

          {/* Spacer to push buttons to bottom */}
          <div className="flex-grow" />

          {/* Button Section */}
          <div className="flex flex-col mt-6">
            <button
              onClick={() => navigate("/signup")}
              className="w-full bg-[#3b26f5] text-white text-base py-3 rounded-md mb-2"
            >
              Create Account
            </button>

            <button
              onClick={() => navigate("/signin")}
              className="w-full bg-[#d6b4f8] text-[#05000d] font-bold text-base py-3 rounded-md"
            >
              Already Registered? Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
