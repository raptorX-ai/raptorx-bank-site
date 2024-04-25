import { LuIndianRupee } from "react-icons/lu";
import { IoIosAdd } from "react-icons/io";
import Dropdown from "../Dropdown";
import { TiContacts } from "react-icons/ti";
import { MdOutlineGpsFixed } from "react-icons/md";
import { FaCreditCard } from "react-icons/fa";
import PieChart from "./PieChart";
import { Link } from "react-router-dom";
import React, { Component, useState } from "react";
import AddMoney from "./saving/AddMoney";

const data = {
  labels: ["Food", "Travel", "Miscellaneous", "Medical"],
  datasets: [
    {
      data: [300, 150, 200, 100],
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)", // Red for food
        "rgba(54, 162, 235, 0.5)", // Blue for travel
        "rgba(255, 206, 86, 0.5)", // Yellow for miscellaneous
        "rgba(75, 192, 192, 0.5)", // Green for medical
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export default function Balance({ balance }) {
  
  return (
    <>
      <div className="flex flex-col mt-5 gap-4 h-[100] w-screen">
        <Dropdown title="Saving Account">
          <div className="px-4 mx-5 bg-[#020811] text-gray-400">
            <div className="flex p-2 pb-4 ">
              <LuIndianRupee size={24} />
              <div className="px-2"> {balance}</div>
            </div>

            <div className="flex justify-center gap-10 mx-5 pb-5">
              <div className="flex flex-col w-28 justify-center items-center">
                <Link to="/addmoney">
                  <div className="bg-[#0F141D] w-12 p-2 flex justify-center rounded-md">
                    <IoIosAdd size={30} />
                  </div>
                </Link>

                <p className="mt-2 flex justify-center mb-3">Add money</p>
              </div>

              <div className="flex flex-col w-28 justify-center items-center">
                <Link to="/sendmoney">
                  <div className="bg-[#0F141D] w-12 p-2 flex justify-center rounded-md">
                    <TiContacts size={30} />
                  </div>
                </Link>
                <p className="mt-2 flex justify-center mb-3">Pay to mobile</p>
              </div>

              <div className="flex flex-col w-28 justify-center items-center">
                <div className="bg-[#0F141D] w-12 p-2 flex justify-center rounded-md">
                  <MdOutlineGpsFixed size={30} />
                </div>
                <p className="mt-2 flex justify-center mb-3">Fixed Deposite</p>
              </div>

              <div className="flex flex-col w-28 justify-center items-center">
                <div className="bg-[#0F141D] w-12 p-2 flex justify-center rounded-md">
                  <FaCreditCard size={30} />
                </div>
                <p className="mt-2 flex justify-center mb-3">Debit Card</p>
              </div>
            </div>
          </div>
        </Dropdown>
        <Dropdown title="Credit Card">
          <div className="px-4 mx-5 bg-[#020811] text-gray-500 pb-5">
            <p>You are not eligible for credit card now</p>
          </div>
        </Dropdown>
        <Dropdown title="Loans">
          <div className="px-4 mx-5 bg-[#020811] text-gray-500 pb-5">
            <p>Get Instant Loan up to</p>
            <div className="flex p-2 pb-4 items-center">
              <LuIndianRupee size={24} />
              <div className="px-2 text-lg font-bold">5,00,000</div>
            </div>
            <button className=" bg-gradient-to-br from-teal-400 to-blue-500 rounded-md border border-blue-500 px-4 py-2 text-white">
              Explore Now
            </button>
          </div>
        </Dropdown>

        <PieChart data={data} />
      </div>
    </>
  );
}