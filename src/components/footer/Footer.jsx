import React from "react";
import "./footer.css"
import instagram from "../../image/iconsSocialNetworks/iconsInstagram.png"
import viber from "../../image/iconsSocialNetworks/iconsViber.png"



let Footer = (props)=>{

    let stateSpoler = props.SpolerData

const SpolerItem =(props)=>{

    return   <div className = "section-navigation-spoler__item" > <span> {props.tittle} </span>

                {props.toogle==false ? 
                
                    <div className="plus" onClick={ ()=>{props.clickPlusAc(props.id) } }></div> :

                    <div className="minus"  onClick={ ()=>{props.clickCloseAc(props.id) } }></div>}

                    <div className="section-navigation-spoler__info" >

                        {props.listInfo.map(item=>{

                 return props.toogle &&  <div> {item} </div>

             })}

         </div>

     </div>

}
    
   return <footer className="footer">  

        <div className="footer-container">

             <div className="section-navigation-spoler">

                {stateSpoler.map( element =>{
                           
                    return <SpolerItem id = {element.id} tittle = {element.tittle} 
                                       toogle = {element.toogle} listInfo = {element.listInfo} 
                                       clickPlusAc = {props.clickPlusAc} clickCloseAc = {props.clickCloseAc} />

                      })}

                      
            </div>

            <div className = "section-navigation">

                <nav className="section-navigation__items">
                     
                    <div className = "section-navigation__tittle"> купить </div>
                    <div className = "section-navigation__item"> женщинам </div>
                    <div className = "section-navigation__item"> мужчинам </div>
                    <div className = "section-navigation__item"> детям </div>
                    <div className = "section-navigation__item"> A&M HOME </div>

                  </nav>

                  <nav className = "section-navigation__items">
                        <div className = "section-navigation__tittle"> Информация о компании </div>
                        <div className = "section-navigation__item"> карьера в A&M </div>
                        <div className = "section-navigation__item"> пресса </div>
                        <div className = "section-navigation__item"> для инвесторов</div>
                        
                  </nav>

                  <nav className = "section-navigation__items"> 
                  
                        <div className = "section-navigation__tittle"> помощь </div>
                        <div className = "section-navigation__item"> найти магазин </div>
                        <div className = "section-navigation__item"> контакты </div>
                        
                 </nav>


                </div>

                <div className="social-icons">  

                    <img src = {instagram } alt = "instagram"/>
                    <img src = {viber} alt = "viber"/>

                </div>


                <div className="social-info">   
                    <p> Вся информация и материалы, размещенные на данном веб-сайте защищены авторским правом и являются собственностью <br/>
             Эйч Энд Эм Хеннес энд Мауриц. Бизнес-идея A&M - мода и качество</p>
             
                </div> 
                  

                <div className="social-logo">A&M</div>
                  
            
        </div>  
        
         </footer>


}

export default Footer