import React, {Component} from 'react';
import './header.css';
import {Link} from 'react-router-dom';

class App extends Component{
  render(){
    return(
      <div className="header">
          <Link to="/">Filmaria</Link>      
      </div>
    );
  }
}

export default App;