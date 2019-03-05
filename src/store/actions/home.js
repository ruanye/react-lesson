import * as Types from '../aciton-types';
import {getbanner,getlist} from '../../api/homeapi'
let actions={
  //选择课程的action 
   updateLesson(lesson){
	  return {type:Types.SET_LESSON,lesson} 
   },
   // 获取列表
   setlist(){
      // 默认请求第一页 参数type:'all',page:1
      return function(dispatch,getstate){
        // 取state里面的初始化数据
          let {type,lesson:{page,hasMore,isLoading}} = getstate().home
         // 如果没有更多了 就不派发请求了
          if(!hasMore)return
          // 派发请求
          dispatch({type:Types.SET_LIST,payload:getlist(page,type)})
         }
      },
  //  获取轮播图 
   getbannerApi(){
      return function(dispatch,getstate){
          dispatch({type:Types.SET_BANNER,payload:getbanner()})
      }
   }
}
export default actions

