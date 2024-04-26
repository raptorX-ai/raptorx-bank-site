import React from "react";
import Balance from "./Balance";
import SideBar from "../sideBar/SideBar";

export default function Dashboard({ isLoggedIn, loggedInUser, balance }) {
  return (
    <div className="flex bg-[#0F141D] h-[100] w-[100]">
      <SideBar />
      <Balance balance={balance} className=""/>
    </div>
  );
}

