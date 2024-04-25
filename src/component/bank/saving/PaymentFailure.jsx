import React, { useEffect } from "react";
import cross from "../../../assets/cross.png";
import { Link } from "react-router-dom";

export default function PaymentFailure() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "/home";
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col bg-[#020811] h-screen items-center place-content-center">
      <img src={cross} alt="Success GIF" width={300} className="" />
      <h1 className="text-lg text-gray-300 text-center">Something went wrong, payment failed!</h1>
      <p className="text-sm text-gray-700 text-center">
        Redirecting to <Link to="/home" className="underline">Home</Link> in 2 seconds...
      </p>
    </div>
  );
}
