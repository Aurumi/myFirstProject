import React from "react"
import Filter from "../filter/Filter"
import "./cards.css"



let Cards =(props)=>{

    return <>
    <div className="tittle-filter-block">
        <div className="tittle-filter-block__tittle">Платье</div>
        <div className="tittle-filter-block__filter"> фильтр товаров <Filter/></div>
        
    </div>
 <div className="container-card">
       {props.thing.map(item=>{
         
         return <div onMouseEnter={()=>{props.switchImgMoveAc(item.id)}} onMouseLeave={()=>{props.switchImgLeaveAc(item.id)}}  key={item.id} className="card">
               <img src={ item.switch ?item.img2:item.img}/> 
                     <div className="card__tittle">{item.tittle}</div>
                     <div className="card__price">{item.price} б.руб</div>
                     {/* <div style={{background:item.color}} className="card__color"></div> */}

           </div>
           
           
       })}
       </div>
    </>
    

    
}

export default Cards