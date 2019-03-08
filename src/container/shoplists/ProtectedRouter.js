import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
// 受保护的路由 
 class ProtectedRouter extends Component {
 componentWillMount(){
	 let login = false;
     if(!login){
	   this.props.history.push('/login')
	}
  }
  render() {
	// 这个component 就是我们要渲染的组件 
	let {component:C} = this.props;
    return <C/>
  }
}
export default withRouter(ProtectedRouter)