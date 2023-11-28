import React from 'react';
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Nav-bar';
import Landing from './components/HomePage';
import Notes from './components/Notes';
import About from './components/About';

function App() {
      return (
    <Router>
      <Navbar />
      <Routes>
        <Route path= "/*" element = {<Landing /> } />
        <Route path="/notes" element={<Notes />} />
        <Route path="about" element = {<About/>} />
      </Routes>
    </Router>
  );
}

export default App;
