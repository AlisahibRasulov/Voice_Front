// import React from 'react'
import React, { useState } from 'react';

import { ipData } from "../../datas/ipData"
import IpAdress from "./IpAdress"

const IpDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">

<button className='border border-sky-600 w-44 h-10 rounded-[5px]' onClick={toggleDropdown}>Dropdown</button>
      {isOpen && (
        <div className="dropdown-content border border-slate-800 w-44 h-96 mt-5 overflow-scroll">
          <a href="#" className='text-[17px]'>
          {ipData.map((item)=>(
            <IpAdress
            key={item.id} ip={item}
            />
        ))}
          </a>
        </div>
      )}
        
    </div>
  )
}

export default IpDropdown