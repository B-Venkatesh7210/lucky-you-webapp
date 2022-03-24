import React, {useState, useEffect} from "react";
import Navbar from "../Navbar";
import GiveawayDiv from "../TypesOfGiveawayDivs/GiveawayDiv";
import { useMoralis } from "react-moralis";
import config from "../config/config";
import contractABI from "../Contract/contractABI.json";
import Web3 from "web3";
import userEvent from "@testing-library/user-event";

const ParticipatedGiveaways = () => {

  const [participatedGiveaways, setParticipatedGiveaways] = useState([]);
  const { isAuthenticated, user } = useMoralis();

  const getAllGiveaways = async() => {
    let web3js;
    web3js = new Web3(window.web3.currentProvider);

    const contract = new web3js.eth.Contract(
      contractABI,
      config.contractAddress
    );

    try{
      const allGiveaways = await contract.methods.getParticipatedGiveaways().call({from: user.get("ethAddress")});
      setParticipatedGiveaways(allGiveaways);
      console.log(allGiveaways);

    }
    catch(error){
      console.log(error)
    }
  }

  useEffect(() => {
    if(isAuthenticated){
      getAllGiveaways();
    }
  }, [isAuthenticated])
  


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
        <div style={{height: "5vh"}}></div>
        <span
          className="whiteText"
          style={{
            fontSize: "60px",
            marginTop: "6rem",
          }}
        >
          <span>Participated Giveaways</span>
        </span>
        {/* {<ParticipatedGiveawayDiv />} */}
        {participatedGiveaways.map((participatedGiveaway) => (<GiveawayDiv typeOfGiveaway={participatedGiveaway}/>))}
      </div>
    </div>
  );
};

export default ParticipatedGiveaways;
