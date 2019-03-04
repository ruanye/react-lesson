import React, { Component } from 'react'
import Homeheader from './Homeheader';
import '../../common/Home.css'
import {connect} from 'react-redux'
import actions from '../../store/actions/home'
class Home extends Component {
	componentWillMount(){
    this.props.getbannerApi()
	}
	selLesson=(lesson)=>{ 
   this.props.updateLesson(lesson)
	}
  render() {
   return (
	  <div>
		  <Homeheader selLesson={this.selLesson} />
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

