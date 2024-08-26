// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AICourse from './components/AICourse';
import BlockchainCourse from './components/Blockchain';
import CloudComputingCourse from './components/CloudComputing';
import CourseNav from './components/CourseNav';


function App() {
  return (
    <Router>
      <Navbar />
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai-ml" element={<AICourse />} />
        <Route path="/blockchain" element={<BlockchainCourse />} />
        <Route path="/cloud-computing" element={<CloudComputingCourse />} />
        
      </Routes>
      
    </Router>
  );
}

export default App;





