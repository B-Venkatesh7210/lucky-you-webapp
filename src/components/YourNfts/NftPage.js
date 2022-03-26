import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import SingleNft from "./SingleNft";

const NftPage = () => {
  let location = useLocation();
  const navigate = useNavigate();

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
          <SingleNft typeOfGiveaway={location.state} />
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
