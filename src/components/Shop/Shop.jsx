import React from "react"
import { NavLink } from "react-router-dom";
import "./shop.css"



const Shop =()=>{

    return  <div className="wrapper-shop">

        <div className="container-shop">

          
          <div className="navigation-shop">

              <div className="navigation-shop__tittle">женщины</div>
             <NavLink to="/"><div className="navigation-shop__item">шапки</div> </NavLink> 
             <NavLink to="/"><div className="navigation-shop__item">платки</div></NavLink> 
             <NavLink to="/"><div className="navigation-shop__item">шарфы</div></NavLink>
             <NavLink to="/"><div className="navigation-shop__item">перчатки</div></NavLink>


             <div className="navigation-shop__tittle">мужчины</div>
             <NavLink to="/"><div className="navigation-shop__item">шапки</div></NavLink>
             <NavLink to="/"> <div className="navigation-shop__item">платки</div></NavLink>
             <NavLink to="/"><div className="navigation-shop__item">шарфы</div></NavLink>
             <NavLink to="/"> <div className="navigation-shop__item">перчатки</div></NavLink>


              <div className="navigation-shop__tittle">дети</div>
             <NavLink to="/"><div className="navigation-shop__item">шапки</div></NavLink>
             <NavLink to="/"><div className="navigation-shop__item">платки</div></NavLink>
             <NavLink to="/"><div className="navigation-shop__item">шарфы</div></NavLink>
             <NavLink to="/"> <div className="navigation-shop__item">перчатки</div></NavLink>

          </div>

          <div className="cards-shop"></div>





        </div>
    </div>
}

export default Shop;