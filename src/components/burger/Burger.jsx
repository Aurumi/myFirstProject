import React from "react";
import "./burger.css"

import { Transition } from 'react-transition-group';

let BurgerNavigation =(props)=>{

  return (

    <Transition in={props.toogle} timeout={400} mountOnEnter unmountOnExit>
          
    { state=> <nav className={`burger-navigation ${state}`}>

      <div className="burger-navigation__item">женщины</div>

      <div className="burger-navigation__item">мужчины</div>

      <div className="burger-navigation__item">магазин</div>

      <div className="burger-navigation__item">корзина</div>

      <div className="burger-navigation__item">регистрация</div>

      </nav>}

      </Transition>

  )
}


let Burger = (props)=>{

    return  <>
    
       {props.toogle === false  ?  <div className="burger" onClick={props.openBurgerAc}> <span> </span></div>:

      
        <div className="burger-cross" onClick={props.closeBurgerAc}> <span> </span></div>}
        
        
     < BurgerNavigation {...props} />

                       
</>

}

export default Burger