import React, { useState } from "react";
import "./mobileBurger.css"

import { Transition } from 'react-transition-group';



let MobileBurgerNavigation =(props)=>{

  return (

    <Transition in={props.toogle} timeout={400} mountOnEnter unmountOnExit>
          
    { state=> <nav className={`mobile-burger-navigation ${state}`}>

      <div className="mobile-burger-navigation__item">женщины</div>

      <div className="mobile-burger-navigation__item">мужчины</div>

      <div className="mobile-burger-navigation__item">дети</div>

      <div className="mobile-burger-navigation__item">корзина</div>

      <div className="mobile-burger-navigation__item">регистрация</div>

      </nav>}

      </Transition>

  )
}


let MobileBurger = (props)=>{

    return  <>

       <div onClick={props.toogle?  ()=>{props.setToogle(false)}: ()=>{props.setToogle(true)}} 

       className={props.toogle ?"mobile-burger-cross"  :"mobile-burger"}>
           
              <span></span>

       </div>

   < MobileBurgerNavigation {...props} />
                       
</>

}

export default MobileBurger