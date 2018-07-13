import React from "react";


class Form extends React.Component{

  constructor(props){
  super(props);

  	this.state = {value:''};
  
  	this.handleChange = this.handleChange.bind(this);
  	this.handleSubmit = this.handleSubmit.bind(this);
  
 }

 	handleChange(event){
 		this.setState({value:event.target.value});
 	}
 	handleSubmit(event){
 		alert(this.state.value)
 		event.preventDefault();

 	}

 
    render(){
        return(

              
           <form onSubmit={this.handleSubmit}>

              <input className="input"
            	 value={this.state.value}
            	 onChange={this.handleChange}
                 type="text" 
                 placeholder="Get a five-day forecast in your favrite cities"
              />

        	  <input className="button" type="submit" value="Submit"/>
                                    
                      

             </form>
        )
    }
}


export default Form;