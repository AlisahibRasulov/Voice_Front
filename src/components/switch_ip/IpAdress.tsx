import React, { useState } from 'react';
import { ISwitchIp } from '../../models/models';

interface PropsIp {
    ip: ISwitchIp
  };

const IpAdress = ({ip}:PropsIp) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='ip-dropdown'>
      
        <p>{ip.ip_address}</p>
    </div>
  )
}

export default IpAdress