import React, { useState } from "react";

const AtmWithdrawal = () => {
  return (
    <div className="w-full h-full flex justify-center items-center ">
      <div className="w-[500px] flex flex-col p-10">
        <input
          type="text"
          className="w- h-12 text-white rounded-lg border-gray-200 p-4 mt-20 text-sm bg-gray-700 outline-none"
          placeholder="Enter amount to withdrawl"
        />

        <button className=" bg-gradient-to-br from-teal-400 to-blue-500 rounded-md border border-blue-500 mt-5 px-4 py-2 text-white">
          Withdrawal
        </button>
      </div>
    </div>
  );
};

export default AtmWithdrawal;
