import React, { Component } from 'react'
import Homeheader from './Homeheader';
import Banner from './Banner'
import '../../common/Home.css'
import {connect} from 'react-redux'
import actions from '../../store/actions/home'
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
	selLesson=(lesson)=>{ 
   this.props.updateLesson(lesson)
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
      <div className='lessonlist'>
			 {this.props.lesson.list.length? this.props.lesson.list.map((item,index)=>(
				 <div  key={item.id}>
					 <img  src={item.img}/>
					 <p>{item.name}</p>
					 <p>{item.info}</p>
				 </div>
			 )):'正在加载'}
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

