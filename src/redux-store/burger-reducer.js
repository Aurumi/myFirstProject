const OPEN_BURGER = "OPEN_BURGER"
const CLOSE_BURGER = "CLOSE_BURGER "

let initialState = {

toogle:false

}

let burgerReducer =(state=initialState , action)=>{

    switch(action.type){

        case OPEN_BURGER: 
           
        return {...state,toogle:true}

        case CLOSE_BURGER:

        return {...state,toogle:false}
        
        default: return state
    }
}

export default burgerReducer
export let openBurgerAc = () =>({type:OPEN_BURGER})
export let closeBurgerAc = ()=>({type:CLOSE_BURGER})