import React from "react";
import Logo from "../img/LuckyYou Logo.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="mainBg">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "2rem 0rem",
        }}
      >
        <img alt="Lucky You Logo" src={Logo} style={{ width: "36%" }} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
            height: "25vh",
            width: "50%",
          }}
        >
          <span className="whiteText" style={{ fontSize: "28px" }}>
            The only platform where you can
          </span>
          <span className="yellowText" style={{ fontSize: "60px" }}>
            Create and Participate
          </span>
          <span className="whiteText" style={{ fontSize: "28px" }}>
            in giveaways of Ethereum coins.
          </span>
        </div>
        <Link to="/home">
          <button
            className="button"
            style={{ height: "10vh", width: "15rem", marginTop: "1rem" }}
          >
            <span className="normalText" style={{ fontSize: "28px" }}>
              Enter the Dapp
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

const Guide = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="leftBg"></div>
      <div className="rightBg"></div>
    </div>
  );
};

function LandingPage() {
  return (
    <div>
      <Home />
      <Guide />
    </div>
  );
}

export default LandingPage;
