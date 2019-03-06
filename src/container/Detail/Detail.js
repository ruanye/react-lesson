import React, { Component } from 'react'
import {getdetail} from '../../api/homeapi'
export default class Detail extends Component {
 constructor(){
	   super()
		 this.state={
			 item:{}
		 }
 }
async componentWillMount(){
  let c = await getdetail(this.props.match.params.id)
	 let item = c.data;
	 this.setState({item})
 }
render() {
		return (
	  <div>
		这是详情页 
		<div>{this.state.item.name}</div>
		<div>{this.state.item.info}</div>
		<img src = {this.state.item.img}/>
	    {this.props.match.params.id}
	
	  </div>
	)
  }
}
