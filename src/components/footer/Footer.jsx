import React, { useEffect, useState } from "react";
import {useSpring, animated} from 'react-spring'
import "./footer.css"
import instagram from "../../image/iconsSocialNetworks/iconsInstagram.png"
import viber from "../../image/iconsSocialNetworks/iconsViber.png"
import { Spring, Transition } from "react-spring/renderprops";


let Footer = (props)=>{

    
// let array = null;
// let [toogle ,setToogle] = useState()
let toogle = false ;
    
   
useEffect(()=>{
    
    toogle = Array.from(document.querySelectorAll(".plus")) 
     let toogle2 = Array.from(document.querySelectorAll(".section-navigation-spoler__info"))
     console.log(toogle)
    
    toogle.map( element =>{
        
        element.onclick = (event)=>{
               
            toogle2.map( elements=>{

                if(element.id === elements.id){
                    toogle = true
                    elements.style.display ="block"

                }
               
            })
            
        }
        // console.log( typeof (element))
    })

    }


,[toogle])
 
    


    
   
    
    

    return <footer className="footer">
                
        
              <div className="footer-container">


                  <div className="section-navigation-spoler">

                      <div className="section-navigation-spoler__item">Купить
                      <div  id="1" className="plus" ></div>

                                  
                 
                  <div id="1" style={props} className="section-navigation-spoler__info" >123</div>
 

                       
                      </div>
                      <div className="section-navigation-spoler__item">Информация о компании
                      <div id="2" className="plus"></div>
                      <div id="2" style={props} className="section-navigation-spoler__info" >234</div>
                      </div>
                      <div className="section-navigation-spoler__item">помощь
                      <div id="3" className="plus"></div>
                      </div>
                      
                  </div>

                  <div className="section-navigation">

                  <nav className="section-navigation__items">
                     
                        <div className="section-navigation__tittle"> купить </div>
                        <div className="section-navigation__item"> женщинам </div>
                        <div className="section-navigation__item"> мужчинам </div>
                        <div className="section-navigation__item"> детям </div>
                        <div className="section-navigation__item"> A&M HOME </div>

                  </nav>
                  <nav className="section-navigation__items">
                        <div className="section-navigation__tittle"> Информация о компании </div>
                        <div className="section-navigation__item"> карьера в A&M </div>
                        <div className="section-navigation__item"> пресса </div>
                        <div className="section-navigation__item"> для инвесторов</div>
                        
                  </nav>
                  <nav className="section-navigation__items"> 

                  <div className="section-navigation__tittle"> помощь </div>
                        <div className="section-navigation__item"> найти магазин </div>
                        <div className="section-navigation__item"> контакты </div>
                        
                   </nav>


                  </div>


                  <div className="social-icons">
                             
                      <img src={instagram } alt="instagram"/>
                      <img src={viber} alt="viber"/>
                  </div>


                  <div className="social-info">
                      <p>
			Вся информация и материалы, размещенные на данном веб-сайте защищены авторским правом и являются собственностью <br/>
             Эйч Энд Эм Хеннес энд Мауриц. Бизнес-идея A&M - мода и качество</p>
             
                </div> 
                  

                  <div className="social-logo">A&M</div>
                  
            
              </div>  
        
         </footer>


}

export default Footer