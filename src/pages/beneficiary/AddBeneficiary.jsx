import React from 'react'
import SideBar from '../../component/sideBar/SideBar'
import BeneficiaryForm from './BeneficiaryForm';
import Navbar from '../../component/common/Navbar';

const AddBeneficiary = ({instance}) => {
  return (
    <>
      <div className="flex bg-[#0F141D] h-screen w-screen">
        <SideBar />
        <div className="flex flex-col w-full m-1">
        <Navbar instance={instance}/>
        <div className=''>
          <BeneficiaryForm />
        </div>
        </div>
        
    </div>
    </>
  )
}

export default AddBeneficiary