import React from "react";
import Balance from "./Balance";
import SideBar from "../sideBar/SideBar";

export default function Dashboard({ isLoggedIn, loggedInUser, balance,instance }) {
  return (
    <div className="flex bg-[#0F141D] h-full w-full">
      <SideBar />
      <Balance balance={balance} instance={instance}/>
    </div>
  );
}

