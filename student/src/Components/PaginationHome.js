import React, { Component } from 'react';
import Pagination from "react-js-pagination";
import './Home.css';
import {connect} from 'react-redux';
//require("bootstrap/less/bootstrap.less");
class PaginationHome extends Component {
  constructor(props){
    super(props);
  }
  
  render(){
      return(
    <div className="page">
    <Pagination
             activePage={this.props.activePage}
             itemsCountPerPage={1}
             totalItemsCount={parseInt(this.props.length/5)+((this.props.length%5!=0)?1:0)}
             pageRangeDisplayed={5}
             onChange={this.props.handlePageChange}
             hideDisabled={true}
           />
   </div>
  );
}
}  
let mapStatetoProps=(state)=>{
    console.log(state.homecontent);
    return{ 
            length:state.homecontent.length,
        }
  }
export default connect(mapStatetoProps,null) (PaginationHome);