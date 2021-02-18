import React, { useState } from "react"
import { connect } from "react-redux"
import Shop from "./Shop"



let ContainerShop =(props)=>{

    let [toogle, setToogle] = useState(false)
    return  <Shop {...props} toogle={toogle } setToogle={setToogle}/>
}

let mapStateToProps=(state)=>{

    return {

        womanDresses:state.shop.womanDresses

    }
}



export default connect(mapStateToProps,{})(ContainerShop )