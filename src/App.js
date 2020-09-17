import React from 'react';
import './App.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Header from './Header';

function App() {
  return (
    <div className="app">
    
      <Header />

      <div className="shoe">
      <h1>The Grail Report</h1>
      <div className="collection">
        <span id="span1">sneakers</span>
        <span id="span2">. streetwear .</span>
        <span id="span3">culture</span>
      </div>

      </div>
      <br/>
      <ExpandMoreIcon  className="down__arrow" fontSize="large" />
    
    </div>
  );
}

export default App;
