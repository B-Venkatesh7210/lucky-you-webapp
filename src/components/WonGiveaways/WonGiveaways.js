import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import GiveawayDiv from "../TypesOfGiveawayDivs/GiveawayDiv";
import { useMoralis } from "react-moralis";
import config from "../config/config";
import contractABI from "../Contract/contractABI.json";
import Web3 from "web3";

const WonGiveaways = () => {
  const [wonGiveaways, setWonGiveaways] = useState([]);
  const { isAuthenticated, user } = useMoralis();

  const getAllGiveaways = async () => {
    let web3js;
    web3js = new Web3(window.web3.currentProvider);

    const contract = new web3js.eth.Contract(
      contractABI,
      config.contractAddress
    );

    try {
      const allGiveaways = await contract.methods.getWonGiveaways().call({from: user.get("ethAddress")});
      setWonGiveaways(allGiveaways);
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
          padding: "1rem 2rem",
        }}
      >
        <Navbar isSticky />
        <div style={{ height: "20vh" }}></div>
        {wonGiveaways.length===0 ? (<span className="whiteText"
          style={{
            fontSize: "40px",
            marginTop: "6rem",
          }}>You've not won any giveaway.</span>) :
          wonGiveaways.map((wonGiveaway) => (
          <GiveawayDiv typeOfGiveaway={wonGiveaway} />
        ))}
      </div>
    </div>
  );
};

export default WonGiveaways;
