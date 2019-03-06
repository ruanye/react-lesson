import React, { Component } from 'react'
import {render} from 'react-dom'
import {HashRouter as Router,Route,Switch,Redirect}  from 'react-router-dom'
import App from './container/App';
import Home from './container/home/home';
import store from './store'
import {Provider} from 'react-redux'
import Detail from './container/Detail/Detail';
class Index extends Component {
  render() {
	 return (
		 <Provider store={store}>
	  	<Router>
				<App>
			    <Switch>
				   <Route path='/' exact={true} component={Home} />
            <Route path='/detail/:id' component={Detail} />
           <Route path='/profile' component={Home} />
           <Route path='/d' component={Home} /> 
				  
				   <Redirect to='/' />
			     </Switch>
			  </App>
		 </Router>
		 </Provider>
		 )
  }
}
render(<Index/>,document.getElementById('root'))
