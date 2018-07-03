import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import GoogleMapReact from 'google-map-react';
import Img from 'react-image'

 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 10
  };
 
  render() {
    return (
    
      <div>
         <input className="input"
               type="text" 
               //value={value}
               placeholder="Get a five-day forecast in your favrite cities"
               // onChange={this.handleInputChange.bind(this)}
                 />
                                    
                      
        <Button  className='button'>Submit</Button>

        <hr/>
         <div>
         
           </div>
                         
           <div className="row">
              <div className="col-sm1" style={{left:'200px',top:'-3px'}}>City</div>
              <div className="col-sm2" style={{left:'450px',top:'-10px'}}>Temperature(k)</div>
              
              <div className="col-sm3" style={{left:'550px',top:'-10px'}}>Pressure(hPa)</div>
              <div className="col-sm4" style={{left:'650px',top:'-10px'}}>Humidity(%)</div>
           </div>
           <hr/>
       
      <div className ='gmap'>
         <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBa-hYHMhGmuk9Xezwo-8XGn8BHQObAfzI", language: "eng"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}

        >
          <AnyReactComponent
            lat={41.8781}
            lng={87.6298}
            text={'My Map'}
          />
          
        </GoogleMapReact>
        </div>


        <div className="gmap" style={{height:'250px',width:'400px'}}>
      <GoogleMapReact
       bootstrapURLKeys={{ key: "AIzaSyBa-hYHMhGmuk9Xezwo-8XGn8BHQObAfzI", language: "eng"}}
       defaultCenter={this.props.center}
       defaultZoom={this.props.zoom}

     >
       <AnyReactComponent
         lat={41.8781}
         lng={87.6298}
         text={'My Map'}
       />
       
      </GoogleMapReact>
      
     </div>
    
  </div>
  
      
    );
  }
}
 
export default SimpleMap;
