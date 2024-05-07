import React from 'react'
import SideBar from '../../component/sideBar/SideBar'
import BeneficiaryForm from './BeneficiaryForm';

const AddBeneficiary = () => {
  return (
    <>
      <div className="flex bg-[#0F141D] h-screen w-screen">
        <SideBar />
        <div className=''>
          <BeneficiaryForm />
        </div>
    </div>
    </>
  )
}

export default AddBeneficiary