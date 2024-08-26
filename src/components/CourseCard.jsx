
import React from 'react';
import './CourseCard.css';

function CourseCard({ title, imageUrl }) {
  return (
    <div className="course-card">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}

export default CourseCard;





