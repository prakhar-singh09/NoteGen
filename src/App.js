import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './nav-bar.js';
import Landing from './LandingPage.js'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Landing />
      </div>
    </Router>
  );
} 

export default App;
