import React, { Component } from 'react';
import logo from './logo.png'; 
import './App.css';
import Routes from './Containers/Route/Routes';
import Content from './Containers/Content';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
//import {AppCheck,AppRegister,AppHome} from './Actions/LoginAction';

class App extends Component {
  constructor(props){
    super(props);
    this.state={Login:<h1>hi</h1>};
  }
  render() {
    return (
     
      <div className="App">
        <header className="App-header">
        <NavLink to='/' activeClassName="activ" className="selected"><img src={logo} className="App-logo" alt="logo" /></NavLink>
          <h1 className="App-title">The Student Hub</h1>
          <Content />
        </header>
        <div className="App-intro">
        <Routes />
        </div>
      </div>
    );
  }
}
export default  (App);
// <ul> <li><a onClick={()=>this.props.AppHome()}> Home</a></li>
// <li><a onClick={this.handleLogin}>{this.props.bLogin.Login}</a></li>
// <li><a onClick={this.handleSignup}>{this.props.bLogin.SignUp}</a></li>
// </ul>