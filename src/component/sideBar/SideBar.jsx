import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import { FaCreditCard } from "react-icons/fa6";
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { GrTransaction } from "react-icons/gr";
import { IoMdPersonAdd } from "react-icons/io";

import mainLogo from "../../assets/mainLogo.svg";
import Logo from "../../assets/favicon.ico";

const SideBar = () => {
  const location = useLocation();

  return (
    <>
      <div className="flex bg-[#020811] h-auto w-40 ">
        <ul className="border-e">
          <NavLink to="" exact activeClassName="active">
            <img src={mainLogo} className="mt-5 px-4" alt="Main Logo" />
          </NavLink>
          <li className="mt-4">
            <NavLink
              to="/home"
              className={`flex items-center gap-2 px-4 py-3 w-40 text-gray-400 ${
                location.pathname === "/home" ? "active border-s-[3px] border-gray-500" : ""
              }`}
              activeClassName="active"
            >
              <IoHomeOutline size={16} />
              <span className="text-sm font-medium"> Home </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/transactions"
              className={`flex items-center gap-2 px-4 py-3 text-gray-500  hover:bg-[#0F141D] hover:text-gray-400 ${
                location.pathname === "/transactions" ? "active border-s-[3px] border-gray-500" : ""
              }`}
              activeClassName="active"
            >
              <GrTransaction />
              <span className="text-sm font-medium"> Transactions </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/debitcard"
              className={`flex items-center gap-2 px-4 py-3 text-gray-500  hover:bg-[#0F141D] hover:text-gray-400 ${
                location.pathname === "/debitcard" ? "active border-s-[3px] border-gray-500" : ""
              }`}
              activeClassName="active"
            >
              <FaCreditCard />
              <span className="text-sm font-medium"> Debit Card </span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/addbeneficiary"
              className={`flex items-center gap-2 px-4 py-3 text-gray-500  hover:bg-[#0F141D] hover:text-gray-400 ${
                location.pathname === "/addbeneficiary" ? "active border-s-[3px] border-gray-500" : ""
              }`}
              activeClassName="active"
            >
              <IoMdPersonAdd />
              <span className="text-sm font-medium"> Add Beneficary </span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/account"
              className={`flex items-center gap-2 px-4 py-3 text-gray-500  hover:bg-[#0F141D] hover:text-gray-400 ${
                location.pathname === "/account" ? "active border-s-[3px] border-gray-500" : ""
              }`}
              activeClassName="active"
            >
              <MdAccountCircle size={18} />
              <span className="text-sm font-medium"> Account </span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/setting"
              className={`flex items-center gap-2 px-4 py-3 text-gray-500  hover:bg-[#0F141D] hover:text-gray-400 ${
                location.pathname === "/setting" ? "active border-s-[3px] border-gray-500" : ""
              }`}
              activeClassName="active"
            >
              <IoSettingsOutline size={18} />
              <span className="text-sm font-medium"> Settings </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
