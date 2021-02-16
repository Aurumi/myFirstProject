import React from "react";
import "./burger.css"
import {Spring} from 'react-spring/renderprops'

let BurgerNavigation =(props)=>{

  
  return <nav className="burger-navigation">
   <div className="burger-navigation__item"> <div onClick={props.closeBurgerAc} className="burger-cross"><span></span></div></div>
   <div className="burger-navigation__item">женщины</div>
   <div className="burger-navigation__item">мужчины</div>
   <div className="burger-navigation__item">дети</div>
   <div className="burger-navigation__item">корзина</div>
   <div className="burger-navigation__item">регистрация</div>

  </nav>
}


let Burger = (props)=>{

    return  <>
    
     {props.toogle === true  ? 
     
     <BurgerNavigation {...props} closeBurgerAc={props.closeBurgerAc}/>

    //  <div className="burger-cross"><span></span></div>
     
     
     
     :
                

              
     <div className="burger" onClick={props.openBurgerAc}> <span> </span></div> } 
                

               
             
              
</>

}

export default Burger