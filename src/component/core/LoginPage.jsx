// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import favicon from '../../assets/favicon.ico';

// function LoginPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   // const handleLogin = async (e) => {
//   //   e.preventDefault();
//   //   try {
//   //     const response = await axios.post('http://localhost:5000/login', { email, password });
//   //     navigate('/account');
//   //   } catch (error) {
//   //     alert('Invalid email or password');
//   //   }
//   // };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     await handleLogin({ email });
//     navigate('/home');
//   };

//   return (
//     <div className="bg-[#020811]">
//       <div className="flex h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
//         <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//           <img className="mx-auto h-10 w-auto" src={favicon} alt="Bank" />
//           <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-300">
//             Sign in to your account
//           </h2>
//         </div>
//         <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//           <form className="space-y-6" onSubmit={handleLogin}>
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-400">
//                 Email address
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                   className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>
//             <div>
//               <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-400">
//                 Password
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                   className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>
//             <div>
//               <Link to='/forgotpassword' className='text-gray-400 flex justify-end'>Forgot Password ?</Link>
//             </div>
//             <div>
//               <button type="submit" className="w-full bg-gradient-to-br from-teal-400 to-blue-500 rounded-md border border-blue-500 px-4 py-2 text-white">
//                 Sign in
//               </button>
//             </div>
//           </form>
//           <p className="mt-10 text-center text-sm text-gray-500">
//             Not a member?{' '}
//             <Link to="/signup" className="font-semibold leading-6 text-gray-400 hover:text-indigo-300">
//               Create your account
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LoginPage;















import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import favicon from '../../assets/favicon.ico';

function LoginPage({ handleLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleLogin({ email });
      navigate('/home');
    } catch (error) {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="bg-[#020811]">
      <div className="flex h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto" src={favicon} alt="Bank" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-300">
            Sign in to your account
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-400">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-400">
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <Link to='/forgotpassword' className='text-gray-400 flex justify-end'>Forgot Password ?</Link>
            </div>
            <div>
              <button type="submit" className="w-full bg-gradient-to-br from-teal-400 to-blue-500 rounded-md border border-blue-500 px-4 py-2 text-white">
                Sign in
              </button>
            </div>
          </form>
          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <Link to="/signup" className="font-semibold leading-6 text-gray-400 hover:text-indigo-300">
              Create your account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
