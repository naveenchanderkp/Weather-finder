import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import './App.css';
import Sample from './Sample';
import SimpleMap from './SimpleMap';
import registerServiceWorker from './registerServiceWorker';
//<script src="https://cdnjs.cloudflare.com/ajax/libs/react-bootstrap/<version>/react-bootstrap.min.js"></script>

ReactDOM.render(<Sample />, document.getElementById('root'));
//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<SimpleMap />, document.getElementById('root'));
registerServiceWorker();




