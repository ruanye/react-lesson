import * as Types from '../aciton-types';
actions={
  //选择课程的action 
   updateLesson(lesson){
	  return {type:Types.SET_LESSON,lesson} 
   }
}
export default actions