import React, { useState, useEffect } from "react";
import Logo from "../../img/LuckyYou Logo.png";
import Navbar from "../Navbar";
import GiveawayDiv from "../TypesOfGiveawayDivs/GiveawayDiv";
import { Link } from "react-router-dom";
import config from "../config/config";
import contractABI from "../Contract/contractABI.json";
import Web3 from "web3";
import { useMoralis } from "react-moralis";

const HomePage = () => {
  const [liveGiveaways, setLiveGiveaways] = useState([]);
  const { isAuthenticated, user } = useMoralis();

  const getAllGiveaways = async () => {
    let web3js;
    web3js = new Web3(window.web3.currentProvider);

    const contract = new web3js.eth.Contract(
      contractABI,
      config.contractAddress
    );

    try {
      const allGiveaways = await contract.methods.getAllGiveaways().call();
      setLiveGiveaways(allGiveaways);
      console.log(allGiveaways);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      getAllGiveaways();
    }
  }, [isAuthenticated]);

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
        <div style={{ height: "5vh" }}></div>
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
              className="button tapButton"
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
              className="button tapButton"
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
          >
          </div>
          <span>Live Giveaways</span>
        </span>
        {liveGiveaways.length===0 ? (<span className="whiteText" style={{fontSize: "30px", marginTop: "1rem"}}>
          No Giveaway is LIVE
        </span>) : 
          liveGiveaways.map((liveGiveaway) => (
          <GiveawayDiv typeOfGiveaway={liveGiveaway} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
