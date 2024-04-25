import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";

function Dropdown({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdowns = () => {
    const dropdowns = document.querySelectorAll(".dropdown-content");
    dropdowns.forEach((dropdown) => {
      if (dropdown.id !== title) {
        dropdown.style.display = "none";
      }
    });
  };

  const dropdownContentStyle = {
    display: isOpen ? "block" : "none"
  };

  return (
    <div className="dropdown" id={title} onClick={() => { toggleDropdown(); closeDropdowns(); }}>
      <div className="flex">
        <button className="w-full md:w-85vw bg-[#020811] text-gray-400 py-5 px-4 mx-5 flex justify-between">
            {title}
            <MdArrowDropDown size={30}/>
        </button>
        
      </div>
      <div className="dropdown-content" style={dropdownContentStyle}>
        {isOpen && children}
      </div>
    </div>
  );
}

export default Dropdown;
