import React, { useState } from "react";
import SideBar from "../../component/sideBar/SideBar";

function Billing() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "cardNumber":
        setCardNumber(value);
        break;
      case "cardHolder":
        setCardHolder(value);
        break;
      case "expiryDate":
        setExpiryDate(value);
        break;
      case "cvv":
        setCvv(value);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="flex h-[100vh]">
        <SideBar />
        <div className="w-full bg-[#0F141D] flex justify-center items-center">
          <div className="flex space-x-28 justify-evenly items-center">
            <div className="relative flex flex-col items-center justify-center w-[400px] h-[250px] bg-gray-900 rounded-lg overflow-hidden shadow-lg">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-600 to-gray-800" />
              <div className="absolute top-2 left-2 w-10 h-6 bg-gray-800 rounded-lg" />
              <div className="absolute top-2 right-2 w-10 h-6 bg-gray-800 rounded-lg" />
              <div className="absolute top-12 left-4 text-gray-300 font-semibold text-lg">
                {cardNumber || "#### #### #### ####"}
              </div>
              <div className="absolute bottom-4 left-4 text-gray-300">
                <div className="mb-1">{`Card Holder`}</div>
                <div className="text-lg font-semibold">
                  {cardHolder || "Prem Mungle"}
                </div>
              </div>
              <div className="absolute bottom-4 right-4 text-gray-300">
                <div className="mb-1">{`Expires`}</div>
                <div className="text-lg font-semibold">
                  {expiryDate || "MM/YY"}
                </div>
              </div>
              <div className="absolute bottom-8 left-4 text-gray-300">
                {cvv || "CVV"}
              </div>
            </div>
            <form className="flex flex-col items-center space-y-4 mt-8 w-[500px]">
              <input
              
                type="text"
                name="cardNumber"
                placeholder="Card Number"
                value={cardNumber}
                onChange={handleInputChange}
                className="px-4 py-2 w-full bg-gray-800 text-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <input
                type="text"
                name="cardHolder"
                placeholder="Card Holder"
                value={cardHolder}
                onChange={handleInputChange}
                className="px-4 py-2 w-full bg-gray-800 text-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <input
                type="text"
                name="expiryDate"
                placeholder="MM/YY"
                value={expiryDate}
                onChange={handleInputChange}
                className="px-4 py-2 w-full bg-gray-800 text-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 "
              />
              <input
                type="text"
                name="cvv"
                placeholder="CVV"
                value={cvv}
                onChange={handleInputChange}
                className="px-4 py-2 w-full bg-gray-800 text-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 "
              />
              <button
                type="button"
                className="px-6 py-3 bg-[#020811] w-full text-white font-semibold rounded-lg shadow-lg hover:bg-[#020811] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Billing;
