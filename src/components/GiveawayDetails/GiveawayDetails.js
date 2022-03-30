import React from "react";
import Navbar from "../Navbar";
import EthLogo from "../../img/Ethereum.png";
import { Link, useLocation } from "react-router-dom";
import Timer from "../Timer";

const GiveawayDetails = () => {
  let location = useLocation();
  const amount = location.state.amount / 10 ** 18;
  const endTime = parseInt(location.state.deadline);
  var gelatoHref = "https://app.gelato.network/task/" + location.state.taskId + "?chainId=4";
  const hasEnded = (Date.now()/1000)>parseInt(location.state.deadline);
  const isProcessing = location.state.isProcessing;

  return location.state ? (
    <div className="mainBg2" style={{backgroundImage: "none"}}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "2rem 0rem",
        }}
      >
        <Navbar isSticky />
        <div style={{ height: "5vh" }}></div>
        <span
          className="whiteText"
          style={{ fontSize: "60px", marginTop: "6rem" }}
        >
          Giveaway Details
        </span>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Timer endTime={endTime} hasEnded={hasEnded} isProcessing={isProcessing} />
          <div
            style={{
              height: "15vh",
              width: "80%",
              marginTop: "3rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <span className="whiteText" style={{ fontSize: "38px" }}>
              Creator
            </span>
            <div className="button2" style={{ height: "4rem", width: "100%" }}>
              <span className="blackText" style={{ fontSize: "28px" }}>
                {location.state.creator}
              </span>
            </div>
          </div>
          <div
            style={{
              height: "100%",
              width: "80%",
              margin: "1.5rem 0rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <span className="whiteText" style={{ fontSize: "38px" }}>
              Giveaway Description
            </span>
            <div className="button2" style={{ height: "10rem", width: "100%" }}>
              <span className="normalText" style={{ fontSize: "28px" }}>
                {location.state.message}
              </span>
            </div>
          </div>
          <div
            style={{
              height: "100%",
              width: "80%",
              margin: "1rem 0rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <span className="whiteText" style={{ fontSize: "38px" }}>
              Social Links
            </span>
            <div className="button2" style={{ height: "4rem", width: "100%" }}>
              <span className="normalText" style={{ fontSize: "28px" }}>
                {location.state.socialLink}
              </span>
            </div>
          </div>
          <div
            style={{
              height: "100%",
              width: "80%",
              margin: "1rem 0rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <span className="whiteText" style={{ fontSize: "38px" }}>
              Giveaway Amount
            </span>
            <div
              className="button2"
              style={{
                height: "4rem",
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span className="normalText" style={{ fontSize: "28px" }}>
                {amount}
              </span>
              <img
                alt="Ethereum Logo"
                src={EthLogo}
                style={{ width: "2.5rem", marginRight: "1rem" }}
              ></img>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            width: "60%"
          }}
        >
          <Link to="/home">
            <button
              className="greenButton2 tapButton"
              style={{ width: "22rem", height: "6rem", marginTop: "3rem" }}
            >
              <span
                style={{
                  padding: "0rem 1.5rem",
                  alignItems: "center",
                  fontFamily: "Hand Drawn Shapes",
                  fontSize: "36px",
                  color: "black",
                }}
              >
                Redirect to Home
              </span>
            </button>
          </Link>
          <a rel="noreferrer" href={gelatoHref} target="_blank">
            <button
              className="greenButton2 tapButton"
              style={{ width: "22rem", height: "6rem", marginTop: "3rem" }}
            >
              <span
                style={{
                  padding: "0rem 1.5rem",
                  fontFamily: "Hand Drawn Shapes",
                  fontSize: "36px",
                  color: "black",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-around"
                }}
              >
                <span style={{fontSize: "28px"}}>View On</span>
                <span style={{textDecoration: "underline"}}>Gelato Ops</span>
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  ) : (
    <div>Hello world</div>
  );
};

export default GiveawayDetails;
