// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AICourse from './components/AICourse';
import BlockchainCourse from './components/Blockchain';
import CloudComputingCourse from './components/CloudComputing';
import FullStack from './components/FullStack';
import CourseNav from './components/CourseNav';
import DigitalMarketing from './components/DigitalMarketing';


function App() {
  return (
    <Router>
      <Navbar />
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai-ml" element={<AICourse />} />
        <Route path="/blockchain" element={<BlockchainCourse />} />
        <Route path="/cloud-computing" element={<CloudComputingCourse />} />
        <Route path="/full-stack" element={<FullStack />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        
      </Routes>
      
    </Router>
  );
}

export default App;





