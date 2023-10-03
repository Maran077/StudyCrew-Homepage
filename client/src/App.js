// React specific imports
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// Imports for styling
import logo from './logo.svg';
import './App.css';
import './index.css'; 

// Import components
import Hero from './components/Hero/Hero.jsx';

function App() {
  return (
    <Router>
      < Hero />
    </Router>
  );
}

export default App;