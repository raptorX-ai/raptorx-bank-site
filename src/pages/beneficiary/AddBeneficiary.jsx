import React from 'react';
import BeneficiaryForm from './BeneficiaryForm';

const AddBeneficiary = ({ instance }) => {
  return (
    <div className="flex bg-[#0F141D] min-h-screen w-full">     
      <div className="flex flex-col w-full">
        <div className="flex justify-center mt-8">
          <div className="max-w-md mx-auto">
            <BeneficiaryForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBeneficiary;
