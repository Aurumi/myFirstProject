

import dressZebra1 from "../image/models/womanDresses/dressZebra1.jpg"
import dressZebra2 from "./../image/models/womanDresses/dressZebra2.jpg"
import dressBlue1 from "./../image/models/womanDresses/dressBlue1.jpg"
import dressBlue2 from "./../image/models/womanDresses/dressBlue2.jpg"
import dressChine1 from "./../image/models/womanDresses/dressChine1.jpg"
import dressChine2 from "./../image/models/womanDresses/dressChine2.jpg"
import dressDot1 from "./../image/models/womanDresses/dressDot1.jpg"
import dressDot2 from "./../image/models/womanDresses/dressDot2.jpg"


const SWITCH_IMG_MOVE = "SWITCH_IMG_MOVE"
const SWITCH_IMG_LEAVE ="SWITCH_IMG_LEAVE"

let initialState = {

    womanDresses:[
    
        {id:1, filter:false,img:dressZebra1,img2:dressZebra2, color:"black", tittle:"Платье в стиле зебры", structure:"хлопок", price:25, season:"лето",switch:false},
        {id:2, filter:false,img:dressBlue1,img2:dressBlue2, color:"blue", tittle:"Платье голубое", structure:"хлопок", price:25, season:"лето",switch:false},
        {id:3, filter:false,img:dressChine1,img2:dressChine2, color:"wheat", tittle:"Платье Chine", structure:"хлопок", price:25, season:"лето",switch:false},
        {id:4, filter:false,img:dressDot1,img2:dressDot2, color:"purple", tittle:"Платье Dote", structure:"хлопок", price:25, season:"лето",switch:false},
        
        
        
          
],


}



let shopReducer  = (state = initialState , action) =>{

    switch( action.type ){

           case SWITCH_IMG_MOVE :

           return {...state,womanDresses:state.womanDresses.map(item=>{
               
            if(item.id === action.id){
               return {...item,switch:true}
            }
            return {...item,switch:false}
           })}


        //    case SWITCH_IMG_LEAVE :
        //        return {...state,womanDresses:state.womanDresses.map(item=>{
        //            if(item.id===action.id){
        //                return {...item,switch:false}
        //            }
        //            return item 
        //        })}

        default:return state
    }

}

 export const switchImgMoveAc =(id)=>({type:SWITCH_IMG_MOVE,id})
 export const switchImgLeaveAc =(id)=>({type:SWITCH_IMG_LEAVE,id})
 

export default shopReducer