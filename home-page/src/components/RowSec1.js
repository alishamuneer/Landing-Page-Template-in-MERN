import React from 'react'
import FirstRowBox from './FirstRowBox';
import RowBox from './RowBox';
import p11 from '../images/p11.jpg';
import p12 from '../images/p12.jpg';
import p13 from '../images/p13.jpg';



const RowSec1 = () => {
  return (
    <div>
      <div className="flex lg:flex-wrap justify-evenly" id="portfolio">
      <FirstRowBox/>
      <RowBox pic={p11}/>
      <RowBox pic={p12}/>
      <RowBox pic={p13}/>
      </div>
    </div>
  )
}

export default RowSec1
