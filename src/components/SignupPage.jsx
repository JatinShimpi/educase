import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    company: "",
    agency: "",
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "radio" ? value : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("user", JSON.stringify(formData));

    navigate("/account", {
      state: {
        fullName: formData.fullName,
        email: formData.email,
      },
    });
  };

  return (
    <div className="flex justify-center items-center h-screen px-5 bg-[#f7f7f7fb] box-border">
      <div className="w-full max-w-md bg-gray-100 p-8 rounded-lg shadow-md h-[97%]">
        <h2 className="text-[34px] font-bold text-[#222] leading-none mb-0">
          Create your
        </h2>
        <h3 className="text-[34px] font-bold text-[#222] leading-tight mb-6">
          PopX account
        </h3>

        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label className="text-xs text-[#6e44ff] font-medium mt-4 mb-1">
            Full Name*
          </label>
          <input
            type="text"
            name="fullName"
            placeholder="Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="px-3 py-2 border border-[#dcdcdc] rounded-md text-sm outline-none"
          />

          <label className="text-xs text-[#6e44ff] font-medium mt-4 mb-1">
            Phone number*
          </label>
          <input
            type="text"
            name="phone"
            placeholder="Phone number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="px-3 py-2 border border-[#dcdcdc] rounded-md text-sm outline-none"
          />

          <label className="text-xs text-[#6e44ff] font-medium mt-4 mb-1">
            Email address*
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="px-3 py-2 border border-[#dcdcdc] rounded-md text-sm outline-none"
          />

          <label className="text-xs text-[#6e44ff] font-medium mt-4 mb-1">
            Password*
          </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="px-3 py-2 border border-[#dcdcdc] rounded-md text-sm outline-none"
          />

          <label className="text-xs text-[#6e44ff] font-medium mt-4 mb-1">
            Company name
          </label>
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
            className="px-3 py-2 border border-[#dcdcdc] rounded-md text-sm outline-none"
          />

          <p className="mt-5 text-sm font-medium">Are you an Agency?*</p>
          <div className="flex gap-4 mt-2 mb-6">
            <label className="text-sm flex items-center gap-2">
              <input
                type="radio"
                name="agency"
                value="Yes"
                onChange={handleChange}
                required
              />
              Yes
            </label>
            <label className="text-sm flex items-center gap-2">
              <input
                type="radio"
                name="agency"
                value="No"
                onChange={handleChange}
                required
              />
              No
            </label>
          </div>

          <button
            type="submit"
            className="mt-4 bg-[#6e44ff] hover:bg-[#5a34d2] text-white font-semibold text-sm py-3 rounded-md transition duration-300"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
