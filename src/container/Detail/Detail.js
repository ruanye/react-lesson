import React, { Component } from 'react'
import {getdetail} from '../../api/homeapi'
import Mheader from '../../component/Mheader';
export default class Detail extends Component {
 constructor(){
	   super()
		 this.state={
			 item:{}
		 }
 }
async componentDidMount(){
	  // 如果state里面有就直接取值 如果没有就请求
	 let item = this.props.location.state;
	  if(!item){
		   let {data} = await getdetail(this.props.match.params.id)
       item= data
		 }
    this.setState({item})
 }
render() {

		return (

	  <div>
			<Mheader>详情页</Mheader>
		这是详情页 
		<div>{this.state.item.name}</div>
		<div>{this.state.item.info}</div>
		<img src = {this.state.item.img}/>
	    {this.props.match.params.id}
	
	  </div>
	)
  }
}
