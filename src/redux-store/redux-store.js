import { combineReducers,createStore} from "redux";
import burgerReducer from "./burger-reducer";
import spolerFooterReducer from "./spolerFooter-reducer";


let reducerss = combineReducers({

    spolerFooter:spolerFooterReducer,
    burger:burgerReducer
    
   
    
})


let store = createStore(reducerss)

export default store;