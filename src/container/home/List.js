import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class List extends Component {
  render() {
	return (
	  <div className='list'>		    {this.props.lesson.list.length? this.props.lesson.list.map((item,index)=>(
				 <div  key={item.id}>
				 <Link to={{pathname:`/detail/${item.id}`,state:item}}>
					 <img  src={item.img}/>
					 <p>{item.name}</p>
					 <p>{item.info}</p>
				 </Link>
				 </div>
			 )):'正在加载'}
      </div>
	)
  }
}
