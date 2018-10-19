import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {logoutAction} from '../Actions/LoginAction';
class Content extends Component {
  render() {
    if(!this.props.status)
    return (
         <ul><NavLink to='/' activeClassName="activ" className="selected"><li><i className="fas fa-home"></i> Home</li></NavLink>
         <NavLink to='/Login' activeClassName="activ" className="selected"><li><i className="fas fa-sign-in-alt"></i> Sign in</li></NavLink>
         <NavLink to='/Register' activeClassName="activ" className="selected" ><li><i className="fas fa-user-plus"></i>Sign up</li></NavLink>
         </ul>
    );
    else return(
      <ul>
        <NavLink to='/' activeClassName="activ" className="selected"><li><i className="fas fa-home"></i> Home</li></NavLink>
         <NavLink to='/user' activeClassName="activ" className="selected"><li><i className="fas fa-edit"></i> {this.props.content.name}</li></NavLink>
         <li onClick={this.props.logoutAction} className="selected"><i className="fas fa-sign-out-alt"></i> Sign out</li>
      </ul>
    )
}
}
let mapStatetoProps=(state)=>{
  debugger;
  return{ 
    content:state.content,
    status:state.status
      }
}
export default connect(mapStatetoProps,{logoutAction})(Content);