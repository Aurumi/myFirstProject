import React from "react";
import { NavLink } from "react-router-dom";
import Burger from "../burger/ContainerBurger";
import "./header.css"


let Header = (props)=>{

    return <header className="header">
                <nav className="header__navigation">

                <NavLink to="/"> <div className="header__element"> женщины     </div></NavLink> 
                <NavLink to="/"> <div className="header__element"> мужчины     </div></NavLink> 
                <NavLink to="/"> <div className="header__element"> дети        </div></NavLink> 
                <NavLink to="/"> <div className="header__element"> корзина     </div></NavLink>
                <NavLink to="/"> <div className="header__element"> регистарция </div></NavLink>
                    
                </nav>
        
                <Burger/>
              
        
         </header>


}

export default Header