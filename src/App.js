import Navbar from './Components/Nabar';
import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Experience from './Pages/Experience';
import Services from './Pages/Services';
function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        
       <Route element={<Home />} path='/' />
       <Route element={<About />} path='/about' />
       <Route element={<Experience />} path='/experience' />
       <Route element={<Services />} path='/services' />
      </Routes>
     
      
      
    </Router>
   
  );
}

export default App;
