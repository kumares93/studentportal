import React, { Component } from 'react';
import {callApi}  from '../Actions/SagaResponse';
import {connect} from 'react-redux';
import {homeAction} from '../Actions/LoginAction';
import PaginationHome from './PaginationHome';
import loading from './giphy.gif';
import './Home.css';
class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      activePage: 1
    };
    this.handlePageChange=this.handlePageChange.bind(this);
    this.loader=this.loader.bind(this);
  }
  handlePageChange(pageNumber) {
    this.setState({activePage: pageNumber});
    
  }
  componentDidMount(){
    callApi('/getdata',{ method: 'get', headers: {
      'Accept': 'application/json',
      }
  }).then(res=>  {
    console.log(res);
    this.props.homeAction(res);
      return res});
}
loader(value,index){ 
 return (
  (index<(this.state.activePage*5)&&(index>=(this.state.activePage*5)-5)) &&
  <div key={index}> 
  
  <h3>{value.title}</h3>
  <div>{value.content} 
  <strong>User:{value.userid}
  <i className="fas fa-comment"></i>
  {(this.props.login&&this.props.logincontent.userid==value.userid) && 
    <a onClick={()=>this.contentDelete(index)} className="select"><i className="fas fa-trash-alt"></i></a>} 
    </strong></div>
  </div>
 );
}
contentDelete(index){
  
  let Del_content;
   this.props.content.map((value,i)=>{
    if(i==index) {Del_content=value;}
  });
  const decision=window.confirm("Are you sure want to delete this post : "+Del_content.title+"?");
  if(decision)callApi("/deleteContent",
  { method: 'delete', headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(Del_content)
}).then(res=>  {
  console.log(res);
  this.props.homeAction(res);
    return res});
}
  render() {
    if(this.props.status)
  return( 
  <div className="container">
  <div >
  {this.props.content.map((value,index)=>
    this.loader(value,index)
  )
  }
 
 </div>
<PaginationHome handlePageChange={this.handlePageChange} activePage={this.state.activePage}/>
</div>);
else
return <div><img src={loading} /></div>
  }
}
let mapStatetoProps=(state)=>{
  console.log(state.homecontent);
  return{ 
          content:state.homecontent,
          status:state.portalstatus,
          login:state.status,
          logincontent:state.content
      }
}
export default connect(mapStatetoProps,{homeAction}) (Home);
