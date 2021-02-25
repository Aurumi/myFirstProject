import React, { useState } from "react"
import { connect } from "react-redux"
import { deleteProductAc } from "../../redux-store/productPage-reducer"

import BasketPage from "./BasketPage"




let ContainerBasketPage =(props)=>{

    let arr=props.basketProduct
    let sum = 0
     for(var obj in arr ){  
 
         sum +=arr[obj].price
     }

    return <BasketPage {...props} sum={sum}  deleteProductAc={props.deleteProductAc}/>


}



 let mapStateToProps =(state)=>{

    return {

        basketProduct:state.productPage.basketProduct
    }
}

export default connect(mapStateToProps,{deleteProductAc})(ContainerBasketPage )