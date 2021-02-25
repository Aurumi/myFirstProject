
const GET_INFO_PRODUCT = "GET_INFO_PRODUCT";
const ADD_PRODUCT_IN_BASKET ="ADD_PRODUCT_IN_BASKET";
const DELETE_PRODUCT_FROM_BASKET= "DELETE_PRODUCT_FROM_BASKET"


let initialState={

    product:"",
    basketProduct:[]

    

}

let productPageReducer =(state=initialState, action)=>{

    
    switch (action.type) {

        case GET_INFO_PRODUCT :

        
            
        return {...state,product:action.product}
          
        case ADD_PRODUCT_IN_BASKET:

        return {...state,basketProduct:[...state.basketProduct,action.product]}

        case DELETE_PRODUCT_FROM_BASKET: 

        return {...state,basketProduct:state.basketProduct.filter(item=>item.id !== action.id)}
    
        default:
            return state ;
    }
}

export let getInfoProductAc=(product)=>({type:GET_INFO_PRODUCT ,product})
export let addProductInBasketAc=(product)=>({type:ADD_PRODUCT_IN_BASKET ,product})
export let deleteProductAc =(id)=>({type:DELETE_PRODUCT_FROM_BASKET,id})
export default productPageReducer
