import { LuIndianRupee } from "react-icons/lu";
import { IoIosAdd } from "react-icons/io";
import Dropdown from "../Dropdown";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { BiTransfer } from "react-icons/bi";
import axios from 'axios';

export default function Balance({ instance }) {
  const [balance, setBalance] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await axios.get('/balance/:userId');
        setBalance(response.data.balance);
      } catch (error) {
        setError('Failed to fetch balance');
      }
    };

    fetchBalance();
  }, []);

  return (
    <>
      <div className="flex flex-col w-full h-full">
        {/* <Navbar instance={instance} /> */}
        <div className="flex flex-col mt-5 gap-4">
          
          <Dropdown title="Saving Account" className="">
            <div className="px-4 mx-10 bg-[#020811] text-gray-400">
              <div className="flex p-2 pb-4">
                <LuIndianRupee size={24} />
                <div className="px-2">
                  {error ? `Error: ${error}` : (balance === null ? 'Loading...' : `${balance}`)}
                </div>
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
                      <BiTransfer size={30} />
                    </div>
                  </Link>
                  <p className="mt-2 flex justify-center mb-3 w-[200px]">
                    Account transfer
                  </p>
                </div>
              </div>
            </div>
          </Dropdown>
          <Dropdown title="Credit Card">
            <div className="px-4 mx-10 bg-[#020811] text-gray-500 pb-5">
              <p>You are not eligible for credit card now</p>
            </div>
          </Dropdown>
          <Dropdown title="Loans">
            <div className="px-4 mx-10 bg-[#020811] text-gray-500 pb-5">
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
        </div>
      </div>
    </>
  );
}
