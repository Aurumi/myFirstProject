import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

import "./main.css"


let Main = (props)=>{

// let prr = 0;
//     const Move =(event)=>{
//         let coordinta = event.clientX
//         console.log(coordinta)
//         if(coordinta < prr.clientWidth/3){
//             alert("привет")
//         }
//     }
//     useEffect(()=>{

//      prr = document.querySelector(".Section-tittle")
//         console.log(prr.clientWidth)
//     },)

    return <main className="Main">
                
                <section   className="Section-Logo">
               
                    <div    className="Section-tittle ">aurum</div>
                       
                </section> 
               
                
                <section data-aos="fade-up"  className="Section-Woman">

                    <div className="Section-tittle Section-tittle_hover_black"> для нее </div>

                    <div className="Move-Menu">

                    <NavLink to="/#"> <div className="Move-Menu__item"> головные уборы </div></NavLink>
                    <NavLink to="/#"><div className="Move-Menu__item"> шарфы </div></NavLink>
                    <NavLink to="/#"><div className="Move-Menu__item"> платки </div></NavLink>
                    <NavLink to="/#"> <div className="Move-Menu__item"> перчатки </div></NavLink>
                    </div>

                </section> 
               
                <section data-aos="fade-up" className="Section-Man">

                    <div className="Section-tittle Section-tittle_hover_black"> для него </div>

                    <div className="Move-Menu">

                    <NavLink to="/#"> <div className="Move-Menu__item"> головные уборы</div></NavLink>
                    <NavLink to="/#"> <div className="Move-Menu__item"> шарфы </div></NavLink>
                    <NavLink to="/#"><div className="Move-Menu__item"> перчатки </div></NavLink>
                       
                        
                    </div>

                </section> 

                <section data-aos="fade-up" className="Section-kids">

                    <div className="Section-tittle Section-tittle_hover_black"> для детей </div>

                    <div className="Move-Menu">

                    <NavLink to="/#"><div className="Move-Menu__item"> головные уборы</div></NavLink>
                    <NavLink to="/#"> <div className="Move-Menu__item"> шарфы </div></NavLink>
                    <NavLink to="/#"><div className="Move-Menu__item"> перчатки </div></NavLink>

                    </div>

                </section> 
        
                
        
         </main>


}

export default Main





