
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Main from './Components/Main';
import Footer from './Components/Footer';
import React from 'react';

function App() {
  return (
    <Router>
      <Nav/>
    {/* <Header />  removed */}
      <Main/>
      <Footer/>
    </Router>
  );
}

export default App;
