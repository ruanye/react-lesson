import React, { Component } from 'react'

export default class Profile extends Component {
  login = ()=>{
     this.props.history.push('/login')
  }
  render() {
	return (
	  <div>
		个人中心
	    <button onClick={this.login}>登录</button>
	  </div>
	)
  }
}
