import React, { useState, useEffect } from "react";
import SideBar from "../sideBar/SideBar";
import users from "../core/users.json";
import { useNavigate } from "react-router-dom";

export default function Account({ }) {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [loggedInUserEmail, setLoggedInUserEmail] = useState(null);
  const [isLoading, setIsLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const navigate = useNavigate();

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("loggedInUserEmail");
    navigate('/login');
  };

  // Prevent going back after logout
  useEffect(() => {
    const handleBackButton = (event) => {
      event.preventDefault();
      navigate('/login');
    };

    window.history.pushState(null, '', window.location.pathname);
    window.addEventListener('popstate', handleBackButton);

    return () => window.removeEventListener('popstate', handleBackButton);
  }, []);

  useEffect(() => {
    const email = localStorage.getItem("loggedInUserEmail");
    console.log("Logged-in user email:", email);
    setLoggedInUserEmail(email);

    if (email) {
      const user = users.find(user => user.email === email);
      if (user) {
        setLoggedInUser(user);
      } else {
        setError("User not found"); 
      }
    }

    setIsLoading(false); 
  }, []);

  return (
    <div className="flex bg-[#020811] h-[100vh]">
      <div>
        <SideBar />
      </div>
      <div>
        <button onClick={handleLogout} className="logout-btn text-white m-10 mb-0 bg-[#949697] p-2 px-5 rounded-lg">Logout</button>

        {isLoading && (
          <div className="m-10">Loading user data...</div>
        )}
        {error && (
          <div className="m-10 text-red-500">{error}</div>
        )}
        {!isLoading && !error && (
          <div className="m-10 w-full border border-gray-700 rounded-lg">
            <div className="flow-root bg-[#020811] text-white border-white">
              <div className="divide-y divide-gray-700 text-sm">
                <div className="px-3 grid grid-cols-1 gap-1 py-3 even:bg-gray-700 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-400">Name</dt>
                  <dd className="text-gray-400 sm:col-span-2">{loggedInUser.name}</dd>
                </div>

                <div className="px-3 grid grid-cols-1 gap-1 py-3 even:bg-gray-700 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-400">Account No</dt>
                  <dd className="text-gray-400 sm:col-span-2">{loggedInUser.accountNumber}</dd>
                </div>

                <div className="px-3 grid grid-cols-1 gap-1 py-3 even:bg-gray-700 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-400">IFSC Code</dt>
                  <dd className="text-gray-400 sm:col-span-2">{loggedInUser.ifscCode}</dd>
                </div>

                <div className="px-3 grid grid-cols-1 gap-1 py-3 even:bg-gray-700 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-400">Email Id</dt>
                  <dd className="text-gray-400 sm:col-span-2">{loggedInUserEmail}</dd>
                </div>

                
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}