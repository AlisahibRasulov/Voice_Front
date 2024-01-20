// import React from 'react'
import { ISwitchInfo } from "../../models/models"

interface PropsInfo {
  info: ISwitchInfo
}

const InfoCard = ({info}:PropsInfo) => {
  return (
    <div>
      <a href="#"> Ip Address:{info.ip_address}</a>
      <p className="flex flex-col">Area: 
        <span>Name:{info.area.name}</span> 
        <span>Prefix:{info.area.prefix}</span> 
        </p>
    </div>
  )
}

export default InfoCard