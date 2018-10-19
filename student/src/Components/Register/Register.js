import React from 'react';
import './Register.css'
import {connect} from 'react-redux';
import SignupAction from '../../Actions/SignupAction';
import Login from '../Login/Login';
class Regiter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        if(!this.props.signup_status)
        return (   <form id="register-form" onSubmit={(e)=>{this.props.SignupAction(e)}} method="post">
            <h1>Sign Up</h1>
            <h3>{this.loginerror}</h3>
            <div><label htmlFor="email"><b>Userid</b></label>
            <input type="Number" placeholder="Enter Userid" name="email" required />
            </div>
            <div>
            <label htmlFor="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required /> </div>
            <div>
            <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
            <input type="password" placeholder="Repeat Password" name="psw-repeat" required /> </div>
            <div>
            <label htmlFor="name"><b>Name</b></label>
            <input type="text" placeholder="Your Name" name="name" required /> </div>
            <div>
            <label htmlFor="age"><b>Age</b></label>
            <input type="number" placeholder="Age" name="age" required /> </div>
            <p>By creating an account you agree to our <a>Terms & Privacy</a>.</p>
            <div>
              <button type="submit" >Sign Up</button>
              <button type="reset">Reset</button>
            </div>
        </form>);
        else return <Login />
    }
}
let mapStatetoProps=(state)=>{
    debugger
    return{ 
            loginerror:state.loginerror,
            content:state.content,
            signup_status:state.signup_status
        }
}
export default  connect(mapStatetoProps,{SignupAction})(Regiter);