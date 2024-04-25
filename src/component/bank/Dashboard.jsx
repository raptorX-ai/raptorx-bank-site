import React from "react";
import Balance from "./Balance";
import SideBar from "../sideBar/SideBar";

export default function Dashboard({ isLoggedIn, loggedInUser, balance }) {
  return (
    <div className="flex bg-[#0F141D]">
      <SideBar />
      <Balance balance={balance}/>
    </div>
  );
}

