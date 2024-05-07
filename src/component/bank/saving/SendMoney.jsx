import React, { useState, useEffect } from "react";
import favicon from "../../../assets/favicon.ico";
import { Link } from "react-router-dom";

const SendMoney = ({ handleSendMoney }) => {
  const [amount, setAmount] = useState("");
  const [receverName, setReceverName] = useState("");
  const [recipientAccountNumber, setRecipientAccountNumber] = useState("");
  const [recipientIFSC, setRecipientIFSC] = useState("");
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [selectedBeneficiary, setSelectedBeneficiary] = useState(null);

  // Fetch beneficiaries from local storage on component mount
  useEffect(() => {
    const storedBeneficiaries = JSON.parse(localStorage.getItem("beneficiaries")) || [];
    setBeneficiaries(storedBeneficiaries);
  }, []);

  // Update input fields when a beneficiary is selected from the dropdown
  useEffect(() => {
    if (selectedBeneficiary) {
      setReceverName(selectedBeneficiary.name);
      setRecipientAccountNumber(selectedBeneficiary.accountNumber);
      setRecipientIFSC(selectedBeneficiary.ifscCode);
    } else {
      // Reset input fields if no beneficiary is selected
      setReceverName("");
      setRecipientAccountNumber("");
      setRecipientIFSC("");
    }
  }, [selectedBeneficiary]);

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

  const handleBeneficiarySelect = (e) => {
    const selectedName = e.target.value;
    const selectedBeneficiary = beneficiaries.find(beneficiary => beneficiary.name === selectedName);
    setSelectedBeneficiary(selectedBeneficiary);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSendMoney(receverName, amount, recipientAccountNumber, recipientIFSC);
  };

  return (
    <>
      <div className="bg-[#020811] h- w- place-content-center">
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
                <select
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  onChange={handleBeneficiarySelect}
                  defaultValue=""
                >
                  <option value="" disabled hidden>Select Beneficiary</option>
                  {beneficiaries.map((beneficiary, index) => (
                    <option key={index} value={beneficiary.name} className="">
                      {beneficiary.name}
                    </option>
                  ))}
                </select>

              </div>

              <div>
                <input
                  type="number"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter Amount"
                  value={amount}
                  onChange={handleChangeAmount}
                />
              </div>

              <div>
                <input
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Account holder name"
                  value={receverName}
                  onChange={handleChangeReceverName}
                />
              </div>

              <div>
                <input
                  type="number"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Recipient's Account Number"
                  value={recipientAccountNumber}
                  onChange={handleChangeRecipientAccountNumber}
                />
              </div>

              <div>
                <input
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Recipient's IFSC Code"
                  value={recipientIFSC}
                  onChange={handleChangeRecipientIFSC}
                />
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
};

export default SendMoney;
