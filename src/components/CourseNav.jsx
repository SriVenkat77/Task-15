
import React from 'react';
import { Link } from 'react-router-dom';
import './CourseNav.css';

function CourseNav() {
  return (
    <div className="course-nav">
      <Link to="/">ALL</Link>
     
      <Link to="/ai-ml">AI & ML</Link>
      <Link to="/blockchain">Blockchain</Link>
      <Link to="/cloud-computing">Cloud Computing</Link>
      <Link to="/full-stack">FullStack</Link>
      <Link to="/digital-marketing">DigitalMarketing</Link>
      
    </div>
  );
}

export default CourseNav;
