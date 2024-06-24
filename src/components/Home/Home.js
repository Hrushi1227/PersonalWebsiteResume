// src/components/Home.js

import React from "react";
import "./Home.css"; // Import CSS file for the Home component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <div className="section">
      <div className="home">
        <div className="name-section">
          <h1 className="name">Rushikesh S. Ghatol</h1>
          <h2 className="designation">Senior Software Developer</h2>
        </div>
        <div className="content">
          <p className="welcome">Welcome to My Portfolio</p>
          <p className="description">
            I am a senior React developer with expertise in building scalable
            web applications. I specialize in front-end development using modern
            JavaScript frameworks and libraries.
          </p>
          <div className="skills">
            <p className="skills-heading">My skills include:</p>
            <ul className="skills-list">
              <li>React, Redux, and React Router</li>
              <li>JavaScript (ES6+), HTML5, CSS3</li>
              <li>RESTful APIs and GraphQL</li>
              <li>Responsive and mobile-first design</li>
              <li>Version control with Git</li>
              <li>Testing with Jest, Enzyme, or other testing libraries</li>
            </ul>
          </div>
        </div>
      </div>
      <section className="footer-section section">
        <div className="footer">
          <p>Created by Rushikesh S. Ghatol 2024</p>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/senior-react-rushi-ghatol"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} className="icon" />
            </a>
            <a
              href="https://github.com/Hrushi1227/Hrushi1227"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className="icon" />
            </a>
            <a
              href="https://twitter.com/your-twitter-profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} className="icon" />
            </a>
            {/* Add more social media icons as needed */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
