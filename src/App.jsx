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

function App({}) {
  const [balance, setBalance] = useState(() => {
    const storedBalance = localStorage.getItem("balance");
    return storedBalance ? parseInt(storedBalance) : null;
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUserEmail, setLoggedInUserEmail] = useState(null);
  const [loggedInUserName, setLoggedInUserName] = useState(null);
  const [usersData, setUsersData] = useState(users);
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
    console.log("Updated transactions:", transactions);
  };
  const navigate = useNavigate();
  //const currentDate = new Date().toISOString();

  const formatDate = (date) => {
    const dd = String(date.getDate()).padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const yyyy = date.getFullYear();
    return dd + ":" + mm + ":" + yyyy;
  };

  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return hours + ":" + minutes;
  };

  const getCurrentDateTime = () => {
    const currentDate = new Date();
    const formattedDate = formatDate(currentDate);
    const formattedTime = formatTime(currentDate);
    return formattedDate + ", " + formattedTime;
  };

  const formattedDateTime = getCurrentDateTime();

  const inpval = { email: "example@example.com" };

  useEffect(() => {
    const raptorXInstance = new RaptorX({
      api_key: "9a60f01e9b7d2d5d37a1b134241311fd7dfdbc38",
    });

    const captureLoginEvent = () => {
      if (inpval && inpval.email) {
        raptorXInstance.capture("email", inpval.email);
      }
    };

    captureLoginEvent();

    const amounts = { grand_total: 100 };

    raptorXInstance.getTransaction({
      user_fullname: inpval.name,
      transactiondate: formattedDateTime,
      status: "complete",
      transactionamount: amounts?.grand_total,
      user_id: raptorXInstance.retrieveCustomerId(),
    });
  }, [inpval.email]);

  useEffect(() => {
    const email = localStorage.getItem("loggedInUserEmail");
    const name = localStorage.getItem("loggedInUserName");
    if (email) {
      setIsLoggedIn(true);
      setLoggedInUserEmail(email);
    }
    if (name) {
      setIsLoggedIn(true);
      setLoggedInUserEmail(name);
    }
  }, []);

  const updateBalance = (newBalance) => {
    setBalance(newBalance);
    localStorage.setItem("balance", newBalance.toString());
  };

  const handleLogin = ({ email, name }) => {
    setIsLoggedIn(true);
    setLoggedInUserEmail(email);
    setLoggedInUserName(name);
  };

  const handleAddMoney = (amount) => {
    const updatedBalance = balance + amount;
    updateBalance(updatedBalance);
    navigate("/success");
    setTimeout(() => {
      navigate("/home");
    }, 2000);
    addTransaction({
      date: formattedDateTime,
      type: "Credited",
      amount: amount,
      sender: loggedInUserEmail,
      receiver: "Self",
      balance: updatedBalance,
    });
  };

  const handleSendMoney = (
    receverName,
    amount,
    recipientAccountNumber,
    recipientIFSC
  ) => {
    if (balance < amount) {
      alert("Insufficient balance");
      return;
    }

    const updatedSenderBalance = balance - amount;
    updateBalance(updatedSenderBalance);

    const recipientIndex = usersData.findIndex(
      (user) =>
        user.accountNumber === recipientAccountNumber &&
        user.ifscCode === recipientIFSC
    );

    if (recipientIndex === -1) {
      alert("Recipient account not found");
      return;
    }

    const updatedUsersData = [...usersData];
    const recipientBalance = parseFloat(
      updatedUsersData[recipientIndex].balance
    );
    console.log("Recipient Balance Before Update:", recipientBalance);
    if (!isNaN(recipientBalance)) {
      updatedUsersData[recipientIndex].balance =
        recipientBalance + parseFloat(amount);
    } else {
      updatedUsersData[recipientIndex].balance = parseFloat(amount);
    }
    console.log(
      "Recipient Balance After Update:",
      updatedUsersData[recipientIndex].balance
    );

    setUsersData(updatedUsersData);
    console.log("Updated usersData:", updatedUsersData);

    navigate("/success");
    setTimeout(() => {
      navigate("/home");
    }, 2000);

    addTransaction({
      date: formattedDateTime,
      type: "Debited",
      amount: amount,
      sender: loggedInUserEmail,
      receiver: [receverName, ": ", recipientAccountNumber],
      balance: updatedSenderBalance,
    });
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/login"
          element={<LoginPage handleLogin={handleLogin} />}
        />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route
          path="/transactions"
          element={<Transaction transactions={transactions} />}
        />
        <Route
          path="/home"
          element={<Dashboard isLoggedIn={isLoggedIn} balance={balance} />}
        />
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
