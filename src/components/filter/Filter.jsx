import React, { useState } from "react";
import "./filter.css";

const Filter =(props)=>{


    const [circle, setCircle] = useState(true)
    // const [sideBar, setSideBar] =useState(false)
    

    return <>
    <div className="filter"   onMouseMove={()=>{setCircle(false)}} onMouseOut={()=>{setCircle(true)}} >

    <span>
        <div className={(circle) ?"filter-circle": "move-circle"}></div>
        </span>
</div>


</>


}

export default Filter;