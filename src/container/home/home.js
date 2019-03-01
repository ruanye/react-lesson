import React, { Component } from 'react'
import Homeheader from './Homeheader';
import '../../common/Home.css'
import {connect} from 'react-redux'
// import actions from '../../store/acitons/home'
class Home extends Component {
	selLesson(lesson){ 
		//把selLesson最为Homeheader的props进行传值
   console.log(lesson,'----')
	}
  render() {
	console.log(this.props.lesson)
	return (
	  <div>
		  <Homeheader selLesson={this.selLesson} />
	  </div>
	)
  }
}
let  mapStateToProps=(state)=>{
    return {
			lesson:state.home.lesson
		}
}
let mapDispatchToProps=(action)=>{
    return {}
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
