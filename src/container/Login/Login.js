import React, { Component } from 'react'

export default class Login extends 
Component {
 constructor(){
	 super()
	// 不需要通过state 进行管理的叫做非受控组件 
}
toRegister=()=>{
  this.props.history.push('/regsiter')
}
surelogin=()=>{
   console.log(this.x.value)
    //  ref 使用箭头函数 表示dom加载完成就会把值赋值到实例的属性上
}
render() {
  return (
	  <div>
		登录页
		 <input placeholder='输入用户名' ref={x=>this.x=x}/>
		 <input placeholder='输入密码' />
		 <button onClick={this.toRegister}>前往注册</button>
		 <button onClick={this.surelogin}>确认</button>
	  </div>
	)
  }
}
