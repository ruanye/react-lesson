import * as Types from '../aciton-types'
//初始化state 
let initstate={
   lesson:'all'
}
function home(state=initstate,action){
    switch (action.type) {
		case Types.SET_LESSON:
			return {...state,lesson:action.lesson}
			break;
   }
   return state
}
export default  home