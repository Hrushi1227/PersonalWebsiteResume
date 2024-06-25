// src/components/Blog.js
import React, { useState, useEffect } from "react";
import "./Blog.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Blog = () => {
  const [loading, setLoading] = useState(true); // State to manage loading state

  // Simulating data loading with useEffect
  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Set loading to false after a timeout (simulating data load)
    }, 2000); // Simulate 2 seconds loading time
  }, []);

  return (
    <section id="blog" className="blog">
      <h2>Recent Posts</h2>
      {loading ? (
        <div className="loading">
          <FontAwesomeIcon icon={faSpinner} spin />
          <span>Loading...</span>
        </div>
      ) : (
        <>
          <div className="post">
            <h3 className="post-title">Post Title 1</h3>
            <p className="post-content">In Progress...</p>
          </div>
          <div className="post">
            <h3 className="post-title">Post Title 2</h3>
            <p className="post-content">In Progress...</p>
          </div>
        </>
      )}
    </section>
  );
};

export default Blog;
