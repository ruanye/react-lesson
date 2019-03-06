import * as Types from '../aciton-types';
import {getbanner,getlist} from '../../api/homeapi'
let actions={
   // 加载更多
   loadmore(){
      return function(dispatch,getstate){
          let {lesson:{page}} = getstate().home;
          page=page+1;
          // 派发了一个修改分页的事件 
          dispatch({type:Types.SET_PAGE,page})
         // setlist 返回的又是一个函数  所以我们要继续调用里面这个函数  
          actions.setlist()(dispatch,getstate)
      }
   },
  //选择课程的action 
   updateLesson(lesson){
      return function(dispatch,getstate){
         dispatch({type:Types.SET_LESSON,lesson})
         //清空原来的数据 重新获取
          actions.setlist()(dispatch,getstate)
      }
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

