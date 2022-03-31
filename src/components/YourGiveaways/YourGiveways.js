import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import GiveawayDiv from "../TypesOfGiveawayDivs/GiveawayDiv";
import { useMoralis } from "react-moralis";
import config from "../config/config";
import contractABI from "../Contract/contractABI.json";
import Web3 from "web3";
import Loader from "../Loader/Loader";

const YourGiveaways = () => {
  const [yourGiveaways, setYourGiveaways] = useState([]);
  const { isAuthenticated, user } = useMoralis();
  const [loading, setLoading] = useState(true);

  const getAllGiveaways = async () => {
    let web3js;
    web3js = new Web3(window.web3.currentProvider);

    const contract = new web3js.eth.Contract(
      contractABI,
      config.contractAddress
    );

    try {
      const allGiveaways = await contract.methods
        .getYourGiveaways()
        .call({ from: user.get("ethAddress") });
      setYourGiveaways(allGiveaways);
      console.log(allGiveaways);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      getAllGiveaways();
    }
  }, [isAuthenticated]);

  return <>
   { <div className="mainBg2">
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
        {yourGiveaways.length === 0 ? (
          <span
            className="whiteText"
            style={{
              fontSize: "60px",
              marginTop: "6rem",
            }}
          >
            You've not created any giveaway.
          </span>
        ) : (
          yourGiveaways.slice(0).reverse().map((yourGiveaway) => (
            <GiveawayDiv typeOfGiveaway={yourGiveaway} />
          ))
        )}
      </div>
    </div>}
    {loading && <Loader/>}
    </>
  
};

export default YourGiveaways;
