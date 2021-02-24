
const GET_INFO_PRODUCT = "GET_INFO_PRODUCT";
const ADD_PRODUCT_IN_BASKET ="DD_PRODUCT_IN_BASKET";



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
    
        default:
            return state ;
    }
}

export let getInfoProductAc=(product)=>({type:GET_INFO_PRODUCT ,product})
export let addProductInBasketAc=(product)=>({type:ADD_PRODUCT_IN_BASKET ,product})
export default productPageReducer
