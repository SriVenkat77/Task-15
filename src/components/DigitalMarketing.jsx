
import React from 'react';
import './Course.css';
import CourseNav from './CourseNav';
import Navbar from './Navbar';
import CourseCard from './CourseCard';


function DigitalMarketing() {
  return <>
    <Navbar />
    <CourseNav />
    <div className="course">
      <h1> DigitalMarketing Development </h1>
      <div className="CourseCard-container">
        
      
        <CourseCard title="How to Render an Array of Objects in React? [in 3 easy steps] " imageUrl="https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-2048x1072.webp" />
        <CourseCard title="40 Java Interview Questions for Freshers with Clear & Concise Answers " imageUrl="https://www.guvi.in/blog/wp-content/uploads/2023/07/DevOps-Project-Ideas-2048x1072.webp" />
        <CourseCard title=" Top 30 Mini Project Ideas For College Students [UPDATED]" imageUrl="  https://www.guvi.in/blog/wp-content/uploads/2024/03/Feature-Image-Best-SEO-Tools-For-Digital-Marketing.webp" /><CourseCard title=" 15 Best Mechanical Engineering Project Ideas in 2024" imageUrl="https://www.guvi.in/blog/wp-content/uploads/2023/09/0_feature_image.webp" />
      <CourseCard title=" 30 Best JavaScript Project Ideas For You [3 Bonus Portfolio Projects]" imageUrl="https://www.guvi.in/blog/wp-content/uploads/2024/01/feature_image-7.webp" />
        <CourseCard title=" 7 Unique Machine Learning Capstone Projects To Boost Your Resume" imageUrl="https://www.guvi.in/blog/wp-content/uploads/2024/03/feature_image-1-4.webp" />
        <CourseCard title=" Apple’s Vision Pro: A Deep Dive into Tech Specs, Applications, & What’s N..." imageUrl="https://www.guvi.in/blog/wp-content/uploads/2024/04/Feature-Image-1.webp" />
        <CourseCard title="40 Java Interview Questions for Freshers with Clear & Concise Answers" imageUrl="https://www.guvi.in/blog/wp-content/uploads/2023/04/feature.webp" />
        <CourseCard title=" Advantages and Disadvantages of AI: A Comprehensive Guide [2024]" imageUrl="https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Top-Cloud-Computing-Tools.webp" />
        <CourseCard title="Retrieval Augmented Generation: Important Things You Need To Know About [2024] " imageUrl="https://www.guvi.in/blog/wp-content/uploads/2023/11/FEATURE-IMAGE-1-2-2048x1072.webp" />
         </div>
    </div>
  </>
}

export default DigitalMarketing;

