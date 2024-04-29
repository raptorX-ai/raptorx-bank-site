import React, { useState } from "react";
import favicon from "../../../assets/favicon.ico";
import { Link } from "react-router-dom";

export default function SendMoney({ handleSendMoney, addTransaction }) {
  const [amount, setAmount] = useState("");
  const [receverName, setReceverName] = useState("");
  const [recipientAccountNumber, setRecipientAccountNumber] = useState("");
  const [recipientIFSC, setRecipientIFSC] = useState("");

  const handleChangeReceverName = (e) => {
    setReceverName(e.target.value);
  };

  const handleChangeAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleChangeRecipientAccountNumber = (e) => {
    setRecipientAccountNumber(e.target.value);
  };

  const handleChangeRecipientIFSC = (e) => {
    setRecipientIFSC(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSendMoney(receverName, amount, recipientAccountNumber, recipientIFSC);
  };

  return (
    <>
      <div className="bg-[#020811] h-screen w-screen place-content-center">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 ">
          <div className="mx-auto max-w-lg">
            <img
              className="mx-auto h-10 w-auto"
              src={favicon}
              alt="RaptorX.ai"
            />

            <form
              onSubmit={handleSubmit}
              className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
            >
              <div>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Account holder name"
                    value={receverName}
                    onChange={handleChangeReceverName}
                  />
                </div>
              </div>

              <div>
                <div className="relative">
                  <input
                    type="number"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Enter Amount"
                    value={amount}
                    onChange={handleChangeAmount}
                  />
                </div>
              </div>

              <div>
                <div className="relative">
                  <input
                    type="number"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Recipient's Account Number"
                    value={recipientAccountNumber}
                    onChange={handleChangeRecipientAccountNumber}
                  />
                </div>
              </div>

              <div>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Recipient's IFSC Code"
                    value={recipientIFSC}
                    onChange={handleChangeRecipientIFSC}
                  />
                </div>

                <p className="text-right mt-2 text-sm text-gray-500">
                  <Link to="" className="">
                    Search IFSC
                  </Link>
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-br from-teal-400 to-blue-500 rounded-md border border-blue-500 px-4 py-2 text-white"
              >
                Send Money
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}