import * as Types from '../aciton-types'
//初始化state 
let initstate={
   type:'all',
   sliders:[], 
   lesson:{
      hasMore:true,//默认有更多
      page:1,//默认是第一页
      list:[], //默认列表为空
      isLoading:true //表示是否正在加载
   }
 
}
function home(state=initstate,action){
    switch (action.type) {
		case Types.SET_LESSON:
			return {...state,type:action.lesson}
			break;
       case Types.SET_BANNER:
        return {
             ...state,sliders:action.payload.data
          }
        break;
        case  Types.SET_LIST:
        return {
           ...state,
           lesson:{
              ...state.lesson,
              hasMore:action.payload.hasMore, //修改是否有更多
              list:[...state.lesson.list,...action.payload.data], // 返回数组数据 
              isLoading:false //表示请求完成 修改状态
           }
         }
         
        break;
       }
   return state
}
export default  home