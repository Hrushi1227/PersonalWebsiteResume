// src/components/About.js
import React, { useState, useEffect } from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const [loading, setLoading] = useState(true); // State to manage loading state

  // Simulating data loading with useEffect
  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Set loading to false after a timeout (simulating data load)
    }, 2000); // Simulate 2 seconds loading time
  }, []);

  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      {loading ? (
        <div className="loading">
          <FontAwesomeIcon icon={faSpinner} spin />
          <span>Loading...</span>
        </div>
      ) : (
        <div className="content">
          <p>
            Currently updating this section. Please check back later for more
            information.
          </p>
        </div>
      )}
    </section>
  );
};

export default About;
