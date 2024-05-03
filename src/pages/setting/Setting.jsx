import SideBar from "../../component/sideBar/SideBar";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import React, { useState, useEffect } from "react";
import users from "../../component/core/users.json";
import { useNavigate } from "react-router-dom";
import Navbar from '../../component/common/Navbar'

const Setting = ({instance }) => {
  const [expandedDropdown, setExpandedDropdown] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [loggedInUserEmail, setLoggedInUserEmail] = useState(null);
  const [isLoading, setIsLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const navigate = useNavigate();

  const greeting = "Hello!"

  const toggleDropdown = (dropdownName) => {
    if (expandedDropdown === dropdownName) {
      setExpandedDropdown(null);
    } else {
      setExpandedDropdown(dropdownName);
    }
  };

  const handleEdit = () => {
    setEditMode(!editMode);
  };

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
    <>
      <div className="flex bg-[#0F141D]">
        <SideBar />
        <div className="flex flex-col w-full m-1">
          <Navbar loggedInUserName={loggedInUser ? loggedInUser.name : ""} greeting={greeting}/>
          <div className="flex flex-col space-y-4 bg-[#0F141D] w-full h-[120vh] p-10 text-gray-400 ">
          <h1 className="text-2xl font-semibold">Settings</h1>

          <div className="flex flex-col bg-[#020811] space-y-4 border-solid border-[1px] pr-5 pl-5 pt-5 pb-5 rounded-md border-gray-800">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-normal">Account Details</h2>
              <button
                className="focus:outline-none"
                onClick={() => toggleDropdown("accountDetails")}
              >
                {expandedDropdown === "accountDetails" ? (
                  <IoIosArrowUp className="w-6 h-6" />
                ) : (
                  <IoIosArrowDown className="w-6 h-6" />
                )}
              </button>
            </div>
            {expandedDropdown === "accountDetails" && (
              <div className="flex flex-col space-y-4 pb-2">
                {/* Account details */}
                <div className="flex justify-between items-center">
                  <div className="flex flex-col space-y-1">
                    <h3 className="text-base font-normal">Bank Account</h3>
                    <p className="text-sm">
                      Account in which you will receive payments
                    </p>
                  </div>
                  
                </div>
                {/* Editable bank details */}
                <div className="flex flex-col space-y-2">
                  <label className="text-sm" htmlFor="accountNumber">
                    Account Number
                  </label>
                  <input
                    id="accountNumber"
                    type="text"
                    value={loggedInUser.accountNumber}
                    readOnly={!editMode}
                    className="bg-[#0F141D] border border-gray-700 rounded-md px-3 py-2"
                  />
                  <label className="text-sm" htmlFor="accountName">
                    Name on your bank account
                  </label>
                  <input
                    id="accountName"
                    type="text"
                    value={loggedInUser.name}
                    readOnly={!editMode}
                    className="bg-[#0F141D] border border-gray-700 rounded-md px-3 py-2"
                  />
                  <label className="text-sm" htmlFor="ifscCode">
                    Bank IFSC code
                  </label>
                  <input
                    id="ifscCode"
                    type="text"
                    value={loggedInUser.ifscCode}
                    readOnly={!editMode}
                    className="bg-[#0F141D] border border-gray-700 rounded-md px-3 py-2"
                  />
                   <label className="text-sm" htmlFor="ifscCode">
                    Email Id
                  </label>
                  <input
                    id="emailId"
                    type="text"
                    value={loggedInUserEmail}
                    readOnly={!editMode}
                    className="bg-[#0F141D] border border-gray-700 rounded-md px-3 py-2"
                  />
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col bg-[#020811] space-y-4 border-solid border-[1px] pr-5 pl-5 pt-5 pb-5 rounded-md border-gray-800">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-normal">Account Settings</h2>
              <button
                className="focus:outline-none"
                onClick={() => toggleDropdown("account")}
              >
                {expandedDropdown === "account" ? (
                  <IoIosArrowUp className="w-6 h-6" />
                ) : (
                  <IoIosArrowDown className="w-6 h-6" />
                )}
              </button>
            </div>
            {expandedDropdown === "account" && (
              <div className="flex flex-col space-y-4">
                {/* Account details */}
                <div className="flex justify-between items-center">
                  <div className="flex flex-col space-y-1">
                    <h3 className="text-base font-semibold">Bank Account</h3>
                    <p className="text-sm">
                      Account in which you will receive payments
                    </p>
                  </div>
                  
                </div>
                
              </div>
            )}
          </div>
          
          <div className="flex flex-col bg-[#020811] space-y-4 border-solid border-[1px] pr-5 pl-5 pt-5 pb-5 rounded-md border-gray-800">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-normal">Payment Settings</h2>
              <button
                className="focus:outline-none"
                onClick={() => toggleDropdown("payment")}
              >
                {expandedDropdown === "payment" ? (
                  <IoIosArrowUp className="w-6 h-6" />
                ) : (
                  <IoIosArrowDown className="w-6 h-6" />
                )}
              </button>
            </div>
            {expandedDropdown === "payment" && (
              <div className="flex flex-col space-y-4">
                {/* Account details */}
                <div className="flex justify-between items-center">
                  <div className="flex flex-col space-y-1">
                    <h3 className="text-base font-semibold">Bank Account</h3>
                    <p className="text-sm">
                      Account in which you will receive payments
                    </p>
                  </div>
                 
                </div>
              </div>
            )}
          </div>

          
        </div>
        </div>
      </div>
    </>
  );
};

export default Setting;
