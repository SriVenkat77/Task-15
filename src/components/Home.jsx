
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


    <CourseCard title="How to Render an Array of Objects in React? [in 3 easy steps] " imageUrl="https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-2048x1072.webp" />
        <CourseCard title=" 15 Best Mechanical Engineering Project Ideas in 2024" imageUrl="https://www.guvi.in/blog/wp-content/uploads/2023/09/0_feature_image.webp" />
      <CourseCard title=" 30 Best JavaScript Project Ideas For You [3 Bonus Portfolio Projects]" imageUrl="https://www.guvi.in/blog/wp-content/uploads/2024/01/feature_image-7.webp" />
        <CourseCard title=" 7 Unique Machine Learning Capstone Projects To Boost Your Resume" imageUrl="https://www.guvi.in/blog/wp-content/uploads/2024/03/feature_image-1-4.webp" />
        <CourseCard title=" Advantages and Disadvantages of AI: A Comprehensive Guide [2024]" imageUrl="https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Top-Cloud-Computing-Tools.webp" />
        <CourseCard title="Retrieval Augmented Generation: Important Things You Need To Know About [2024] " imageUrl="https://www.guvi.in/blog/wp-content/uploads/2023/11/FEATURE-IMAGE-1-2-2048x1072.webp" />
          </div>
  </>
}

export default Home;
