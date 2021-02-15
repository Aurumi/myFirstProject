import React, { useEffect, useState } from "react";
import {useSpring, animated} from 'react-spring'
import "./footer.css"
import instagram from "../../image/iconsSocialNetworks/iconsInstagram.png"
import viber from "../../image/iconsSocialNetworks/iconsViber.png"
import { Transition } from "react-spring/renderprops";


let Footer = (props)=>{

    
const [stateSpoler, setStateSpoler] = useState([

 {id:1,tittle:"Купить", listInfo:["Женщинам", "Мужичинам","Детям" ,"A&M"] ,toogle:false},
 {id:2,tittle:"Информация о компании", listInfo:["карьера в A&M", "пресса","для инвесторов"] ,toogle:false},
 {id:3,tittle:"Помощь" ,listInfo:["найти магазин", "контакты"],toogle:false},

]

)



const SpolerItem =(props)=>{


return   <div className="section-navigation-spoler__item">{props.tittle}
         <div className="plus" onClick={()=>{props.setStateSpoler([...stateSpoler])}}></div>
         <div className="section-navigation-spoler__info" >

             {props.listInfo.map(item=>{
                 return  props.toogle && <div>{item}</div>
             })}
         </div>
     </div>

}
    
   

    return <footer className="footer">
                
        
              <div className="footer-container">


                  <div className="section-navigation-spoler">

                      {stateSpoler.map( element =>{
                           
                           return <SpolerItem  key={element.id} tittle={element.tittle} listInfo={element.listInfo} toogle={element.toogle} setStateSpoler={setStateSpoler}/>

                      })}



                      {/* <div className="section-navigation-spoler__item">Купить
                      <div className="plus"></div>
                      <div  className="section-navigation-spoler__info" >


                      </div> 


                      </div>
                      <div className="section-navigation-spoler__item">Информация о компании
                      <div className="plus" ></div>
                      </div>
                      <div className="section-navigation-spoler__item">помощь
                      <div className="plus" ></div>
                      </div> */}
                      
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