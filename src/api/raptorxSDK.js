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

