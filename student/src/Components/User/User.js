import React, { Component } from 'react';
import {callApi}  from '../../Actions/SagaResponse';
import {connect} from 'react-redux';
import {userAction} from '../../Actions/LoginAction';
import './User.css';
class User extends Component {
  constructor(props){
    super(props);
    this.state={
        result:'',
    }
    this.insertData=this.insertData.bind(this);
    this.mainInput1;
    this.mainInput2;
  }
 
insertData(e){
    e.preventDefault();
    console.log(e);
    callApi('/insertdata',{method: 'put', headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({"userid":this.props.content.userid,"title":e.target[0].value,"content":e.target[1].value})
    }).then(res=>  {
      console.log(res);
     this.setState({
         result:res
     })
    this.mainInput1.value="";
    this.mainInput2.value="";
    });
    
}
  render() {
  if(this.props.status)    
  return( 
  <div>
  {this.state.result}
        <h1>Ask a Question from your Student Hub</h1>
        <form id="user-form" onSubmit={(e)=>{this.insertData(e)}}>
              <div><label htmlFor="title"><b>Title</b></label>
            <input ref={(ref) => this.mainInput1= ref} id="title" type="text" placeholder="Enter Title" name="title" required />
            </div>
            <div>
            <label htmlFor="content"><b>Content</b></label>
            <input type="text" ref={(ref) => this.mainInput2= ref} id="content" placeholder="Enter Content" name="content" required /> </div>
            <input type="submit" name='submit'/>  <input type="reset" />
  </form>
  </div>
  );
  else return(
<div>Please Login Again</div>
  );
  }
}
let mapStatetoProps=(state)=>{
    
    return{ 
            content:state.content,
            status:state.status,
        }
  }
export default connect(mapStatetoProps,{userAction})(User);