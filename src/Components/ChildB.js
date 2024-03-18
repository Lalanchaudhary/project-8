import React, { useContext } from 'react'
import ChildC from './ChildC'
import { Contextdata } from '../App'
import { Contextdata2 } from '../App'
function ChildB() {
    let data1=useContext(Contextdata);
    let data2=useContext(Contextdata2);
  return (
    <div>
          <div>
         <img src={data1.image} height="200px" alt='bike'></img>
         <h1>{data1.name}</h1>
         <h4>Product: {data1.product}</h4>
         <h4>Vechile No.{data1.number}</h4>
    </div>
    </div>
  )
}

export default ChildB
