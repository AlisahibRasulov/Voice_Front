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
    <div className="dropdown border border-slate-800 w-52 h-72 overflow-scroll bg-slate-400">

<button onClick={toggleDropdown}>Dropdown</button>
      {isOpen && (
        <div className="dropdown-content">
          <a href="#">
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