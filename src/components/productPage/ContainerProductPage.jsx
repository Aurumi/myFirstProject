import React from "react";
import { connect } from "react-redux";
import { addProductInBasketAc } from "../../redux-store/productPage-reducer";

import ProductPage from "./ProductPage";




let ContainerProductPage =(props)=>{
    
    return <ProductPage  {...props} addProductInBasketAc={props.addProductInBasketAc}/>
}

const mapStateToProps = (state)=>{
    
    return {

        
       
        product:state.productPage.product
       
    }
}





export default connect(mapStateToProps,{addProductInBasketAc})(ContainerProductPage)
