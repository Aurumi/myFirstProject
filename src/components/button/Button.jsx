import React from "react";
import "./button.css";

const Button =(props)=>{

    
    
    return <div className="button" onClick={()=>{ props.onClick(props.data)}}>{props.text}</div>
   




}

export default Button;