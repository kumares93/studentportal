import React from 'react';
import {connect} from 'react-redux';
import './Login.css';
import LoginAction from '../../Actions/LoginAction';
class Login extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        if(!this.props.status){ 
        return (  <form name="login" id="login-form" onSubmit={(e)=>{this.props.LoginAction(e)}} method="post">       
        <h1>Please Login </h1>
        <h4>{this.props.loginerror}</h4>
        <div><label htmlFor="userid"><i className="fas fa-user"></i> UserID</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input ref="user" type="text" name="userid" id="login" required/></div>
        <div><label htmlFor="password"><i className="fas fa-key"></i> Password</label>&nbsp;<input type="password" ref="pass" name="password" id="pass" required/></div>
        <input type="submit" name='submit'/>  <input type="reset" />
        </form>);}
        else{
            return(
                <div>
                <h1>Hi {this.props.content.name},
                </h1>
                <h4>Your Age:{this.props.content.age}</h4>
                <h4>Your userid:{this.props.content.userid}</h4>
                </div>
            );
        }
    }
}
let mapStatetoProps=(state)=>{
    console.log(state);
    if(state.status){
      console.log(btoa((state.content)));
      localStorage.setItem('id',btoa(state.content));
  }
    return{ 
            loginerror:state.loginerror,
            content:state.content,
            status:state.status
        }
}
export default connect(mapStatetoProps,{LoginAction})(Login);