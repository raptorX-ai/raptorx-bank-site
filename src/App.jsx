import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import SignupPage from "./component/core/SignupPage";
import LoginPage from "./component/core/LoginPage";
import NotFound from "./component/NotFound";
import ForgotPassword from "./component/core/ForgotPassword";
import Transaction from "./pages/Transaction";
import Account from "./component/bank/Account";
import AddMoney from "./component/bank/saving/AddMoney";
import SendMoney from "./component/bank/saving/SendMoney";
import Dashboard from "./component/bank/Dashboard";
import PaymentSuccess from "./component/bank/saving/PaymentSuccess";
import users from "./component/core/users.json";

function App() {
  const [balance, setBalance] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState({});
  const [loggedInUser, setLoggedInUser] = useState();
  const [loggedInUserEmail, setLoggedInUserEmail] = useState();
  const [usersData, setUsersData] = useState(users);
  const [isLoading, setIsLoading] = useState(true); 
  const [error, setError] = useState(null); 

  const navigate = useNavigate(); 

  const updateBalance = (newBalance) => {
    setBalance(newBalance);
  };

  useEffect(() => {
    localStorage.setItem("balance", balance);
  }, [balance]);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(usersData));
  }, [usersData]);

  useEffect(() => {
    if (isLoggedIn && loggedInUserEmail) {
      const currentUser = usersData.find((user) => user.email === loggedInUserEmail);
      if (currentUser) {
        setBalance(currentUser.balance);
      }
    }
  }, [isLoggedIn, loggedInUserEmail, usersData]);

  const handleLogin = (email) => {
    console.log("Logging in with email:", email);
    const user = users.find((user) => user.email === email);
    if (user) {
      setIsLoggedIn(true);
      setLoggedInUser(user);
      setBalance(user.balance || 0); // Set balance here
    }
  };
  

  const handleReceiveMoney = (amount) => {
    // Update balance in usersData
    const updatedUsersData = usersData.map((user) => {
      if (user.email === loggedInUserEmail) {
        return { ...user, balance: user.balance + amount };
      }
      return user;
    });
    setUsersData(updatedUsersData);

    // Update balance state
    setBalance((prevBalance) => prevBalance + amount);
  };


  const handleSendMoney = (amount, recipientAccountNumber, recipientIFSC) => {
    if (balance < amount) {
      alert("Insufficient balance");
      return;
    }
  
    const senderIndex = usersData.findIndex(
      (user) => user.email === loggedInUserEmail
    );
  
    const recipientIndex = usersData.findIndex(
      (user) =>
        user.accountNumber === recipientAccountNumber &&
        user.ifscCode === recipientIFSC
    );
  
    if (recipientIndex === -1) {
      alert(
        "Recipient not found. Please check the account number and IFSC code."
      );
      return;
    }
  
    // Update sender's balance
    const updatedSenderBalance = balance - amount;
    setBalance(updatedSenderBalance);
  
    // Update recipient's balance
    const updatedUsersData = [...usersData];
    const recipientBalanceBeforeUpdate = parseFloat(
      updatedUsersData[recipientIndex].balance
    );
    console.log("Recipient Balance Before Update:", recipientBalanceBeforeUpdate);
    updatedUsersData[recipientIndex].balance = recipientBalanceBeforeUpdate + amount;
  
    const recipientBalanceAfterUpdate = parseFloat(
      updatedUsersData[recipientIndex].balance
    );
    console.log("Recipient Balance After Update:", recipientBalanceAfterUpdate);
  
    setUsersData(updatedUsersData);
  };


  
  const handleAddMoney = (amount) => {
    const updatedBalance = balance + amount;
    setBalance(updatedBalance);

    navigate("/success");
    setTimeout(() => {
      navigate("/home");
    }, 2000);
  };
  
  

  

  
  useEffect(() => {
    const email = localStorage.getItem("loggedInUserEmail");
    console.log("Logged-in user email:", email);
    setLoggedInUserEmail(email);

    if (email) {
      const user = users.find(user => user.email === email);
      if (user) {
        setLoggedInUser(user);
      } else {
        setError("User not found"); 
      }
    }

    setIsLoading(false); 
  }, []);
  


  return (
    <>
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage handleLogin={handleLogin}/>} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />

        <Route path="/transactions" element={<Transaction />} />
        <Route
          path="/home"
          element={<Dashboard isLoggedIn={isLoggedIn} loggedInUser={loggedInUser} usersData={usersData} loggedInUserEmail={loggedInUserEmail} balance={balance} />}
        />

        {/* <Route path="/home" element={<Dashboard usersData={usersData} isLoggedIn={isLoggedIn} balance={balance} />} /> */}
        <Route
          path="/addmoney"
          element={<AddMoney handleAddMoney={handleAddMoney} />}
        />
        <Route path="/success" element={<PaymentSuccess />} />
        <Route path="/account" element={<Account />} />

        <Route path="/sendmoney" element={<SendMoney
  loggedInUser={loggedInUser}
  handleSendMoney={handleSendMoney}
  updateBalance={updateBalance} // Pass updateBalance function as prop
/>} />
        


        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
