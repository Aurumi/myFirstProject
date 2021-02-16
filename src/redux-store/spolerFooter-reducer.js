
const CLICK_PLUS ="CLICK_PLUS"
const CLICK_CLOSE ="CLICK_CLOSE"

   let initialState = {

      SpolerData:[

        {id:1,tittle:"Купить", 
         listInfo:["Женщинам", "Мужичинам","Детям" ,"A&M"],
         toogle:false},

        {id:2,tittle:"Информация о компании", 
         listInfo:["карьера в A&M", "пресса","для инвесторов"],
         toogle:false},

        {id:3,tittle:"Помощь",
        listInfo:["найти магазин", "контакты"],
        toogle:false},

      ]
   }


let spolerFooterReducer = (state = initialState, action)=>{

   switch(action.type){

      case CLICK_PLUS :

        return {...state,SpolerData:state.SpolerData.map(item=>{

            if(item.id === action.id){

               return   {...item, toogle:true}

            }
            return item
        })
      
      }

      case CLICK_CLOSE :

      return {...state,SpolerData:state.SpolerData.map(item=>{

         if(item.id === action.id){

            return   {...item, toogle:false}
         }

         return item

      })}
      
    default: return state

   }

}

export let clickPlusAc =(id)=>({type:CLICK_PLUS,id})
export let clickCloseAc =(id)=>({type:CLICK_CLOSE,id})

export default spolerFooterReducer