import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AccountSettings = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    fullName: "",
    email: "",
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const stateUser = location.state;

    if (stateUser?.fullName && stateUser?.email) {
      setUser(stateUser);
    } else if (storedUser?.fullName && storedUser?.email) {
      setUser({
        fullName: storedUser.fullName,
        email: storedUser.email,
      });
    } else {
      navigate("/signup");
    }
  }, [location.state, navigate]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f5f6fa]">
      <div className="bg-gray-100 shadow-md border border-gray-300 rounded w-[400px] h-[99vh] overflow-hidden">
        <h2 className="text-[20px] font-normal bg-white border-b border-white px-6 py-5">
          Account Settings
        </h2>

        <div className="p-6">
          <div className="flex items-center gap-5">
            <div className="relative w-[100px] h-[100px]">
              <img
                src="https://cdn.pixabay.com/photo/2016/11/14/17/39/person-1824144_1280.png"
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
              <div className="absolute bottom-0 right-0 bg-gray-700 p-1.5 rounded-full">
                <img
                  src="https://img.icons8.com/fluency-systems-filled/24/ffffff/camera.png"
                  alt="Camera Icon"
                />
              </div>
            </div>

            <div>
              <h3 className="m-0 text-lg font-semibold">{user.fullName}</h3>
              <p className="text-gray-600 mt-1">{user.email}</p>
            </div>
          </div>

          <p className="mt-4 text-sm text-[#1e1d1d] text-left leading-relaxed border-b border-dashed border-gray-300 pb-4">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
