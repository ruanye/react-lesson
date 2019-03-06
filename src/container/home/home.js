import React, { Component } from 'react'
import Homeheader from './Homeheader';
import Banner from './Banner'
import '../../common/Home.css'
import {connect} from 'react-redux'
import actions from '../../store/actions/home'
import List from './List';
class Home extends Component {
	componentWillMount(){
	  if(this.props.sliders.length===0){
       this.props.getbannerApi()
		 }
		 //请求列表
	  if(this.props.lesson.list.length==0){
 				this.props.setlist() 
		 }
	}
	// 设置类型
	selLesson=(lesson)=>{ 
   this.props.updateLesson(lesson)
	}
	// 加载更多
	loadmore=()=>{
		// 调用aciton的loadmore事件 
		if(this.props.lesson.hasMore){
				this.props.loadmore()
			}
		}
	render() {
   return (
	  <div className='app'>
		  <Homeheader selLesson={this.selLesson} />
		  <div className='page-wrap'>
			  {
				// 当数据拿到后再去渲染轮播图组件
			   this.props.sliders.length?<Banner sliders={this.props.sliders}/>:'loading'
			  }
       <List lesson={this.props.lesson}/>
			<div className="btn-box" >
		  	<button onClick={this.loadmore}>点击加载更多</button>
			</div>
	    </div>
		
	  </div>
	)
  }
}
const  mapStateToProps=(state)=>{
    return {
		  ...state.home
		}
}

const mapDispatchToProps={
   ...actions
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)

