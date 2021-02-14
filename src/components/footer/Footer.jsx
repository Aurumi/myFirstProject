import React, { useEffect, useState } from "react";
import {useSpring, animated} from 'react-spring'
import "./footer.css"
import instagram from "../../image/iconsSocialNetworks/iconsInstagram.png"
import viber from "../../image/iconsSocialNetworks/iconsViber.png"
import { Transition } from "react-spring/renderprops";


let Footer = (props)=>{

    const [toogle , setToogle] = useState(false)


    // const [widths, setWidth] =useState(123)

 
    // useEffect((widths)=>{
      
    //     let widthObject = document.querySelector(".section-navigation-spoler__info")
    //     widths=widthObject.clientHeight;
    //     setWidth(widths)
    //     console.log(widths)
        

    // },[widths])


    
   
    // const animation = useSpring({

    //     to:{height:"80px", opacity:1},
    //     from:{height:"10px",opacity:0},
    //     config:{duration:1500}

    // })

    let Toogle =()=>{
       console.log("click")
        setToogle(!toogle)
        let widthObject = document.querySelector(".section-navigation-spoler__info")
        
         if(toogle===true){

            widthObject.style.height=180+"px";
            widthObject.style.display="block";
           
         }else
         widthObject.style.height=0+"px";
        
         
         
            
            
        

        
        
      
    }

    return <footer className="footer">
                
        
              <div className="footer-container">


                  <div className="section-navigation-spoler">

                      <div className="section-navigation-spoler__item">Купить
                      <div className="plus" onClick={Toogle}></div>

  
 

                       <div  className="section-navigation-spoler__info" > px</div> 
                      </div>
                      <div className="section-navigation-spoler__item">Информация о компании
                      <div className="plus"></div>
                      </div>
                      <div className="section-navigation-spoler__item">помощь
                      <div className="plus"></div>
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
                      <img  src={viber} alt="viber"/>
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