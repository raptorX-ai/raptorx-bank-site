import React, { useEffect, useState } from "react";
import SideBar from "../component/sideBar/SideBar";

export default function Transaction({email, transactions }) {
  

  return (
    <div className="bg-[#020811] h-screen flex">
      <SideBar />
      <div className="m-10 text-white">
      <h2 className="text-xl font-bold mb-4">Transaction History</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border border-collapse border-gray-300 rounded-lg">
          <thead>
            <tr>
              <th className="px-4 py-2  border-b font-bold text-left">Date & Time</th>
              <th className="px-4 py-2  border-b font-bold text-left">Sender</th>
              <th className="px-4 py-2  border-b font-bold text-left">Receiver</th>
              <th className="px-4 py-2  border-b font-bold text-left">CR/DB</th>
              <th className="px-4 py-2  border-b font-bold text-left">Amount</th>
              <th className="px-4 py-2  border-b font-bold text-left">Current Balance</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-500' : ''}>
                <td className="px-4 py-2 border">{transaction.date}</td>
                <td className="px-4 py-2 border">{transaction.sender}</td>
                <td className="px-4 py-2 border">{transaction.receiver}</td>
                <td className="px-4 py-2 border">{transaction.type}</td>
                <td className="px-4 py-2 border">{transaction.amount}</td>
                <td className="px-4 py-2 border">{transaction.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </div>
  );
}