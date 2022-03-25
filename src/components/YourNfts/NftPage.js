import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar";
import SingleNft from "./SingleNft";

const NftPage = () => {
  let location = useLocation();
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
          <SingleNft />
          <button
            className="greenButton"
            style={{ width: "17rem", height: "5rem" }}
          >
            <span
              style={{
                justifyContent: "space-around",
                fontFamily: "Hand Drawn Shapes",
                fontSize: "32px"
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
