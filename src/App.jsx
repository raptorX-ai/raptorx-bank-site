// import React, { useState, useEffect } from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   useNavigate,
// } from "react-router-dom";
// import "./App.css";
// import SignupPage from "./component/core/SignupPage";
// import LoginPage from "./component/core/LoginPage";
// import NotFound from "./component/NotFound";
// import ForgotPassword from "./component/core/ForgotPassword";
// import Transaction from "./pages/Transaction";
// import Account from "./component/bank/Account";
// import AddMoney from "./component/bank/saving/AddMoney";
// import SendMoney from "./component/bank/saving/SendMoney";
// import Dashboard from "./component/bank/Dashboard";
// import PaymentSuccess from "./component/bank/saving/PaymentSuccess";
// import RaptorX from "raptorx.ai";
// import Setting from "./pages/setting/Setting";
// import Billing from "./pages/billing/Billing";
// import AddBeneficary from './pages/beneficiary/AddBeneficiary'
// import Navbar from "./component/common/Navbar";
// import SideBar from "./component/sideBar/SideBar";
// import ResetPassword from "./component/core/ResetPassword";
// import AtmWithdrawal from "./pages/atmWithdrawal/AtmWithdrawal";
// import RaptorxPay from "./pages/raptorxPay/RaptorxPay";

// function App({}) {
//   const [balance, setBalance] = useState(() => {
//     const storedBalance = localStorage.getItem("balance");
//     return storedBalance ? parseInt(storedBalance) : null;
//   });
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [loggedInUserEmail, setLoggedInUserEmail] = useState(null);
//   //const [usersData, setUsersData] = useState(users);
//   const [transactions, setTransactions] = useState([]);
//   const [loggedInUser, setLoggedInUser] = useState(null);
//   const [isLoading, setIsLoading] = useState(true); 

//   const addTransaction = (transaction) => {
//     setTransactions([...transactions, transaction]);
//     console.log("Updated transactions:", transactions);
//   };
//   const navigate = useNavigate();

//   const now = new Date();

//   const time = now.toLocaleTimeString('en-US', {hour:'2-digit', minute: '2-digit'});
//   const date = (new Intl.DateTimeFormat('en-US', {dateStyle: 'full'})).format(now);

//   const formattedDateTime = time + ', ' + date;

//   const inpval = { email: "example@example.com" };
//   const instance = new RaptorX({
//       api_key: "60480409b25ac5cc2cfd67b2af7d3e8aa5217734",
//     });

//   useEffect(() => {

//     const captureLoginEvent = () => {
//       if (inpval && inpval.email) {
//         instance.capture("email", inpval.email);
//       }
//     };

//     captureLoginEvent();
//   }, [inpval.email]);

//   const excludeNavbarSidebarRoutes = ['/addmoney', '/sendmoney', '/login', '/success', '/', '/signup', '/forgotpassword', '/reset-password', '*'];


//   useEffect(() => {
//     const email = localStorage.getItem("loggedInUserEmail");
//     if (email) {
//       setIsLoggedIn(true);
//       setLoggedInUserEmail(email);
//     } 
//   }, []);


//   // const updateBalance = (newBalance) => {
//   //   setBalance(newBalance);
//   //   localStorage.setItem("balance", newBalance.toString());
//   // };

//   const handleLogin = ({ email }) => {
//     setIsLoggedIn(true);
//     setLoggedInUserEmail(email);
//   };
  
//   // useEffect(() => {
//   //   const email = localStorage.getItem("loggedInUserEmail");
//   //   console.log("Logged-in user email:", email);
//   //   setLoggedInUserEmail(email);

//   //   if (email) {
//   //     const user = users.find(user => user.email === email);
//   //     if (user) {
//   //       setLoggedInUser(user);
//   //     } else {
//   //       setError("User not found"); 
//   //     }
//   //   }

//   //   setIsLoading(false); 
//   // }, []);

//   const handleAddMoney = (amount) => {
//     const updatedBalance = balance + amount;
//     updateBalance(updatedBalance);
//     navigate("/success");
//     setTimeout(() => {
//       navigate("/home");
//     }, 2000);

//     const transaction = {
//       date: formattedDateTime,
//       type: "Credited",
//       amount: amount,
//       sender: loggedInUserEmail,
//       receiver: "Self",
//       balance: updatedBalance,
//     };
  
//     const existingTransactions = JSON.parse(localStorage.getItem("transactions")) || [];
//     const updatedTransactions = [...existingTransactions, transaction];
//     localStorage.setItem("transactions", JSON.stringify(updatedTransactions));
//     addTransaction(transaction);
//   };

//   const handleSendMoney = (
//     receiverName,
//     amount,
//     recipientAccountNumber,
//     recipientIFSC
//   ) => {
//     console.log("Current balance:", balance);
//     if (balance < amount) {
//       alert("Insufficient balance");
//       return;
//     }
  
//     const updatedSenderBalance = balance - amount;
//     updateBalance(updatedSenderBalance);
  
//     const updatedUsersData = usersData.map(user => {
//       const updatedUser = { ...user };
//       updatedUser.balance = parseFloat(updatedUser.balance) + parseFloat(amount);
//       return updatedUser;
//     });
  
//     setUsersData(updatedUsersData);

//     navigate("/success");
//     setTimeout(() => {
//       navigate("/home");
//     }, 2000);
  
//     const currentDate = new Date().toISOString();
//     instance.getTransaction({
//       user_fullname: loggedInUser.name,
//       from_account: loggedInUser.accountNumber,
//       to_account: "", 
//       transactiondate: currentDate,
//       status: "complete",
//       bank_ecom_indicator: "bank",
//       transactionamount: amount,
//       transactioncurrency: "INR",
//       transaction_medium:"web",
//       bank_beneficiary_name:receiverName,
//       bank_beneficiary_account_no:recipientAccountNumber,
//       user_id: instance.retrieveCustomerId(),
//     });
    
  
//     const transaction = {
//       date: formattedDateTime,
//       type: "Debited",
//       amount: amount,
//       sender: loggedInUserEmail,
//       receiver: receiverName,
//       balance: updatedSenderBalance,
//     };
  
//     const existingTransactions = JSON.parse(localStorage.getItem("transactions")) || [];
//     const updatedTransactions = [...existingTransactions, transaction];
//     localStorage.setItem("transactions", JSON.stringify(updatedTransactions));
  
//     addTransaction(transaction);
//   };
  

//   return (
//     <div className="flex w-full h-full">
//       {/* <SideBar/> */}
//       {excludeNavbarSidebarRoutes.includes(location.pathname) ? null : <SideBar />}
//       <div className="bg-[#0F141D] w-full">
//         {/* <Navbar instance={instance}/> */}
//         {excludeNavbarSidebarRoutes.includes(location.pathname) ? null : <Navbar instance={instance}/>}
//         <div>
//           <Routes>
//             <Route path="/" element={<SignupPage />} />
//             <Route path="/signup" element={<SignupPage />} />

//             <Route
//               path="/login"
//               element={<LoginPage handleLogin={handleLogin} instance={instance}/>}
//             />
//             <Route path="/forgotpassword" element={<ForgotPassword />} />
//             <Route path="/reset-password" element={<ResetPassword />} />
//             <Route
//               path="/transactions"
//               element={<Transaction loggedInUserEmail={loggedInUserEmail} transactions={transactions} instance={instance} />}
//             />
//             <Route
//               path="/home"
//               element={<Dashboard isLoggedIn={isLoggedIn} balance={balance} instance={instance}/>}
//             />
//             <Route path="/setting" element={<Setting instance={instance}  />} />
//             <Route path="/atm-withdrawal" element={<AtmWithdrawal instance={instance}  />} />
//             <Route path="/raptorx-pay" element={<RaptorxPay instance={instance}  />} />
//             <Route path="/debitcard" element={<Billing />} />
//             <Route path="/addbeneficiary" element={<AddBeneficary instance={instance}  />} />
            
//             <Route
//               path="/addmoney"
//               element={
//                 <AddMoney
//                   loggedInUserEmail={loggedInUserEmail}
//                   handleAddMoney={handleAddMoney}
//                   addTransaction={addTransaction}
//                 />
//               }
//             />
//             <Route path="/success" element={<PaymentSuccess />} />
//             <Route path="/account" element={<Account  instance={instance}/>} />
//             <Route
//               path="/sendmoney"
//               element={
//                 <SendMoney
//                   addTransaction={addTransaction}
//                   loggedInUserEmail={loggedInUserEmail}
//                   handleSendMoney={handleSendMoney}
//                   instance={instance}
//                 />
//               }
//             />
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;




















































import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, useLocation } from "react-router-dom";
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
import RaptorX from "raptorx.ai";
import Setting from "./pages/setting/Setting";
import Billing from "./pages/billing/Billing";
import AddBeneficiary from './pages/beneficiary/AddBeneficiary';
import Navbar from "./component/common/Navbar";
import SideBar from "./component/sideBar/SideBar";
import ResetPassword from "./component/core/ResetPassword";
import AtmWithdrawal from "./pages/atmWithdrawal/AtmWithdrawal";
import RaptorxPay from "./pages/raptorxPay/RaptorxPay";
import PrivateRoute from "./component/core/PrivateRoute";


function App() {
  const [balance, setBalance] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [transactions, setTransactions] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();

  const now = new Date();
  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const date = (new Intl.DateTimeFormat('en-US', { dateStyle: 'full' })).format(now);
  const formattedDateTime = time + ', ' + date;

  const inpval = { email: "example@example.com" };
  const instance = new RaptorX({
    api_key: "60480409b25ac5cc2cfd67b2af7d3e8aa5217734",
  });

  useEffect(() => {
    const captureLoginEvent = () => {
      if (inpval && inpval.email) {
        instance.capture("email", inpval.email);
      }
    };

    captureLoginEvent();
  }, [inpval.email]);

  const handleLogin = async ({ email }) => {
    setIsLoggedIn(true);

    try {
      const response = await fetch(`/user/${email}`);
      const userData = await response.json();

      if (response.ok) {
        setLoggedInUser(userData);
        setBalance(userData.balance);
        setTransactions(userData.transactions || []);
      } else {
        console.error("User not found or error fetching user data");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleAddMoney = (amount) => {
    const updatedBalance = balance + amount;
    setBalance(updatedBalance);
    navigate("/success");
    setTimeout(() => {
      navigate("/home");
    }, 2000);

    const transaction = {
      date: formattedDateTime,
      type: "Credited",
      amount: amount,
      sender: loggedInUser.email,
      receiver: "Self",
      balance: updatedBalance,
    };

    const updatedTransactions = [...transactions, transaction];
    setTransactions(updatedTransactions);

    updateUserData(loggedInUser.email, { balance: updatedBalance, transactions: updatedTransactions });
  };

  const handleSendMoney = (receiverName, amount, recipientAccountNumber, recipientIFSC) => {
    if (balance < amount) {
      alert("Insufficient balance");
      return;
    }

    const updatedSenderBalance = balance - amount;
    setBalance(updatedSenderBalance);

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
      transaction_medium: "web",
      bank_beneficiary_name: receiverName,
      bank_beneficiary_account_no: recipientAccountNumber,
      user_id: instance.retrieveCustomerId(),
    });

    const transaction = {
      date: formattedDateTime,
      type: "Debited",
      amount: amount,
      sender: loggedInUser.email,
      receiver: receiverName,
      balance: updatedSenderBalance,
    };

    const updatedTransactions = [...transactions, transaction];
    setTransactions(updatedTransactions);

    updateUserData(loggedInUser.email, { balance: updatedSenderBalance, transactions: updatedTransactions });
  };

  const updateUserData = async (email, updates) => {
    try {
      const response = await fetch(`/api/user/${email}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updates),
      });

      if (!response.ok) {
        console.error("Failed to update user data");
      }
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  return (
    <div className="flex w-full h-full">
      {!['/login', '/signup', '/forgotpassword', '/reset-password', '/addmoney', '/sendmoney', '/login', '/success'].includes(location.pathname) && <SideBar />}
      <div className="bg-[#0F141D] w-full">
        {!['/login', '/signup', '/forgotpassword', '/reset-password', '/addmoney', '/sendmoney', '/login', '/success'].includes(location.pathname) && <Navbar instance={instance} />}
        <div>
          <Routes>
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage handleLogin={handleLogin} instance={instance} />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/" element={<Navigate to={isLoggedIn ? "/home" : "/login"} replace />} />

            <Route
              path="/home"
              element={
                <PrivateRoute isAuthenticated={isLoggedIn}>
                  <Dashboard isLoggedIn={isLoggedIn} balance={balance} instance={instance} />
                </PrivateRoute>
              }
            />
            <Route
              path="/transactions"
              element={
                <PrivateRoute isAuthenticated={isLoggedIn}>
                  <Transaction loggedInUserEmail={loggedInUser ? loggedInUser.email : null} transactions={transactions} instance={instance} />
                </PrivateRoute>
              }
            />
            <Route
              path="/setting"
              element={
                <PrivateRoute isAuthenticated={isLoggedIn}>
                  <Setting instance={instance} />
                </PrivateRoute>
              }
            />
            <Route
              path="/atm-withdrawal"
              element={
                <PrivateRoute isAuthenticated={isLoggedIn}>
                  <AtmWithdrawal instance={instance} />
                </PrivateRoute>
              }
            />
            <Route
              path="/raptorx-pay"
              element={
                <PrivateRoute isAuthenticated={isLoggedIn}>
                  <RaptorxPay instance={instance} />
                </PrivateRoute>
              }
            />
            <Route
              path="/debitcard"
              element={
                <PrivateRoute isAuthenticated={isLoggedIn}>
                  <Billing />
                </PrivateRoute>
              }
            />
            <Route
              path="/addbeneficiary"
              element={
                <PrivateRoute isAuthenticated={isLoggedIn}>
                  <AddBeneficiary instance={instance} />
                </PrivateRoute>
              }
            />
            <Route
              path="/addmoney"
              element={
                <PrivateRoute isAuthenticated={isLoggedIn}>
                  <AddMoney loggedInUserEmail={loggedInUser ? loggedInUser.email : null} handleAddMoney={handleAddMoney} addTransaction={setTransactions} />
                </PrivateRoute>
              }
            />
            <Route
              path="/sendmoney"
              element={
                <PrivateRoute isAuthenticated={isLoggedIn}>
                  <SendMoney addTransaction={setTransactions} loggedInUserEmail={loggedInUser ? loggedInUser.email : null} handleSendMoney={handleSendMoney} instance={instance} />
                </PrivateRoute>
              }
            />
            <Route
              path="/account"
              element={
                <PrivateRoute isAuthenticated={isLoggedIn}>
                  <Account user={loggedInUser} />
                </PrivateRoute>
              }
            />
            <Route
              path="/success"
              element={
                <PrivateRoute isAuthenticated={isLoggedIn}>
                  <PaymentSuccess />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
