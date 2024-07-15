// import React, { useState, useEffect } from "react";
// import favicon from "../../../assets/favicon.ico";
// import { Link } from "react-router-dom";

// const SendMoney = ({ handleSendMoney }) => {
//   const [amount, setAmount] = useState("");
//   const [receiverName, setReceiverName] = useState("");
//   const [recipientAccountNumber, setRecipientAccountNumber] = useState("");
//   const [recipientIFSC, setRecipientIFSC] = useState("");
//   const [beneficiaries, setBeneficiaries] = useState([]);
//   const [selectedBeneficiary, setSelectedBeneficiary] = useState(null);

//   // Fetch beneficiaries from local storage on component mount
//   useEffect(() => {
//     const storedBeneficiaries = JSON.parse(localStorage.getItem("beneficiaries")) || [];
//     setBeneficiaries(storedBeneficiaries);
//   }, []);

//   // Update input fields when a beneficiary is selected from the dropdown
//   useEffect(() => {
//     if (selectedBeneficiary) {
//       setReceiverName(selectedBeneficiary.name);
//       setRecipientAccountNumber(selectedBeneficiary.accountNumber);
//       setRecipientIFSC(selectedBeneficiary.ifscCode);
//     } else {
//       // Reset input fields if no beneficiary is selected
//       setReceiverName("");
//       setRecipientAccountNumber("");
//       setRecipientIFSC("");
//     }
//   }, [selectedBeneficiary]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     handleSendMoney(receiverName, amount, recipientAccountNumber, recipientIFSC);
//   };

//   return (
//     <>
//       <div className="bg-[#020811] h- w- place-content-center">
//         <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 ">
//           <div className="mx-auto max-w-lg">
//             <img
//               className="mx-auto h-10 w-auto"
//               src={favicon}
//               alt="RaptorX.ai"
//             />

//             <form
//               onSubmit={handleSubmit}
//               className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
//             >
//               <div>
//                 <select
//                   className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
//                   onChange={(e) => {
//                     const selectedName = e.target.value;
//                     const selectedBeneficiary = beneficiaries.find(beneficiary => beneficiary.name === selectedName);
//                     setSelectedBeneficiary(selectedBeneficiary);
//                   }}
//                   defaultValue=""
//                 >
//                   <option value="" disabled hidden>Select Beneficiary</option>
//                   {beneficiaries.map((beneficiary, index) => (
//                     <option key={index} value={beneficiary.name} className="">
//                       {beneficiary.name}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div>
//                 <input
//                   type="number"
//                   className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
//                   placeholder="Enter Amount"
//                   value={amount}
//                   onChange={(e) => setAmount(e.target.value)}
//                 />
//               </div>

//               <div>
//                 <input
//                   type="text"
//                   className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
//                   placeholder="Account holder name"
//                   value={receiverName}
//                   onChange={(e) => setReceiverName(e.target.value)}
//                 />
//               </div>

//               <div>
//                 <input
//                   type="number"
//                   className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
//                   placeholder="Recipient's Account Number"
//                   value={recipientAccountNumber}
//                   onChange={(e) => setRecipientAccountNumber(e.target.value)}
//                 />
//               </div>

//               <div>
//                 <input
//                   type="text"
//                   className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
//                   placeholder="Recipient's IFSC Code"
//                   value={recipientIFSC}
//                   onChange={(e) => setRecipientIFSC(e.target.value)}
//                 />
//                 <p className="text-right mt-2 text-sm text-gray-500">
//                   <Link to="" className="">
//                     Search IFSC
//                   </Link>
//                 </p>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-gradient-to-br from-teal-400 to-blue-500 rounded-md border border-blue-500 px-4 py-2 text-white"
//               >
//                 Send Money
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SendMoney;









import React, { useState } from 'react';
import axios from 'axios';

export default function SendMoney() {
  const [receiverEmail, setReceiverEmail] = useState('');
  const [amount, setAmount] = useState('');
  const user = JSON.parse(localStorage.getItem('user'));

  const handleSendMoney = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/sendmoney', {
        senderId: user._id,
        receiverEmail,
        amount: parseInt(amount),
      });
      localStorage.setItem('user', JSON.stringify(response.data.sender));
      alert('Money sent successfully');
    } catch (error) {
      alert('Failed to send money');
    }
  };

  return (
    <div className="bg-[#020811] h-screen w-screen place-content-center">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <img className="mx-auto h-10 w-auto" src="/favicon.ico" alt="Bank" />
          <form onSubmit={handleSendMoney} className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
            <div>
              <label htmlFor="receiverEmail" className="sr-only">Receiver Email</label>
              <div className="relative">
                <input
                  type="email"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter receiver's email"
                  value={receiverEmail}
                  onChange={(e) => setReceiverEmail(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label htmlFor="amount" className="sr-only">Amount</label>
              <div className="relative">
                <input
                  type="number"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter amount to send"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
            </div>
            <div>
              <button type="submit" className="w-full bg-gradient-to-br from-teal-400 to-blue-500 rounded-md border border-blue-500 px-4 py-2 text-white">
                Send Money
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
