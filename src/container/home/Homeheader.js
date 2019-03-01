import React, { Component } from 'react'
import Transition from 'react-transition-group/Transition';
// duration动画时间
const duration = 300;
// 默认的style属性
const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
  display: "none"
};
// 进入中 和进入结束
const transitionStyles = {
  entering: { opacity: 0 },
  entered:  { opacity: 1 },
}

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
	// 点击选中课程
	chooselesson=(e)=>{
		// 通过props 调用Home组件的selLesson方法
		this.props.selLesson(e.target.dataset.type);
		 this.changeShow()
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
		  <Transition in={this.state.isShow} timeout={duration} onEnter={(node)=>{
				node.style.display='block'
			}} onExit={(node)=>{
					node.style.display='none'
			}}>
		  {
				(state)=>(
          <ul className="lessonlist" onClick={this.chooselesson} style={{
          ...defaultStyle,
          ...transitionStyles[state]
        }}>
  						<li data-type='all'>全部</li>
			    		<li data-type='react'>react课程</li>
			   			<li data-type='node'>node课程</li>
					 </ul>
					)
				}
	  </Transition>
		 
	 </div>
	)
 }
}
