import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaLightbulb } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { IoWifi } from "react-icons/io5";
import { MdOutlineMonitor } from "react-icons/md";
import { PiCylinderDuotone } from "react-icons/pi";
import { FaCarAlt } from "react-icons/fa";
import { RiMotorbikeFill } from "react-icons/ri";
import { MdHealthAndSafety } from "react-icons/md";
import { MdOutlineFlightTakeoff } from "react-icons/md";
import { FaHotel } from "react-icons/fa6";
import { FaBusSimple } from "react-icons/fa6";
import { FaTrainSubway } from "react-icons/fa6";


import Dropdown from "../../component/Dropdown";

const RaptorxPay = () => {
  const [error, setError] = useState(null);

  return (
    <div>
      <div className="flex flex-col w-full h-full">
        <div className="flex flex-col mt-5 gap-4 h-">
          <Dropdown title="Bills & recharges" className="">
            <div className="px-4 mx-10 bg-[#020811] text-gray-400 ">
              <div className="flex justify-center gap-10 mx-5 pb-5">
                <div className="flex flex-col w-28 justify-center items-center">
                  <Link to="">
                    <div className="bg-[#0F141D] w-12 h-12 p-2 flex justify-center items-center rounded-md">
                      <FaMobileAlt size={22} />
                    </div>
                  </Link>

                  <p className="mt-2 flex justify-center mb-3 w-[400px]">
                    Mobile recharge
                  </p>
                </div>

                <div className="flex flex-col w-28 justify-center items-center">
                  <Link to="">
                    <div className="bg-[#0F141D] w-12 h-12 p-2 flex justify-center items-center rounded-md">
                      <FaLightbulb size={22} />
                    </div>
                  </Link>
                  <p className="mt-2 flex justify-center mb-3 w-[200px]">
                    Electricity
                  </p>
                </div>

                <div className="flex flex-col w-28 justify-center items-center">
                  <Link to="">
                    <div className="bg-[#0F141D] w-12 h-12 p-2 flex justify-center items-center rounded-md">
                      <MdOutlineMonitor size={22} />
                    </div>
                  </Link>

                  <p className="mt-2 flex justify-center mb-3 w-[400px]">
                    DTH / Cable TV
                  </p>
                </div>

                <div className="flex flex-col w-28 justify-center items-center">
                  <Link to="">
                    <div className="bg-[#0F141D] w-12 h-12 p-2 flex justify-center items-center rounded-md">
                      <PiCylinderDuotone size={22} />
                    </div>
                  </Link>
                  <p className="mt-2 flex justify-center mb-3 w-[200px]">
                    Gas cylinder
                  </p>
                </div>

                <div className="flex flex-col w-28 justify-center items-center">
                  <Link to="">
                    <div className="bg-[#0F141D] w-12 h-12 p-2 flex justify-center items-center rounded-md">
                      <IoWifi size={22} />
                    </div>
                  </Link>
                  <p className="mt-2 flex justify-center mb-3 w-[200px]">
                    Broadband landline
                  </p>
                </div>
              </div>
            </div>
          </Dropdown>


          <Dropdown title="Insurance" className="">
            <div className="px-4 mx-10 bg-[#020811] text-gray-400 ">
              <div className="flex justify-center gap-10 mx-5 pb-5">
                <div className="flex flex-col w-28 justify-center items-center">
                  <Link to="">
                    <div className="bg-[#0F141D] w-12 h-12 p-2 flex justify-center items-center rounded-md">
                    <FaCarAlt size={22}/>
                    </div>
                  </Link>

                  <p className="mt-2 flex justify-center mb-3 w-[400px]">
                    Car Insurance
                  </p>
                </div>

                <div className="flex flex-col w-28 justify-center items-center">
                  <Link to="">
                    <div className="bg-[#0F141D] w-12 h-12 p-2 flex justify-center items-center rounded-md">
                    <RiMotorbikeFill size={22}/>
                    </div>
                  </Link>
                  <p className="mt-2 flex justify-center mb-3 w-[200px]">
                    Bike Insurance
                  </p>
                </div>

                <div className="flex flex-col w-28 justify-center items-center">
                  <Link to="">
                    <div className="bg-[#0F141D] w-12 h-12 p-2 flex justify-center items-center rounded-md">
                    <MdHealthAndSafety size={22}/>
                    </div>
                  </Link>

                  <p className="mt-2 flex justify-center mb-3 w-[400px]">
                    Health Insurance
                  </p>
                </div>
              </div>
            </div>
          </Dropdown>

          <Dropdown title="Travel" className="">
            <div className="px-4 mx-10 bg-[#020811] text-gray-400 ">
              <div className="flex justify-center gap-10 mx-5 pb-5">
                <div className="flex flex-col w-28 justify-center items-center">
                  <Link to="">
                    <div className="bg-[#0F141D] w-12 h-12 p-2 flex justify-center items-center rounded-md">
                    <MdOutlineFlightTakeoff size={22}/>
                    </div>
                  </Link>

                  <p className="mt-2 flex justify-center mb-3 w-[400px]">
                    Flights
                  </p>
                </div>

                <div className="flex flex-col w-28 justify-center items-center">
                  <Link to="">
                    <div className="bg-[#0F141D] w-12 h-12 p-2 flex justify-center items-center rounded-md">
                    <FaHotel size={22}/>
                    </div>
                  </Link>
                  <p className="mt-2 flex justify-center mb-3 w-[200px]">
                    Hotels
                  </p>
                </div>

                <div className="flex flex-col w-28 justify-center items-center">
                  <Link to="">
                    <div className="bg-[#0F141D] w-12 h-12 p-2 flex justify-center items-center rounded-md">
                      <FaBusSimple size={22}/>
                    </div>
                  </Link>

                  <p className="mt-2 flex justify-center mb-3 w-[400px]">
                    Bus
                  </p>
                </div>

                <div className="flex flex-col w-28 justify-center items-center">
                  <Link to="">
                    <div className="bg-[#0F141D] w-12 h-12 p-2 flex justify-center items-center rounded-md">
                    <FaTrainSubway size={22}/>
                    </div>
                  </Link>
                  <p className="mt-2 flex justify-center mb-3 w-[200px]">
                    Trains
                  </p>
                </div>

                
              </div>
            </div>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default RaptorxPay;
