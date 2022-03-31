import React from "react";
import Navbar from "../Navbar";

const NotMintedNftPage = () => {
  return (
    <div className="mainBg">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "2rem 0rem",
        }}
      >
        <Navbar isSticky />
        <div style={{ height: "20vh" }}></div>
        <span
          className="whiteText"
          style={{ fontSize: "60px", marginTop: "6rem" }}
        >
          The Winner has not minted their NFT
        </span>
      </div>
    </div>
  );
};

export default NotMintedNftPage;
