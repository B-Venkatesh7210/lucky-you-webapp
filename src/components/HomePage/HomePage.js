import React from "react";
import Logo from "../../img/LuckyYou Logo.png";
import Navbar from "../Navbar";
import GreenCircle from "../../img/greenCircle.png";
import GiveawayDiv from "../GiveawayDiv";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="mainBg2">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "2rem 2rem",
        }}
      >
        <Navbar isSticky />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Link to="/participated-giveaways">
            <button
              className="button"
              style={{
                height: "10vh",
                width: "15rem",
                marginTop: "10rem",
              }}
            >
              <span className="normalText" style={{ fontSize: "24px" }}>
                Participated Giveaways
              </span>
            </button>
          </Link>
          <img
            alt="Lucky You Logo"
            src={Logo}
            style={{ width: "40%", marginTop: "7rem" }}
          />
          <Link to="/create-giveaway">
            <button
              className="button"
              style={{ height: "10vh", width: "15rem", marginTop: "10rem" }}
            >
              <span className="normalText" style={{ fontSize: "24px" }}>
                Create a Giveaway
              </span>
            </button>
          </Link>
        </div>
        <span
          className="whiteText"
          style={{
            fontSize: "60px",
            marginTop: "2rem",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div
            className="greenCircle"
            style={{ width: "2rem", height: "2rem", marginRight: "2rem" }}
          ></div>
          <span>Live Giveaways</span>
        </span>
        {<GiveawayDiv />}
      </div>
    </div>
  );
};

export default HomePage;
