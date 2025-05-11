import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SigninPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      navigate("/account", {
        state: {
          fullName: storedUser.fullName,
          email: storedUser.email,
        },
      });
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  const isFormValid = email.trim() !== "" && password.trim() !== "";

  return (
    <div className="flex justify-center items-center h-screen px-5 bg-[#f7f7f7fb] box-border">
      <div className="w-full max-w-md bg-gray-100 p-8 rounded-lg shadow-md h-[97%]">
        <h2 className="text-[34px] font-bold text-[#222] leading-none mb-0">
          Signin to your
        </h2>
        <h3 className="text-[28px] font-bold text-[#222] leading-tight mb-5">
          PopX account
        </h3>

        <p className="text-sm text-[#7c7979] mb-1 mt-1">
          Lorem ipsum dolor sit amet,
        </p>
        <p className="text-sm text-[#7c7979] mb-4">
          consectetur adipiscing elit,
        </p>

        <form className="flex flex-col" onSubmit={handleLogin}>
          <label className="text-xs text-[#6e44ff] font-medium mt-4 mb-1">
            Email address
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="px-3 py-2 border border-[#dcdcdc] rounded-md text-sm outline-none"
          />

          <label className="text-xs text-[#6e44ff] font-medium mt-4 mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="px-3 py-2 border border-[#dcdcdc] rounded-md text-sm outline-none"
          />

          <button
            type="submit"
            className={`mt-10 text-white font-semibold text-sm py-3 rounded-md transition duration-300 ${
              isFormValid
                ? "bg-[#6e44ff] hover:bg-[#4e34c4] cursor-pointer"
                : "bg-[#b1b0b0] cursor-not-allowed"
            }`}
            disabled={!isFormValid}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default SigninPage;
