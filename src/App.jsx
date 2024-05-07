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
import RaptorX from "raptorx.ai";
import Setting from "./pages/setting/Setting";
import Billing from "./pages/billing/Billing";
import AddBeneficary from './pages/beneficiary/AddBeneficiary'
import Navbar from "./component/common/Navbar";

function App({}) {
  const [balance, setBalance] = useState(() => {
    const storedBalance = localStorage.getItem("balance");
    return storedBalance ? parseInt(storedBalance) : null;
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUserEmail, setLoggedInUserEmail] = useState(null);
  const [usersData, setUsersData] = useState(users);
  const [transactions, setTransactions] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true); 

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
    console.log("Updated transactions:", transactions);
  };
  const navigate = useNavigate();

  const now = new Date();

  const time = now.toLocaleTimeString('en-US', {hour:'2-digit', minute: '2-digit'});
  const date = (new Intl.DateTimeFormat('en-US', {dateStyle: 'full'})).format(now);

  const formattedDateTime = time + ', ' + date;

  const inpval = { email: "example@example.com" };
  const instance = new RaptorX({
      api_key: "9a60f01e9b7d2d5d37a1b134241311fd7dfdbc38",
    });

  useEffect(() => {

    const captureLoginEvent = () => {
      if (inpval && inpval.email) {
        instance.capture("email", inpval.email);
      }
    };

    captureLoginEvent();
  }, [inpval.email]);



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

  const handleLogin = ({ email }) => {
    setIsLoggedIn(true);
    setLoggedInUserEmail(email);
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

  const handleAddMoney = (amount) => {
    const updatedBalance = balance + amount;
    updateBalance(updatedBalance);
    navigate("/success");
    setTimeout(() => {
      navigate("/home");
    }, 2000);

    const transaction = {
      date: formattedDateTime,
      type: "Credited",
      amount: amount,
      sender: loggedInUserEmail,
      receiver: "Self",
      balance: updatedBalance,
    };
  
    const existingTransactions = JSON.parse(localStorage.getItem("transactions")) || [];
    const updatedTransactions = [...existingTransactions, transaction];
    localStorage.setItem("transactions", JSON.stringify(updatedTransactions));
    addTransaction(transaction);
  };

  const handleSendMoney = (
    receiverName,
    amount,
    recipientAccountNumber,
    recipientIFSC
  ) => {
    console.log("Current balance:", balance);
    if (balance < amount) {
      alert("Insufficient balance");
      return;
    }
  
    const updatedSenderBalance = balance - amount;
    updateBalance(updatedSenderBalance);
  
    const updatedUsersData = usersData.map(user => {
      const updatedUser = { ...user };
      updatedUser.balance = parseFloat(updatedUser.balance) + parseFloat(amount);
      return updatedUser;
    });
  
    setUsersData(updatedUsersData);

    navigate("/success");
    setTimeout(() => {
      navigate("/home");
    }, 2000);
  
    const currentDate = new Date().toISOString();
    instance.getTransaction({
      user_fullname: loggedInUser.name,
      from_account: loggedInUser.accountNumber,
      to_account: "", 
      transactiondate: currentDate,
      status: "complete",
      bank_ecom_indicator: "bank",
      transactionamount: amount,
      transactioncurrency: "INR",
      transaction_medium:"web",
      bank_beneficiary_name:receiverName,
      bank_beneficiary_account_no:recipientAccountNumber,
      user_id: instance.retrieveCustomerId(),
    });
    
  
    const transaction = {
      date: formattedDateTime,
      type: "Debited",
      amount: amount,
      sender: loggedInUserEmail,
      receiver: receiverName,
      balance: updatedSenderBalance,
    };
  
    const existingTransactions = JSON.parse(localStorage.getItem("transactions")) || [];
    const updatedTransactions = [...existingTransactions, transaction];
    localStorage.setItem("transactions", JSON.stringify(updatedTransactions));
  
    addTransaction(transaction);
  };




  // const handleSendMoney = (
  //   receiverName,
  //   recipientAccountNumber,
  //   amount,
  // ) => {
  //   if (balance < amount) {
  //     alert("Insufficient balance");
  //     return;
  //   }
  
  //   const updatedSenderBalance = balance - amount;
  //   updateBalance(updatedSenderBalance);
  
  //   const updatedUsersData = usersData.map(user => {
  //     const updatedUser = { ...user };
  //     updatedUser.balance = parseFloat(updatedUser.balance) + parseFloat(amount);
  //     return updatedUser;
  //   });
  
  //   setUsersData(updatedUsersData);
  
  //   const currentDate = new Date().toISOString();
  //   instance.getTransaction({
  //     user_fullname: loggedInUser.name,
  //     from_account: loggedInUser.accountNumber,
  //     to_account: "", 
  //     transactiondate: currentDate,
  //     status: "complete",
  //     bank_ecom_indicator: "bank",
  //     transactionamount: amount,
  //     transactioncurrency: "INR",
  //     transaction_medium:"web",
  //     bank_beneficiary_name:receiverName,
  //     bank_beneficiary_account_no:recipientAccountNumber,
  //     user_id: instance.retrieveCustomerId(),
  //   });
  
  //   navigate("/success");
  //   setTimeout(() => {
  //     navigate("/home");
  //   }, 2000);
  
  //   const transaction = {
  //     date: formattedDateTime,
  //     type: "Debited",
  //     amount: amount,
  //     sender: loggedInUserEmail,
  //     receiver: receiverName, // Removed recipient account number from receiver field
  //     balance: updatedSenderBalance,
  //   };
  
  //   const existingTransactions = JSON.parse(localStorage.getItem("transactions")) || [];
  //   const updatedTransactions = [...existingTransactions, transaction];
  //   localStorage.setItem("transactions", JSON.stringify(updatedTransactions));
  
  //   addTransaction(transaction);
  // };
  

  return (
    <>
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/signup" element={<SignupPage />} />

        <Route
          path="/login"
          element={<LoginPage handleLogin={handleLogin} instance={instance}/>}
        />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route
          path="/transactions"
          element={<Transaction loggedInUserEmail={loggedInUserEmail} transactions={transactions} instance={instance} />}
        />
        <Route
          path="/home"
          element={<Dashboard isLoggedIn={isLoggedIn} balance={balance} instance={instance}/>}
        />
        <Route path="/setting" element={<Setting instance={instance}  />} />
        <Route path="/debitcard" element={<Billing />} />
        <Route path="/addbeneficiary" element={<AddBeneficary instance={instance}  />} />
        
        <Route
          path="/addmoney"
          element={
            <AddMoney
              loggedInUserEmail={loggedInUserEmail}
              handleAddMoney={handleAddMoney}
              addTransaction={addTransaction}
            />
          }
        />
        <Route path="/success" element={<PaymentSuccess />} />
        <Route path="/account" element={<Account  instance={instance}/>} />
        <Route
          path="/sendmoney"
          element={
            <SendMoney
              addTransaction={addTransaction}
              loggedInUserEmail={loggedInUserEmail}
              handleSendMoney={handleSendMoney}
              instance={instance}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;