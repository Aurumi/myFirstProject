import React from "react"
import "./basket.css"
import basket from "../../image/basket/basket.png"

let Basket =(props)=>{
    
    return <div className="basket"> <img src={basket}/> {props.sum}</div>
}

export default Basket