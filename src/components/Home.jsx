
import React from 'react';
import Card from './Card';
import './Home.css';
import CourseNav from './CourseNav';
import { Link } from 'react-router-dom';
import CourseCard from './CourseCard';

function Home() {
  return <>
    <div className="home">
      <div className="trending-articles"><Link to='/' href=""></Link>
        <div className="card-container">
          <Card title="What is Generative AI? Everything You Need to Know" imageUrl="https://www.guvi.in/blog/wp-content/uploads/2024/08/What-is-Generative-AI.webp" />
          <Card title="8 Generative AI Apps to Boost Your Productivity [+2 Bonus Apps]" imageUrl="https://www.guvi.in/blog/wp-content/uploads/2024/08/Generative-AI-Apps-to-Boost-Your-Productivity.webp" />
          <Card title="What is ChatGPT, DALL-E, and Generative AI? [2024]" imageUrl="https://www.guvi.in/blog/wp-content/uploads/2024/08/Best-Programming-Languages-for-AI.webp" />
          <Card title="Best Programming Languages for AI: A Comprehensive Guide" imageUrl="https://www.guvi.in/blog/wp-content/uploads/2024/08/What-is-ChatGPT-DALL-E-and-Generative-AI.webp"

          />
        </div>
      </div>
  </div>
    <CourseNav />
    <div className="CourseCard-container">


      <CourseCard title="40 Java Interview Questions for Freshers with Clear & Concise Answers" imageUrl=" https://www.guvi.in/blog/wp-content/uploads/2023/04/feature.webp  " />
      <CourseCard title="40 Java Interview Questions for Freshers with Clear & Concise Answers " imageUrl="  https://www.guvi.in/blog/wp-content/uploads/2015/02/blog-2-600x314.png " />
      <CourseCard title=" Top 30 Mini Project Ideas For College Students [UPDATED]" imageUrl="  https://www.guvi.in/blog/wp-content/uploads/2022/12/Render-array-of-objects-in-ReactJs.png  " />
      <CourseCard title="How to Render an Array of Objects in React? [in 3 easy steps] " imageUrl="  https://www.guvi.in/blog/wp-content/uploads/2023/06/feature-image-unique-project-ideas.jpg " />
      <CourseCard title=" 15 Best Mechanical Engineering Project Ideas in 2024" imageUrl="  https://www.guvi.in/blog/wp-content/uploads/2023/09/0_feature_image.webp " />
      <CourseCard title=" 30 Best JavaScript Project Ideas For You [3 Bonus Portfolio Projects]" imageUrl=" https://www.guvi.in/blog/wp-content/uploads/2023/02/animated-javascript-project-image.jpg  " />


    </div>
  </>
}

export default Home;
