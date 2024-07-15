// import React, { useState } from "react";
// import signUpIMG from '../../assets/signUpIMG.jpg'
// import Logo from '../../assets/mainLogo.svg'
// import OBJECT from '../../assets/OBJECTS.svg'
// import identity from '../../assets/identity.svg'
// import { Link } from "react-router-dom";


// function SignupPage() {
//   return (
    
//       <section className="bg-[#020811]">
//         <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
//           <section className="relative flex h-32 items-end bg-[#0F141D] lg:col-span-5 lg:h-full xl:col-span-6">
            
            
//             <div className="hidden lg:relative lg:block lg:p-12">
//               <Link to=''> <img src={Logo}/></Link>

//               <h2 className="flex mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
//                 Welcome to raptorx.ai
//               </h2>

//               <p className="mt-4 leading-relaxed text-white/90">
//                 Leading the way in Transaction and Identity Fraud Prevention.
//                 Harness the Power of Unsupervised and Supervised Machine Learning, Alongside the Latest LLM Technology, to Safeguard Your Operations. Defend Against Transaction and Identity Frauds with Precision and Expertise.
//               </p>
//             </div>
//           </section>

//           <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
//             <div className="max-w-xl lg:max-w-3xl">
//               <div className="relative -mt-16 block lg:hidden">
//                 <a
//                   className="inline-flex size-16 items-center justify-center rounded-full bg- text-blue-600 sm:size-20"
//                   href="#"
//                 >
//                   <img src={OBJECT}/>
//                 </a>

//                 <h1 className="mt-2 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
//                   Welcome to raptorx.ai
//                 </h1>

//                 <p className="mt-4 leading-relaxed text-gray-300">
//                 Leading the way in Transaction and Identity Fraud Prevention.
//                 Harness the Power of Unsupervised and Supervised Machine Learning, Alongside the Latest LLM Technology, to Safeguard Your Operations. Defend Against Transaction and Identity Frauds with Precision and Expertise.
//                 </p>
//               </div>

//               <form action="#" className="mt-8 grid grid-cols-6 gap-6 text-white">
//                 <div className="col-span-6 sm:col-span-3">
//                   <label
//                     htmlFor="firstName"
//                     className="block text-sm font-medium text-gray-300"
//                   >
//                     First Name
//                   </label>

//                   <input
//                     type="text"
//                     id="firstName"
//                     name="firstName"
//                     className="mt-1 h-9 p-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
//                   />
//                 </div>

//                 <div className="col-span-6 sm:col-span-3">
//                   <label
//                     htmlFor="lastName"
//                     className="block text-sm font-medium text-gray-300"
//                   >
//                     Last Name
//                   </label>

//                   <input
//                     type="text"
//                     id="lastName"
//                     name="last_name"
//                     className="mt-1 h-9 p-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
//                   />
//                 </div>

//                 <div className="col-span-6">
//                   <label
//                     htmlFor="Email"
//                     className="block text-sm font-medium text-gray-300"
//                   >
//                     {" "}
//                     Email{" "}
//                   </label>

//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     className="mt-1 h-9 p-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
//                   />
//                 </div>

//                 <div className="col-span-6 sm:col-span-3">
//                   <label
//                     htmlFor="Password"
//                     className="block text-sm font-medium text-gray-300"
//                   >
//                     {" "}
//                     Password{" "}
//                   </label>

//                   <input
//                     type="password"
//                     id="password"
//                     name="password"
//                     className="mt-1 h-9 p-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
//                   />
//                 </div>

//                 <div className="col-span-6 sm:col-span-3">
//                   <label
//                     htmlFor="pancard"
//                     className="block text-sm font-medium text-gray-300"
//                   >
//                     PAN Card
//                   </label>

//                   <input
//                     type="password"
//                     id="pancard"
//                     name="pancard"
//                     className="mt-1 w-full h-9 p-3 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
//                   />
//                 </div>

//                 <div className="col-span-6">
//                   <label htmlFor="MarketingAccept" className="flex gap-4">
//                     <input
//                       type="checkbox"
//                       id="MarketingAccept"
//                       name="marketing_accept"
//                       className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
//                     />

//                     <span className="text-sm text-gray-500">
//                       I want to receive emails about product updates and
//                       company announcements.
//                     </span>
//                   </label>
//                 </div>

//                 <div className="col-span-6">
//                   <p className="text-sm text-gray-500">
//                     By creating an account, you agree to our
//                     <a href="#" className="text-gray-700 underline">
//                       {" "}
//                       terms and conditions{" "}
//                     </a>
//                     and
//                     <a href="#" className="text-gray-700 underline">
//                       privacy policy
//                     </a>
//                     .
//                   </p>
//                 </div>

//                 <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
//                   <button className="bg-gradient-to-br from-teal-400 to-blue-500 rounded-md border border-blue-500 px-4 py-2 text-white">
//                     Create an account
//                   </button>

//                   <p className="mt-4 text-sm text-gray-500 sm:mt-0">
//                     Already have an account? 
//                     <Link to="/login" className="text-gray-700 underline mx-1">
//                       Log in
//                     </Link>
                    
//                   </p>
//                 </div>
//               </form>
//             </div>
//           </main>
//         </div>
//       </section>
    
//   );
// }

// export default SignupPage;





import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import signUpIMG from '../../assets/signUpIMG.jpg'
import Logo from '../../assets/mainLogo.svg'
import OBJECT from '../../assets/OBJECTS.svg'
import identity from '../../assets/identity.svg'

function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    panCard: '',
    marketingAccept: false,
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/signup', formData);
      setSuccess('Account created successfully!');
      setError(null);
      // Reset form or redirect to another page
    } catch (err) {
      setError('Failed to create account. Please try again.');
      setSuccess(null);
    }
  };

  return (
    <section className="bg-[#020811]">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-[#0F141D] lg:col-span-5 lg:h-full xl:col-span-6">
          <div className="hidden lg:relative lg:block lg:p-12">
            <Link to=''> <img src={Logo} alt="Logo" /></Link>
            <h2 className="flex mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Welcome to raptorx.ai
            </h2>
            <p className="mt-4 leading-relaxed text-white/90">
              Leading the way in Transaction and Identity Fraud Prevention.
              Harness the Power of Unsupervised and Supervised Machine Learning, Alongside the Latest LLM Technology, to Safeguard Your Operations. Defend Against Transaction and Identity Frauds with Precision and Expertise.
            </p>
          </div>
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16 block lg:hidden">
              <a className="inline-flex size-16 items-center justify-center rounded-full bg- text-blue-600 sm:size-20" href="#">
                <img src={OBJECT} alt="Object" />
              </a>
              <h1 className="mt-2 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Welcome to raptorx.ai
              </h1>
              <p className="mt-4 leading-relaxed text-gray-300">
                Leading the way in Transaction and Identity Fraud Prevention.
                Harness the Power of Unsupervised and Supervised Machine Learning, Alongside the Latest LLM Technology, to Safeguard Your Operations. Defend Against Transaction and Identity Frauds with Precision and Expertise.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-6 gap-6 text-white">
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-300">First Name</label>
                <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="mt-1 h-9 p-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm" />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-300">Last Name</label>
                <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="mt-1 h-9 p-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm" />
              </div>

              <div className="col-span-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 h-9 p-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm" />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
                <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="mt-1 h-9 p-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm" />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="pancard" className="block text-sm font-medium text-gray-300">PAN Card</label>
                <input type="text" id="panCard" name="panCard" value={formData.panCard} onChange={handleChange} className="mt-1 w-full h-9 p-3 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm" />
              </div>
{/* 
              <div className="col-span-6">
                <label htmlFor="marketingAccept" className="flex gap-4">
                  <input type="checkbox" id="marketingAccept" name="marketingAccept" checked={formData.marketingAccept} onChange={handleChange} className="size-5 rounded-md border-gray-200 bg-white shadow-sm" />
                  <span className="text-sm text-gray-500">I want to receive emails about product updates and company announcements.</span>
                </label>
              </div>

              <div className="col-span-6">
                <p className="text-sm text-gray-500">
                  By creating an account, you agree to our
                  <a href="#" className="text-gray-700 underline"> terms and conditions </a>
                  and
                  <a href="#" className="text-gray-700 underline"> privacy policy</a>.
                </p>
              </div> */}

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button type="submit" className="bg-gradient-to-br from-teal-400 to-blue-500 rounded-md border border-blue-500 px-4 py-2 text-white">Create an account</button>
                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  Already have an account?
                  <Link to="/login" className="text-gray-700 underline mx-1">Log in</Link>
                </p>
              </div>
            </form>

            {error && <p className="mt-4 text-sm text-red-500">{error}</p>}
            {success && <p className="mt-4 text-sm text-green-500">{success}</p>}
          </div>
        </main>
      </div>
    </section>
  );
}

export default SignupPage;
