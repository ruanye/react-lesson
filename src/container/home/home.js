import React, { Component } from 'react'
import Homeheader from './Homeheader';
import '../../common/Home.css'
export default class Home extends Component {
	selLesson(lesson){ 
		//把selLesson最为Homeheader的props进行传值
   console.log(lesson,'----')
	}
  render() {
	return (
	  <div>
		  <Homeheader selLesson={this.selLesson} />
	  </div>
	)
  }
}
