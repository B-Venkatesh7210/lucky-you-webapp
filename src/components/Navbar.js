import Wallet from "./Wallet/Wallet";
import React, { useState } from "react";
import Logo from "../img/LuckyYou Logo.png";
import YourNftsLogo from "../img/YourNfts.png";
import YourGiveawaysLogo from "../img/YourGiveaways.png";
import { Link } from "react-router-dom";

const Navbar = ({ isSticky }) => {
  return (
    <div
      className="mainBg"
      style={
        isSticky
          ? {
              position: "fixed",
              top: "0",
              height: "15vh",
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }
          : {}
      }
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "80%",
        }}
      >
        <Link to="/home">
          <div style={{ width: "10%" }}>
            <img
              alt="Lucky You Logo"
              src={Logo}
              style={{ width: "8rem", marginLeft: "2rem" }}
            />
          </div>
        </Link>

        <div
          style={{
            width: "40%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Link to="/your-nfts">
            <img
              alt="Your NFTs Logo"
              src={YourNftsLogo}
              style={{ width: "6.3rem" }}
            ></img>
          </Link>
          <Link to="/your-giveaways">
            <img
              alt="Your Giveaways Logo"
              src={YourGiveawaysLogo}
              style={{ width: "12rem" }}
            ></img>
          </Link>
        </div>
      </div>
      <Wallet />
    </div>
  );
};

export default Navbar;
