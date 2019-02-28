import React, { Component } from 'react'
import Nav from '../component/Nav';
import '../common/reset.css'
export default class App extends Component {
  render() {
	return (
	  <div>
	     {this.props.children} 
			 <Nav/>
	  </div>
	)
  }
}