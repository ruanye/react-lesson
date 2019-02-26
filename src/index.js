import React, { Component } from 'react'
import {render} from 'react-dom'
import {HashRouter as Router,Route,Switch,Redirect}  from 'react-router-dom'
import Home from './container/Home'
import Profile from './container/Profile';
import User from './container/User';
import App from './container/App';
class Index extends Component {
  render() {
	 return (
	  	<Router>
				<App>
			    <Switch>
				    <Route path='/' exact={true} component={Home} />
            <Route path='/user' component={User} />
           <Route path='/profile' component={Profile} />
				   {/* 重定向 */}
				   <Redirect to='/' />
			     </Switch>
			  </App>
		 </Router>
	
	 )
  }
}
render(<Index/>,document.getElementById('root'))
