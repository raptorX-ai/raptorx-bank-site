// import React, { useEffect } from 'react';
// import RaptorX from 'raptorx.ai';

// const RaptorXSDK = ({ email, instance }) => {
//   useEffect(() => {
//     const instance = new RaptorX({
//       api_key: '9a60f01e9b7d2d5d37a1b134241311fd7dfdbc38',
//     });

//     const captureLoginEvent = () => {
//       instance.capture('email', email);
//     };

//     captureLoginEvent();

//     const inpval = { email: 'anuj@gmail.com', name: 'Anuj', panCard: 'ABC1234', city: 'Wardha', pinCode: '442001', address: 'Ganesh Nagar, Wardha' };
//     const currentDate = new Date().toISOString();
//     const mobileNumber = '1234567890';
//     const amounts = { grand_total: 100 };

//     instance.getTransaction({
//       user_email: inpval.email,
//       user_fullname: inpval.name,
//       transactiondate: currentDate,
//       transactioncurrency: "INR",
//       status: "complete",
//       pan_card: inpval.panCard,
//       user_phone_number: mobileNumber,
//       user_city: inpval.city,
//       user_zip: inpval.pinCode,
//       user_street: inpval.address,
//       transactionamount: amounts?.grand_total,
//       user_id: instance.retrieveCustomerId() // Ensure instance.retrieveCustomerId() is defined
//     });
//   }, [email]);

//   return <div>Integrating RaptorX SDK...</div>;
// };

// export default RaptorXSDK;









// import React, { useEffect } from 'react';
// import RaptorX from 'raptorx.ai';

// const RaptorXSDK = ({ email, instance }) => {
//   useEffect(() => {
//     // Create a new instance of RaptorX SDK
//     const raptorInstance = new RaptorX({
//       api_key: '9a60f01e9b7d2d5d37a1b134241311fd7dfdbc38', // Provide your API key here
//     });

//     // Capture login event
//     const captureLoginEvent = () => {
//       raptorInstance.capture('email', email);
//     };

//     // Call the captureLoginEvent function
//     captureLoginEvent();

//     // Define input values
//     const inpval = { email: 'anuj@gmail.com', name: 'Anuj', panCard: 'ABC1234', city: 'Wardha', pinCode: '442001', address: 'Ganesh Nagar, Wardha' };
//     const currentDate = new Date().toISOString();
//     const mobileNumber = '1234567890';
//     const amounts = { grand_total: 100 };

//     // Retrieve transaction data
//     raptorInstance.getTransaction({
//       user_email: inpval.email,
//       user_fullname: inpval.name,
//       transactiondate: currentDate,
//       transactioncurrency: "INR",
//       status: "complete",
//       pan_card: inpval.panCard,
//       user_phone_number: mobileNumber,
//       user_city: inpval.city,
//       user_zip: inpval.pinCode,
//       user_street: inpval.address,
//       transactionamount: amounts?.grand_total,
//       user_id: raptorInstance.retrieveCustomerId() // Ensure raptorInstance.retrieveCustomerId() is defined
//     });
//   }, [email, instance]);

//   return <div>Integrating RaptorX SDK...</div>;
// };

// export default RaptorXSDK;








// RaptorXSDK.jsx
import React, { useEffect } from 'react';
import RaptorX from 'raptorx.ai';

const RaptorXSDK = ({ inpval, instance }) => {
  useEffect(() => {
    const raptorXInstance = new RaptorX({
      api_key: '9a60f01e9b7d2d5d37a1b134241311fd7dfdbc38',
    });

    const captureLoginEvent = () => {
      raptorXInstance.capture('email', inpval.email);
    };

    captureLoginEvent();

    const currentDate = new Date().toISOString();
    const mobileNumber = '1234567890';
    const amounts = { grand_total: 100 };

    raptorXInstance.getTransaction({
      user_email: inpval.email,
      user_fullname: inpval.name,
      transactiondate: currentDate,
      transactioncurrency: 'INR',
      status: 'complete',
      pan_card: inpval.panCard,
      user_phone_number: mobileNumber,
      user_city: inpval.city,
      user_zip: inpval.pinCode,
      user_street: inpval.address,
      transactionamount: amounts?.grand_total,
      user_id: raptorXInstance.retrieveCustomerId(),
    });
  }, [inpval]);

  return <div>Integrating RaptorX SDK...</div>;
};

export default RaptorXSDK;

