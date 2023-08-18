import React from 'react'
import FirstBox from './FirstBox'
import LastBox from './LastBox'
import MiddleBox from './MiddleBox'

const BoxWrapper = () => {
    
  return (
    
      <div className="flex lg:flex-col justify-evenly ">
        <FirstBox/>
        <MiddleBox />
        <LastBox/>
      </div>
   
  )
}

export default BoxWrapper
