// src/pages/Home.js
import React from 'react';
import './Home.css'; // We will create this CSS file next

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to My Portfolio</h1>
        <p>I'm a passionate developer specializing in front-end development.</p>
      </header>
      <section className="home-intro">
        <h2>About Me</h2>
        <p>
          I have a strong background in web development and a keen interest in creating
          beautiful and functional user interfaces. Check out my projects below to see what I've been working on.
        </p>
      </section>
    </div>
  );
};

export default Home;
