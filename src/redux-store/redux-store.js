import { combineReducers,createStore} from "redux";
import burgerReducer from "./burger-reducer";
import productPageReducer from "./productPage-reducer";
import shopReducer from "./shop-reducer";
import cardsReducer from "./shop-reducer";
import spolerFooterReducer from "./spolerFooter-reducer";


let reducerss = combineReducers({

    spolerFooter:spolerFooterReducer,
    burger:burgerReducer,
    shop:shopReducer,
    productPage: productPageReducer,
    
   
    
})


let store = createStore(reducerss)

export default store;