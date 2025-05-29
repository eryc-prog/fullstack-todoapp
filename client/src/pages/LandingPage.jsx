import React from "react";
import { useNavigate } from "react-router-dom";
import towdo from "/src/assets/towdo.jpg";

function LandingPage() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/dashboard"); // Navigate to the dashboard
  };

  return (
    <div
      className="h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${towdo})` }}
    >
      <div className="flex flex-col items-center justify-center h-screen p-auto m-auto text-center">
        <h1 className="mb-3 font-bold text-black sm:text-3xl md:text-4xl lg:text-5xl">
          My To-Do
        </h1>
        <p className="mb-6 text-black text-sm sm:text-sm md:text-xl lg:text-lg">
          Your Personal Task Management System
        </p>

        <button
          onClick={handleNavigate}
          className="px-6 py-3 bg-amber-400 text-white rounded-lg hover:bg-amber-500 font-semibold shadow-md"
        >
          Let's Get Started
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
