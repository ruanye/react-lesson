import * as Types from '../aciton-types'
//初始化state 
let initstate={
   lesson:'all',
   sliders:[]
}
function home(state=initstate,action){
    switch (action.type) {
		case Types.SET_LESSON:
			return {...state,lesson:action.lesson}
			break;
       case Types.SET_BANNER:
        console.log(action.payload,'3333')
          return {
             ...state,sliders:action.payload
          }
       break
   }
   return state
}
export default  home