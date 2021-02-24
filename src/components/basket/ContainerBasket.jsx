import React from "react";
import { connect } from "react-redux";

import Basket from "./Basket";





let ContainerBasket=(props)=>{
    
    let valueBasket = props.basketProduct;
    let sum = valueBasket.length;

   
 
    return <Basket {...props}  sum={sum}/>
}


const mapStateToProps = (state)=>{
    
    return {

      basketProduct:state.productPage.basketProduct
       
    }
}

export default connect(mapStateToProps,{})(ContainerBasket)