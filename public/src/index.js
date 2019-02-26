import React, { Component } from 'react'
import {render} from 'react-dom'


class Index extends Component {
  render(){
	return (
	  <div>
			<Router>
        <Route path='/' component={Home} />
        <Route path='/user' component={User} />
        <Route path='/user' component={Profile} />
			</Router>
		</div>
	)
  }
}
render(<Index/>,document.getElementById('root'))
