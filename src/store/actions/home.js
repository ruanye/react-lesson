import * as Types from '../aciton-types';
import {getbanner} from '../../api/homeapi'
let actions={
  //选择课程的action 
   updateLesson(lesson){
	  return {type:Types.SET_LESSON,lesson} 
   },
   getbannerApi(){
      return function(dispatch,getstate){
        //  dispatch -->store.dispatch
        //  getstate-->store.getstate
        dispatch({type:Types.SET_BANNER,payload:getbanner()})
      }
   }
}
export default actions

