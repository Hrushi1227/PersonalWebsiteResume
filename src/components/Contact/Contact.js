// src/components/Contact.js
import React, { useState, useEffect } from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [loading, setLoading] = useState(true); // State to manage loading state

  // Simulating data loading with useEffect
  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Set loading to false after a timeout (simulating data load)
    }, 2000); // Simulate 2 seconds loading time
  }, []);

  return (
    <section id="contact">
      <h2>Contact</h2>
      <section className="contact">
        <p>
          You can reach me at{" "}
          <a href="mailto:rushi.ghatol1227@gmail.com">
            rushi.ghatol1227@gmail.com
          </a>
        </p>
        {loading && (
          <div className="loading">
            <FontAwesomeIcon icon={faSpinner} spin />
            <span>Loading...</span>
          </div>
        )}
        {!loading && (
          <div>
            <p>[In Progress]</p>
          </div>
        )}
      </section>
    </section>
  );
};

export default Contact;
