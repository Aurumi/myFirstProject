import React, { useState } from "react"
import { connect } from "react-redux"
import { switchImgLeaveAc, switchImgMoveAc } from "../../redux-store/shop-reducer"
import Shop from "./Shop"



let ContainerShop =(props)=>{

    return  <Shop {...props}  switchImgMoveAc={props.switchImgMoveAc} switchImgLeaveAc={props.switchImgLeaveAc} />
}

let mapStateToProps=(state)=>{

    return {

        womanDresses:state.shop.womanDresses

    }
}





export default connect(mapStateToProps,{switchImgMoveAc,switchImgLeaveAc})(ContainerShop )