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

const client = new NFTStorage({
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGFDQmEwMDVCYTM5YTVhMzEwQzVCNDk5RTQ1NWNGNkY4QzJmMjA0YjAiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY0ODA5MjU4NDY5MCwibmFtZSI6Ikx1Y2t5WW91In0.Fl1UK3_0oJl0N1q8EFLS4mf-dPbtw8bresyBoVyeJwo",
});

const NftPage = () => {
  const navigate = useNavigate();

  const { account } = useMoralis();
  const printRef = React.useRef();
  const [typeOfGiveaway, setTypeOfGiveaway] = useState();
  let location = useLocation();

  useEffect(() => {
    setTypeOfGiveaway(location.state.typeOfGiveaway);
  }, []);

  const handleDownloadImage = async () => {
    const element = printRef.current;
    console.log("here");
    const canvas = await html2canvas(element);

    let web3 = new Web3(window.web3.currentProvider);
    const contract = new web3.eth.Contract(nftABI, config.nftContractAddress);

    canvas.toBlob(async (blob) => {
      let file = new File([blob], "LuckyYouNft.png", { type: "image/png" });
      const metadata = await client.store({
        name: "Lucky You NFT",
        description: typeOfGiveaway.message,
        image: file,
        amount: typeOfGiveaway.amount,
        winner: typeOfGiveaway.winner,
        creator: typeOfGiveaway.creator,
        particpants: typeOfGiveaway.participants,
        deadline: typeOfGiveaway.deadline,
        timestamp: typeOfGiveaway.timestamp,
        isLive: typeOfGiveaway.isLive,
        uniqueId: typeOfGiveaway.uniqueId,
      });

      console.log("metadata:", metadata.ipnft);
      try {
        const createCall = contract.methods
          .createToken(metadata.url, typeOfGiveaway.uniqueId)
          .send({
            from: account,
          });

        createCall.on("transactionHash", (hash) => {
          console.log(hash);
        });

        createCall.on("receipt", (recipt) => {
          console.log("reciept:", recipt);
          let tokenId = parseInt(recipt.events.Transfer.returnValues.tokenId);
          console.log("tokenId:", tokenId);
          firebase
            .storage()
            .ref(`nfts/${metadata.ipnft}`)
            .put(blob)
            .then((image) => {
              image.ref.getDownloadURL().then((url) => {
                console.log(url);
                db.collection("nfts")
                  .doc(typeOfGiveaway.uniqueId)
                  .set({
                    description: typeOfGiveaway.message,
                    image: file,
                    amount: typeOfGiveaway.amount,
                    winner: typeOfGiveaway.winner,
                    creator: typeOfGiveaway.creator,
                    particpants: typeOfGiveaway.participants,
                    deadline: typeOfGiveaway.deadline,
                    timestamp: typeOfGiveaway.timestamp,
                    isLive: typeOfGiveaway.isLive,
                    uniqueId: typeOfGiveaway.uniqueId,
                    url: url,
                  })
                  .then(() => {
                    alert("Your position's NFT is minted successfully.");
                    // navigate
                  });
              });
            });
        });

        createCall.on("error", (error, recipt) => {
          console.log(error);
          alert(error);
        });
      } catch (error) {
        alert(error.message);
      }
    });
  };

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
            <SingleNft typeOfGiveaway={location.state} />
          </div>
          <button
            className="greenButton"
            style={{ width: "17rem", height: "5rem" }}
            onClick={navigate("/nft-minting", {
              state: location.state.typeOfGiveaway,
            })}
          >
            <span
              style={{
                justifyContent: "space-around",
                fontFamily: "Hand Drawn Shapes",
                fontSize: "32px",
              }}
              onClick={handleDownloadImage}
            >
              Mint Your NFT
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NftPage;
