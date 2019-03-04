import * as Types from '../aciton-types'
//初始化state 
let initstate={
   lesson:'all',
   sliders:[],
   pingguo:'绿色'
}
function home(state=initstate,action){
    switch (action.type) {
		case Types.SET_LESSON:
			return {...state,lesson:action.lesson}
			break;
       case Types.SET_BANNER:
        return {
             ...state,sliders:action.payload.data
          }
        break
        case 'chipinguo':
         return {...state,pingguo:action.color}
        break
   }
   return state
}
export default  home