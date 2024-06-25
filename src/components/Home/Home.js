import React, { useState, useEffect } from "react";
import "./Home.css"; // Import CSS file for the Home component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  const [selectedFunction, setSelectedFunction] = useState("");
  const [output, setOutput] = useState("");
  const [array, setArray] = useState([1, 2, 4, 6, 1, 2, 5]);

  const functionsMap = {
    sort: sortArray,
    sum: sumArray,
    isSorted: checkIsArraySorted,
    secondLargestNumber: secondLargestNum,
    secondSmallestNumber: secondSmallestNumber,
    removeDuplicate: removeDuplicate,
    leftRotateByOne: leftRotateByOne,
    rotateByDNumber: rotateByDNumber,
  };

  useEffect(() => {
    displayArray(array);
  }, [array]);

  const handleDropdownChange = (event) => {
    setSelectedFunction(event.target.value);
  };

  const runCode = () => {
    if (selectedFunction) {
      const result = functionsMap[selectedFunction](array);
      displayResult(result);
    }
  };

  function sortArray(arr) {
    return (
      "Sorted Array: " +
      arr
        .slice()
        .sort((a, b) => a - b)
        .join(", ")
    );
  }

  function sumArray(arr) {
    return "Sum of Array: " + arr.reduce((acc, val) => acc + val, 0);
  }

  function checkIsArraySorted(data) {
    for (let i = 1; i < data.length; i++) {
      if (data[i] > data[i - 1]) {
        console.info("Check Values", data[i], data[i - 1]);
      } else {
        return false;
      }
    }
    return true;
  }

  function secondLargestNum(a) {
    let largest = a[0];
    let secLargest = -1;

    for (let i = 0; i < a.length; i++) {
      if (a[i] > largest) {
        secLargest = largest;
        largest = a[i];
      } else if (a[i] < largest && a[i] > secLargest) {
        secLargest = a[i];
      }
    }
    return secLargest;
  }

  function secondSmallestNumber(data) {
    let smallest = data[0];
    let secSmallest = 100;

    for (let i = 0; i < data.length; i++) {
      if (smallest > data[i]) {
        secSmallest = smallest;
        smallest = data[i];
      } else if (data[i] !== smallest && data[i] < secSmallest) {
        secSmallest = data[i];
      }
    }
    return secSmallest;
  }

  function removeDuplicate(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    arr.sort((a, b) => a - b);
    console.info("Sorted Arraya is", arr);
    let j = 0;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] !== arr[j]) {
        j++;
        arr[j] = arr[i];
      }
    }
    return arr.slice(0, j + 1);
  }

  function leftRotateByOne(arr) {
    const temp = arr[0];
    for (let i = 1; i < arr.length; i++) {
      arr[i - 1] = arr[i];
    }
    arr[arr.length - 1] = temp;
    return arr;
  }

  function rotateByDNumber(arr) {
    let d = 3;
    let temp = [d];
    for (let j = 0; j < d; j++) {
      temp[j] = arr[j];
    }
    console.log("Check", temp);
    for (let i = d; i < arr.length; i++) {
      arr[i - d] = arr[i];
    }
    console.log("New Value of Array", arr);
    for (let i = arr.length - d; i < arr.length; i++) {
      console.log("Array Index value", arr.length - d);
      arr[i] = temp[i - (arr.length - d)];
    }
    console.log("Pending Element of Array", arr);
    return arr;
  }

  function displayArray(arr) {
    setOutput("Input Array: " + arr.join(", "));
  }

  function displayResult(message) {
    setOutput(message);
  }

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
        <section className="code-section">
          <h3>Run JavaScript Code</h3>
          <div className="dropdown-container">
            <select onChange={handleDropdownChange}>
              <option value="">Select a code snippet</option>
              {Object.keys(functionsMap).map((functionName) => (
                <option key={functionName} value={functionName}>
                  {functionName}
                </option>
              ))}
            </select>
            <button onClick={runCode}>Run Code</button>
          </div>
          <div className="output-container">
            <h4>Output:</h4>
            <pre>{output}</pre>
          </div>
        </section>
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
