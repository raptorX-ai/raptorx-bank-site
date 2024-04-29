import React, { useState } from "react";
import favicon from "../../../assets/favicon.ico";

export default function AddMoney({ handleAddMoney}) {
  const [amount, setAmount] = useState("");

  const handleChange = (e) => {
    setAmount(parseInt(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddMoney(amount);
  };

  return (
    <div className="bg-[#020811] h-screen w-screen place-content-center">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 ">
        <div className="mx-auto max-w-lg">
          <img
            className="mx-auto h-10 w-auto"
            src={favicon}
            alt="RaptorX.ai"
          />

          <form
            onSubmit={handleSubmit}
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          >
            <div>
              <label htmlFor="addmoney" className="sr-only">
                addmoney
              </label>

              <div className="relative">
                <input
                  type="number"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter amount to add"
                  value={amount}
                  onChange={handleChange}
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-br from-teal-400 to-blue-500 rounded-md border border-blue-500 px-4 py-2 text-white"
            >
              Add Money
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}



// import React, { useState } from "react";
// import favicon from "../../../assets/favicon.ico";
// import { Link, useNavigate } from "react-router-dom";

// export default function AddMoney({ loggedInUserEmail, handleAddMoney, addTransaction }) {
//   const [amount, setAmount] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setAmount(parseInt(e.target.value));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     handleAddMoney(amount);
//     navigate("/success");
//     setTimeout(() => {
//       navigate("/home");
//     }, 2000);
//   };

//   return (
//     <div className="bg-[#020811] h-screen w-screen place-content-center">
//       <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 ">
//         <div className="mx-auto max-w-lg">
//           <img
//             className="mx-auto h-10 w-auto"
//             src={favicon}
//             alt="RaptorX.ai"
//           />

//           <form
//             onSubmit={handleSubmit}
//             className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
//           >
//             <div>
//               <label htmlFor="addmoney" className="sr-only">
//                 addmoney
//               </label>

//               <div className="relative">
//                 <input
//                   type="number"
//                   className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
//                   placeholder="Enter amount to add"
//                   value={amount}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-gradient-to-br from-teal-400 to-blue-500 rounded-md border border-blue-500 px-4 py-2 text-white"
//             >
//               Add Money
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
