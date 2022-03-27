import React from "react";
import Navbar from "../Navbar";
import GiveawayDiv from "../TypesOfGiveawayDivs/GiveawayDiv";

const YourNfts = () => {
  return (
    <div className="mainBg">
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
        <div style={{ height: "20vh" }}>
          
        </div>
      </div>
    </div>
  );
};

export default YourNfts;
