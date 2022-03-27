import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import SingleNft from "./SingleNft";
import db from "../../firebaseInit";
import firebase from "firebase";
import Web3 from "web3";
import { useMoralis } from "react-moralis";
import html2canvas from "html2canvas";
import nftABI from "./nftAbi.json";
import config from "../config/config.js";
import { NFTStorage, File } from "nft.storage";

const JustMintedNftPage = ({ typeOfGiveaway }) => {
  const printRef = React.useRef();
  let location = useLocation();
  const [firebaseData, setfirebaseData] = useState();
  const [giveAway, setGiveAway] = useState(typeOfGiveaway);
// user.ethAddress == +
  const getData = async () => {
    const data = await db
      .collection("nfts")
      .doc(location.state ? location.state.uniqueId : typeOfGiveaway.uniqueId)
      .get();
    setfirebaseData(data.data());
    console.log(data.data());
  };
  useEffect(() => {
    location.state ? setGiveAway(location.state) : setGiveAway(typeOfGiveaway);
    getData();
  }, []);

  return (
    <div className="mainBg2">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
          padding: "2rem 0rem",
        }}
      >
        <Navbar isSticky />
        <div style={{ height: "5vh" }}></div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",

            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div ref={printRef}>
            {firebaseData && <img src={firebaseData.url} alt="Nft" />}
          </div>
          <div className="metaDataDiv">
            <span>Creator : {`${giveAway.creator} `}</span>
            <span>Owner: {`${giveAway.owner} `}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default JustMintedNftPage;
