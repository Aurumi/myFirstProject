import React from "react";
import { connect } from "react-redux";
import { closeBurgerAc, openBurgerAc } from "../../redux-store/burger-reducer";
import Burger from "./Burger";




let ContainerBurger=(props)=>{
    
    return <Burger {...props} openBurgerAc={props.openBurgerAc} closeBurgerAc={props.closeBurgerAc} />
}

const mapStateToProps = (state)=>{
    
    return {

       toogle:state.burger.toogle
       
    }
}






export default connect(mapStateToProps,{openBurgerAc,closeBurgerAc})(ContainerBurger)