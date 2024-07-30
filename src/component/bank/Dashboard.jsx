import React from "react";
import Balance from "./Balance";

export default function Dashboard({ isLoggedIn, loggedInUser, balance,instance }) {
  return (
    <div className=" bg-[#0F141D] w-full h-full">
      <Balance balance={balance} instance={instance}/>
    </div>
  );
}

