// import React from 'react'
import InfoCard from "./InfoCard"
import { infoData } from "../../datas/infoData"


const Info = () => {
  return (
    <div>
      {
        infoData.map((item)=>(
          <InfoCard key={item.id} info={item}/>
        ))
      }
        
    </div>
  )
}

export default Info