import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
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
  const [balance, setBalance] = useState(() => {
    const storedBalance = localStorage.getItem("balance");
    return storedBalance ? parseInt(storedBalance) : null;
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUserEmail, setLoggedInUserEmail] = useState(null);
  const [usersData, setUsersData] = useState(users);
  const [transactions, setTransactions] = useState([]);
  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
    console.log('Updated transactions:', transactions);
  };
  const navigate = useNavigate();

  useEffect(() => {
    const email = localStorage.getItem("loggedInUserEmail");
    if (email) {
      setIsLoggedIn(true);
      setLoggedInUserEmail(email);
    }
  }, []);

  const updateBalance = (newBalance) => {
    setBalance(newBalance);
    localStorage.setItem("balance", newBalance.toString());
  };

  const handleLogin = (email) => {
    setIsLoggedIn(true);
    setLoggedInUserEmail(email);
  };

  const handleAddMoney = (amount) => {
    const updatedBalance = balance + amount;
    updateBalance(updatedBalance);
    addTransaction({
      type: "Add Money",
      amount: amount,
      sender: loggedInUserEmail,
      receiver: loggedInUserEmail,
      balanceBefore: balance,
      balanceAfter: updatedBalance,
    });
    navigate("/success");
  };

  const handleSendMoney = (amount, recipientAccountNumber, recipientIFSC) => {
    if (balance < amount) {
      alert("Insufficient balance");
      return;
    }
  
    const updatedSenderBalance = balance - amount;
    updateBalance(updatedSenderBalance);
  
    const recipientIndex = usersData.findIndex(
      (user) =>
        user.accountNumber === recipientAccountNumber && user.ifscCode === recipientIFSC
    );
  
    if (recipientIndex === -1) {
      alert("Recipient account not found");
      return;
    }
  
    // const updatedRecipientBalance = usersData[recipientIndex].balance + amount;
    // console.log(usersData)
  
    // //Update recipient balance in usersData
    // const updatedUsersData = [...usersData];
    // updatedUsersData[recipientIndex] = {
    //   ...updatedUsersData[recipientIndex],
    //   balance: updatedRecipientBalance,
    // };
    // setUsersData(updatedUsersData);

    // const updatedRecipientBalance = balance + amount;
    // console.log(updatedRecipientBalance)

    // const updatedUsersData = updatedRecipientBalance;
    // updateBalance(updatedRecipientBalance);



    const updatedRecipientBalance = usersData[recipientIndex].balance + amount;
    console.log(usersData[recipientIndex])
  
    //Update recipient balance in usersData
    const updatedUsersData = updatedRecipientBalance;
    setUsersData(updatedUsersData);

    addTransaction({
      type: "Send Money",
      amount: amount,
      sender: loggedInUserEmail,
      receiver: updatedUsersData[recipientIndex],
      balanceBefore: balance,
      balanceAfter: updatedSenderBalance,
    });

  
    console.log("Recipient current balance:", usersData[recipientIndex].balance);
    console.log("Recipient updated balance:", updatedRecipientBalance);
  };

  return (
    <>
      
        <Routes>
          <Route path="/" element={<SignupPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage handleLogin={handleLogin} />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/transactions" element={<Transaction transactions={transactions}/>} />
          <Route
            path="/home"
            element={<Dashboard isLoggedIn={isLoggedIn} balance={balance}/>}
          />
          <Route
            path="/addmoney"
            element={<AddMoney loggedInUserEmail={loggedInUserEmail} handleAddMoney={handleAddMoney} addTransaction={addTransaction}/>}
          />
          <Route path="/success" element={<PaymentSuccess />} />
          <Route path="/account" element={<Account />} />
          <Route
            path="/sendmoney"
            element={
              <SendMoney
                addTransaction={addTransaction}
                loggedInUserEmail={loggedInUserEmail}
                handleSendMoney={handleSendMoney}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      
    </>
  );
}

export default App;