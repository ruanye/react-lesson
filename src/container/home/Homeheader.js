import React, { Component } from 'react'

export default class Homeheader extends Component {
	constructor(){
		super()
		this.state={
			isShow:false
		}
	}
	changeShow =()=>{
		// 改变图标的显示状态
		this.setState({
			isShow:!this.state.isShow
		})
	}
 render(){
	return (
		<div>
	   <header className="header">
			  <span>logo</span>
				 <span onClick={this.changeShow}>
			   	{this.state.isShow?<i className="iconfont icon-guanbi"></i>
					 :<i className="iconfont icon-uilist"></i>
			   	}
			</span>
		 </header>
		 {this.state.isShow?<ul className="lessonlist">
			 <li>全部</li>
			 <li>react课程</li>
			 <li>node课程</li>
		 </ul>:''}
		 
	 </div>
	)
  }
}
