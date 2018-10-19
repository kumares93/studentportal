import React from 'react';
import {Route ,Switch} from 'react-router-dom'
import Login from '../../Components/Login/Login';
import Register from '../../Components/Register/Register';
import Home from '../../Components/Home';
import User from '../../Components/User/User'
class Routes extends React.Component {
    render() {
      return (
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/Login" component={Login} />
          <Route path="/Register" component={Register} />
          <Route path="/user" component={User} />
          
      </Switch>        
    );
    }
  }
  export default  Routes;