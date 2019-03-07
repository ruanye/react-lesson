import React, { Component } from 'react'
// with给没有路由的组件可以使用路由的属性
import {withRouter} from  'react-router-dom'
 class Mheader extends Component {
  goback=()=>{
	 this.props.history.goBack();
  }
  render() {
	return (
	  <div className='mhearder'>
		 <i className='iconfont icon-fanhui' onClick={this.goback}></i>
		{this.props.children}
	  </div>
	)
  }
}
export default withRouter(Mheader)