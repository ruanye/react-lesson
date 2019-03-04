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
  }
	selLesson=(lesson)=>{ 
   this.props.updateLesson(lesson)
	}
  render() {
   return (
	  <div>
		  <Homeheader selLesson={this.selLesson} />
		  <div className='page-wrap'>
			 {
				// 当数据拿到后再去渲染轮播图组件
			   this.props.sliders.length?<Banner sliders={this.props.sliders}/>:'loading'
			 }
			  
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

