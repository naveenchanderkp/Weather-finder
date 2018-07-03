import React, { Component } from 'react';
import './App.css';
//import {button} from 'reactstrap'; 


class Sample extends Component {

constructor(){
  super();

  this.state = {
  text:"Initial text"
   };
  
 }

  clicked(text){
  this.setState({text:text});
}
  render() {

    return (
      <div>
        {this.state.text}
        
        <input ref="textBox" type="text"/>
        <button bsstyle="primary" onClick= { (e) => {this.clicked("hello");} } >TheButton </button>
      </div>
      )
  }
  }
  




export {Sample as default };

  

