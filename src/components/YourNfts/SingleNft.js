import React from "react";
import LuckyYouLogo from "../../img/LuckyYou Logo.png";
import EthLogo from "../../img/Ethereum.png";

const SingleNft = () => {
  return (
      <div
        className="singleNft"
        style={{
          width: "40rem",
          height: "40rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "2rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "100%",


          }}
        >
          <span className="nftWhite" style={{ fontSize: "35px" }}>
            Creator:
          </span>
          <span className="nftWhite" style={{ fontSize: "50px" }}>
            0xhasdjfhasfkjahs
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
            <img alt="Luck You Logo" src={LuckyYouLogo} style={{width: "20rem"}}></img>
            <span className="nftWhite" style={{fontSize: "50px"}}>0xajdakjdfhafkj

            </span>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "60%"}}>
            <span className="nftWhite" style={{color: "#FFE338", fontSize: "120px"}}>0.1</span>
            <img alt="Ethereum Logo" src={EthLogo} style={{width: "4rem"}}></img>

            </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "80%",

          }}
        >
          <span className="nftWhite" style={{ fontSize: "35px" }}>
            Date:
          </span>
          <span className="nftWhite" style={{ fontSize: "50px" }}>
            23rd March 2022
          </span>
        </div>
      </div>

  );
};

export default SingleNft;
