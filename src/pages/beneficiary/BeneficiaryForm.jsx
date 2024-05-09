import React, { useState } from "react";

const BeneficiaryForm = () => {
  const [name, setName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [ifscCode, setIfscCode] = useState("");

  const handleAddBeneficiary = (e) => {
    e.preventDefault();

    const beneficiaryData = {
      name,
      accountNumber,
      ifscCode,
    };

    console.log("Adding beneficiary:", beneficiaryData);
    const existingBeneficiaries =
      JSON.parse(localStorage.getItem("beneficiaries")) || [];

    const updatedBeneficiaries = [...existingBeneficiaries, beneficiaryData];
    localStorage.setItem("beneficiaries", JSON.stringify(updatedBeneficiaries));

    console.log("Beneficiary added successfully.");
    setName("");
    setAccountNumber("");
    setIfscCode("");
  };

  return (
    <div className="flex items-center justify-center">
      <div className="max-w-md w-full py-8 rounded-lg bg-gray-500 mt-6">
        {/* <h2 className="text-2xl font-semibold text-white text-center mb-6">Add Beneficiary</h2> */}
        <form onSubmit={handleAddBeneficiary} className="space-y-4 w-[400px] px-4 text-white outline-none">
          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full h-12 rounded-lg border-gray-200 p-4 text-sm bg-gray-700 outline-none"
              placeholder="Enter beneficiary name"
            />
          </div>
          <div>
            <input
              type="number"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              className="w-full h-12 rounded-lg border-gray-200 p-4 text-sm bg-gray-700 outline-none"
              placeholder="Enter account number"
            />
          </div>
          <div>
            <input
              type="text"
              value={ifscCode}
              onChange={(e) => setIfscCode(e.target.value)}
              className="w-full h-12 rounded-lg border-gray-200 p-4 text-sm bg-gray-700 outline-none"
              placeholder="Enter IFSC code"
            />
          </div>
          <button
            type="submit"
            className="w-full h-12 bg-gray-800 rounded-md px-4 py-2 text-white text-sm"
          >
            Add Beneficiary
          </button>
        </form>
      </div>
    </div>
  );
};

export default BeneficiaryForm;
