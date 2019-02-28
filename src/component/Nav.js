import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import '../common/Nav.css'
export default class Nav extends Component {
  render() {
	return (
		 <nav className="nav">
		   <NavLink exact={true} className="nav-link" to='/'>
			   <i className='iconfont icon-book'></i>
			    <span>首页</span>
					
	     </NavLink>
		   <NavLink className="nav-link" to='/user'>
			 	 <i className='iconfont icon-react'></i>
			    <span>课程</span>
			 </NavLink>
		   <NavLink className="nav-link" to='/profile'>
			   <i className='iconfont icon-guanyuwomen'></i>
		     	<span>课程</span>
				</NavLink>
	   </nav> 
	)
  }
}
