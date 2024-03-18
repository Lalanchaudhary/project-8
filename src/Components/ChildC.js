import React from 'react'
import { Contextdata } from '../App'
import { Contextdata2 } from '../App'
function ChildC() {
  return (
    <div>
                 <Contextdata.Consumer>
                {
                    (name) => {
                        return (
                            <Contextdata2.Consumer>
                                {
                                    (gender)=>{
                                        return (
                                            <>
                                            <h1>My name is {name}</h1>
                                            <h2>Gender:{gender}</h2>
                                            </>
                                        )
                                    }
                                }
                            </Contextdata2.Consumer>
                        )
                    }
                }
            </Contextdata.Consumer>
    </div>
  )
}

export default ChildC
