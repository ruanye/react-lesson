import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
// 受到保护的路由 
 class ProtectedRouter extends Component {
  componentDidMount(){
	   let login =false;
	   if(!login){
		   this.props.history.push('/login')
	   }
  }
  render() {
	  let C = this.props.component
	  console.log(C)
	  return <C/>
  }
}
export default withRouter(ProtectedRouter)