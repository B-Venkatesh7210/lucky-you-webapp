import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div
    className="mainBg"
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      
    }}
  >
    <span className="whiteText" style={{ fontSize: "80px" }}>
      ERROR! Pls redirect to Home page
    </span>
    <Link to="/home">
      <button
        className="button"
        style={{ height: "8vh", width: "10rem", cursor: "pointer", marginTop: "2rem" }}
      >
        <span className="buttonText" style={{ fontSize: "26px" }}>
          Home
        </span>
      </button>
    </Link>
  </div>
  )
};

export default Error;