import React, { useState } from "react"

import MobileBurger from "./MobileBurger"




let ContainerMobileBurger =(props)=>{

    let [toogle, setToogle] = useState(false)

    
    return <MobileBurger {...props } toogle={toogle } setToogle={setToogle}/> 
}

export default ContainerMobileBurger





