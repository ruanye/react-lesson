import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Nav extends Component {
  render() {
	return (
	   <nav>
		   <Link to='/'>首页</Link>
		   <Link to='/user'>用户</Link>
		   <Link to='/profile'>个人中心</Link>
	   </nav> 
	)
  }
}
