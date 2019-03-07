import React, { Component } from 'react'
import {render} from 'react-dom'
import {HashRouter as Router,Route,Switch,Redirect}  from 'react-router-dom'
import App from './container/App';
import Home from './container/home/home';
import store from './store'
import {Provider} from 'react-redux'
import Detail from './container/Detail/Detail';
import Profile from './container/Profile/Profile';
import Login from './container/Login/Login';
import Regsiter from './container/Register/Regsiter';
class Index extends Component {
  render() {
	 return (
		 <Provider store={store}>
	  	<Router>
				<App>
			    <Switch>
				   <Route path='/' exact={true} component={Home} />
            <Route path='/detail/:id' component={Detail} />
           <Route path='/profile' component={Profile} />
           <Route path='/login' component={Login} />
           <Route path='/regsiter' component={Regsiter} />
            <Redirect to='/' />
			    </Switch>
			  </App>
		 </Router>
		 </Provider>
		 )
  }
}
render(<Index/>,document.getElementById('root'))
