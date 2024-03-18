import React, { createContext, useEffect, useState } from 'react'
import ChildA from './Components/ChildA';
// import ChildC from './Components/ChildC';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
const Contextdata = createContext();
const Contextdata2 = createContext();
function App() {
  let [product,setProduct] =useState({
    name: "BMW",
    product: "bike",
    number: 4538,
    image: "https://i.pinimg.com/originals/ae/59/f8/ae59f897f31cc5b814efc639ca7e5a35.png"
  });
  let gender = "male";
  useEffect(()=>{
    alert("Ho gaya");
  },)

  const Update=()=>{
  setProduct({...product,name:"R15"})
  }
  return (
    <div>
      <Contextdata.Provider value={product}>
        <Contextdata2.Provider value={gender}>
          <ChildA />
          <button onClick={Update}>Update</button>
        </Contextdata2.Provider>
      </Contextdata.Provider>
    </div>
  )
}

export default App
export { Contextdata, Contextdata2 }
