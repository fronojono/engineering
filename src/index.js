import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route,Link } from "react-router-dom";
import Api from './components/Api';

import Login from './components/login';
import "./styles.css";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
      data: [
        { label: "FRIOUI Meher", value: 0 },
        { label: "FRIOUI Mouhamed", value: 1 },
        { label: "FRIOUI Mehddi", value: 2 },
        { label: "FRIOUI NAbil", value: 3 },
        { label: "FRIOUI khalil", value: 4 }
      ],
        username:"",
        password:'',
        visible:true
    
    };
  }
  
  handleChangeUsername=(username)=>{
    this.setState({
        username
    })
}
handleChangePassword=(password)=>{
  console.log('okkk',password)
  this.setState({
    password
  })
}
handleSubmit=()=>{
  this.setState({
    visible:false
  })
}
  render() {
    const { password,username,visible } =this.state
 console.log('ok',visible)
    return ( 
  
      <div>
       {visible? <Login handleChangePassword={this.handleChangePassword} 
                        handleChangeUsername={this.handleChangeUsername} 
                        handleSubmit={this.handleSubmit} / >: <Api/>}
     
      
     
      </div>
              
              

    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
