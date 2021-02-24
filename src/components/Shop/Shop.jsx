import React, { useState } from "react"
import { NavLink, Router } from "react-router-dom";
import Cards from "../Card/Cards";
import MobileBurger from "../mobileBurger/ContainerMobileBurger";
import ContainerProductPage from "../productPage/ContainerProductPage";


import "./shop.css"





const Shop =(props)=>{

    return  <div className="wrapper-shop">

        <div className="container-shop">
                 
                 
          
          <div className="navigation-shop">

          <div className="absolute">

                      <MobileBurger/>

          </div>

              <div className="navigation-shop__tittle">женщины</div>
             <NavLink activeStyle={{color:"red"}} to="/Shop/womanDresses"><div className="navigation-shop__item">платья</div> </NavLink> 
             <NavLink to="/"><div className="navigation-shop__item">платки</div></NavLink> 
             <NavLink to="/"><div className="navigation-shop__item">шарфы</div></NavLink>
             <NavLink to="/"><div className="navigation-shop__item">перчатки</div></NavLink>


             <div className="navigation-shop__tittle">мужчины</div>
             <NavLink to="/"><div className="navigation-shop__item">шапки</div></NavLink>
             <NavLink to="/"> <div className="navigation-shop__item">платки</div></NavLink>
             <NavLink to="/"><div className="navigation-shop__item">шарфы</div></NavLink>
             <NavLink to="/"> <div className="navigation-shop__item">перчатки</div></NavLink>


          </div>

          <div className="cards-shop">

             {/* <Router path="/Shop/womanDresses" render={()=>{<Cards/>}}></Router> */}
              
                   <Cards thing={props.womanDresses} getInfoProductAc={props.getInfoProductAc} switchImgLeaveAc={props.switchImgLeaveAc} switchImgMoveAc={props.switchImgMoveAc} />
          </div>


        </div>
    </div>
}

export default Shop;