import React, { useState } from "react";
import "./styles.css";
import bg from "/src/bg.svg";
import happy from "/src/happy.svg";
import unhappy from "/src/unhappy.svg";

let dateInput = "";
let luckyNo = 0;

const happyImgDiv = (
  <img alt="happyImage" src={happy} width="100%" height="200px" />
);
const unHappyImgDiv = (
  <img alt="unhappyImage" src={unhappy} width="100%" height="200px" />
);

export default function App() {
  // const [displayAlert, setDisplayAlert] = useState("flex");

  const [displayResult, setDisplayResult] = useState(["", ""]);

  function checkBtnHandler(e) {
    e.preventDefault();
    const dateArray = dateInput.split("/");
    let sum = 0;
    dateArray.map((string) => {
      for (let i = 0; i < string.length; i++) {
        sum += Number(string[i]);
      }
    });

    if (sum % Number(luckyNo) === 0) {
      setDisplayResult(["Wow!!!🤩 You are a lucky person!", happyImgDiv]);
    } else {
      setDisplayResult([
        "Oops!!!🙁 your birthday is not a lucky number!",
        unHappyImgDiv
      ]);
    }
  }

  return (
    <div className="App">
      {/* header section */}
      <div
        className="parallax"
        style={{
          minHeight: "100vh",
          backgroundAttachment: "fixed",
          backgroundImage: `url("${bg}")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
        }}
      >
        <div className="titleOfPage">
          <h1>Is your Birthday Lucky?</h1>

          <a href="#mainSection">Click Here to know </a>
        </div>
      </div>

      <section id="mainSection" className="section">
        {/* <div id ="alertBox" style={{ display: `${displayAlert}`}}>
      <div className="notice">
      <strong>Privacy Notice!</strong> We are not storing your data.
        </div>

        <div onClick={()=>{
          setDisplayAlert("none");
        }}
        style={{
          paddingLeft: "1rem",
          cursor: "pointer",
          fontSize: "0.5rem"
        }}>

          <span role ="img" aria-labelledby="crossIcon">&#10060;</span>
          </div>
          </div> */}

        {/* form section for input */}
        <h2>Enter Your Birthdate and lucky number to continue...</h2>
        <form onSubmit={checkBtnHandler}>
          <label className="label" htmlFor="datePicker">
            select your date of Birth
          </label>
          <input
            id="datePicker"
            onChange={(e) => {
              dateInput = e.target.value;
            }}
            type="date"
            required
          />

          <label className="label" htmlFor="luckyNo">
            Enter your lucky number:
          </label>
          <input
            id="luckyNo"
            min="1"
            step="1"
            required
            onChange={(e) => {
              luckyNo = e.target.value;
            }}
            type="number"
          />

          <button type="submit">check</button>

          {/* output result */}
          <div className="output">
            <div className="label">{displayResult[0]}</div>
            {displayResult[1]}
          </div>

          <footer>
            <ul>
              <li className="footerLink">
                <a href="https://github.com/Adarsh-Patel-Dev">
                  <i className="fab fa-github"></i>
                </a>
              </li>

              <li className="footerLink">
                <a href="https://twitter.com/AdarshPatelDev?s=08">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>

              <li className="footerLink">
                <a href="https://www.linkedin.com/in/adarsh-patel-449a55175">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>

              <li className="footerLink">
                <a href="https://adarsh-patel.netlify.app/">
                  <i className="fas fa-briefcase"></i>
                </a>
              </li>
            </ul>
          </footer>
        </form>
      </section>
    </div>
  );
}
