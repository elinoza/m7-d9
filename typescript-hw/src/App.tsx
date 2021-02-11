import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

import Home from "./components/Home"
import Detail from "./components/Detail"






function App() {
  return (
    <div className="App">
      <header className="App-header">
     <Router>
    
     <Route path="/" render={(props) => <Home {...props} />} />
     <Route path="/Details/:id"render={(props) => <Detail {...props} />} />
      
    
      </Router>
       
      </header>
    </div>
  );
}

export default App;
