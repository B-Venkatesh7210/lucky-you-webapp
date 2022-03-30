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
import JustMintedNftPage from "./justMintedNftPage";
import Loader from "../Loader/Loader";

const client = new NFTStorage({
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGFDQmEwMDVCYTM5YTVhMzEwQzVCNDk5RTQ1NWNGNkY4QzJmMjA0YjAiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY0ODM5MjEyNjMxMSwibmFtZSI6Ikx1Y2t5WW91RnJlc2gifQ.jli5TJWUJ5saGA-_nsLOMTz64yj6qzMcKnIDVPKZar8",
});

const NftPage = () => {
  const navigate = useNavigate();
  const [randNum, setRandNum] = useState();
  const [isMinted, setIsMinted] = useState(false);
  const { user } = useMoralis();
  const [loading, setLoading] = useState(false);
  const printRef = React.useRef();
  const [typeOfGiveaway, setTypeOfGiveaway] = useState();
  let location = useLocation();

  const getNftMinted = async (uniqueId) => {
    let web3 = new Web3(window.web3.currentProvider);
    const contract = new web3.eth.Contract(nftABI, config.nftContractAddress);

    const createCall = await contract.methods.getNftMinted(uniqueId).call();
    setIsMinted(createCall);
    // console.log(isMinted);
  };

  const nftRandBg = () => {
    return Math.floor(Math.random() * 10) + 1;
  };

  const colorChange = () => {
    setRandNum(nftRandBg());
  };

  useEffect(() => {
    setTypeOfGiveaway(location.state);
    console.log(location.state);
    getNftMinted(location.state.uniqueId);
    console.log(
      location.state.winner.toLowerCase() ===
        user.get("ethAddress").toLowerCase()
    );
    setRandNum(nftRandBg());
  }, []);

  const handleDownloadImage = async () => {
    setLoading(true);
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
            from: user.get("ethAddress"),
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
                    image: url,
                    amount: typeOfGiveaway.amount,
                    winner: typeOfGiveaway.winner.toLowerCase(),
                    creator: typeOfGiveaway.creator,
                    particpants: typeOfGiveaway.participants,
                    deadline: typeOfGiveaway.deadline,
                    timestamp: typeOfGiveaway.timestamp,
                    isLive: typeOfGiveaway.isLive,
                    uniqueId: typeOfGiveaway.uniqueId,
                    url: url,
                  })
                  .then(() => {
                    navigate("/just-minted-nft", { state: typeOfGiveaway });
                    setLoading(false);

                    // location.state.winner
                    // alert("Your NFT is minted successfully.");
                  });
                console.log(loading);
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

  return user ? (
    loading ? (
      <Loader />
    ) : location.state ? (
      location.state.winner.toLowerCase() ===
      user.get("ethAddress").toLowerCase() ? (
        isMinted ? (
          <JustMintedNftPage typeOfGiveaway={typeOfGiveaway} type={1} />
        ) : (
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
                  marginTop: "6rem",
                  width: "70%",
                  height: "70vh",
                }}
              >
                <div ref={printRef}>
                  <SingleNft
                    typeOfGiveaway={location.state}
                    randNum={randNum}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "25vh",
                  }}
                >
                  <button
                    className="greenButton tapButton2"
                    style={{ width: "17rem", height: "5rem" }}
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
                  <button
                    className="greenButton tapButton2"
                    style={{ width: "17rem", height: "5rem" }}
                  >
                    <span
                      style={{
                        justifyContent: "space-around",
                        fontFamily: "Hand Drawn Shapes",
                        fontSize: "32px",
                      }}
                      onClick={colorChange}
                    >
                      Change Color
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      ) : isMinted ? (
        <JustMintedNftPage typeOfGiveaway={typeOfGiveaway} type={2} />
      ) : (
        <span>not mined their nft</span>
      )
    ) : (
      <div>loading</div>
    )
  ) : (
    <Loader />
  );
};

export default NftPage;
