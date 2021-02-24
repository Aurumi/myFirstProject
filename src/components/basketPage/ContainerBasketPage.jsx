import React from "react";
import { connect } from "react-redux";
import { closeBurgerAc, openBurgerAc } from "../../redux-store/burger-reducer";
import BasketPage from "./BasketPage";





let ContainerBasketPage=(props)=>{
    
    return <BasketPage {...props}/>
}

const mapStateToProps = (state)=>{
    
    return {

        basketProduct:state.productPage.basketProduct
       
    }
}






export default connect(mapStateToProps,{openBurgerAc,closeBurgerAc})(ContainerBasketPage)