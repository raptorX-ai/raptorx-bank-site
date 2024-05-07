import React, { useState } from "react";

const BeneficiaryForm = () => {
  const [name, setName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [ifscCode, setIfscCode] = useState("");

  const handleAddBeneficiary = () => {
    const beneficiaryData = {
      name,
      accountNumber,
      ifscCode,
    };

    console.log("Adding beneficiary:", beneficiaryData);

    // Get existing beneficiaries from local storage
    const existingBeneficiaries =
      JSON.parse(localStorage.getItem("beneficiaries")) || [];

    // Add new beneficiary to the existing list
    const updatedBeneficiaries = [...existingBeneficiaries, beneficiaryData];

    // Update local storage
    localStorage.setItem("beneficiaries", JSON.stringify(updatedBeneficiaries));

    console.log("Beneficiary added successfully.");

    // Reset form fields after adding beneficiary
    setName("");
    setAccountNumber("");
    setIfscCode("");
  };

  return (
    <div>
      <div className="bg-[#0F141D] h-screen w-[1200px] place-content-center">
        <div className="px-4 py-16 sm:px-6 lg:px-8 ">
          <div className="mx-auto max-w-lg">
            <form
              onSubmit={handleAddBeneficiary}
              className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
            >
              <div>
                <label htmlFor="addmoney" className="sr-only">
                  Name
                </label>

                <div className="relative">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Enter beneficary name"
                  />

                  <input
                    type="number"
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 mt-5 text-sm shadow-sm"
                    placeholder="Enter account number"
                  />

                  <input
                    type="text"
                    value={ifscCode}
                    onChange={(e) => setIfscCode(e.target.value)}
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 mt-5 text-sm shadow-sm"
                    placeholder="Enter IFSC code"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-br from-teal-400 to-blue-500 rounded-md border border-blue-500 px-4 py-2 text-white"
              >
                Add Beneficiary
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeneficiaryForm;
