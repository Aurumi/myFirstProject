import React from "react";
import Button from "../button/Button";


import "./productPage.css"


let ProductPage = (props)=>{

    let product = props.product
    // console.log(product)

    return <div className="productPage-container">

        <div className="productPage-image">
             <img src={product.img}/> 
             <img src={product.img2}/> 
             </div>
        <div className="productPage-info">
          <div className="productPage-info__tittle">{product.tittle} </div>
          <div className="productPage-info__price">{product.price} б.руб</div>
          <div className="productPage-info__img"> <img src={product.img}/></div>
          <Button text="добавить" onClick={props.addProductInBasketAc} data={product}/>

        </div>
        {/* <div>
        <img src={product.img}/>

        </div>
        <div>
        <img src={product.img2}/>

        </div> */}
        
    </div>

}

export default ProductPage