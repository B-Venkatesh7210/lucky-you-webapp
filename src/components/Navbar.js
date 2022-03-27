import Wallet from "./Wallet/Wallet";
import React, { useState } from "react";
import Logo from "../img/LuckyYou Logo.png";
import YourNftsLogo from "../img/YourNfts.png";
import YourGiveawaysLogo from "../img/YourGiveaways.png";
import WonGiveawaysLogo from "../img/WonGiveaways.png";
import { NavLink, Link } from "react-router-dom";

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
          paddingLeft: "2rem"
        }}
      >
        <NavLink className={(navData) => navData.isActive ? "activeTab" : ""} to="/home">
          <div className="nonActiveTab" style={{ width: "10%" }}>
            <img
              alt="Lucky You Logo"
              src={Logo}
              style={{ width: "8rem" }}
            />
          </div>
        </NavLink>

        <div
          style={{
            width: "60%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginTop: "1rem"
          }}
        >
          <NavLink className={(navData) => navData.isActive ? "activeTab" : ""} to="/won-giveaways">
          <img
          className="nonActiveTab"
              alt="Won Giveaways Logo"
              src={WonGiveawaysLogo}
              style={{ width: "12rem" }}
            ></img>
            </NavLink>
          <NavLink className={(navData) => navData.isActive ? "activeTab" : ""} to="/your-nfts">
            <img
            className="nonActiveTab"
              alt="Your NFTs Logo"
              src={YourNftsLogo}
              style={{ width: "6.3rem" }}
            ></img>
          </NavLink>
          <NavLink className={(navData) => navData.isActive ? "activeTab" : ""} to="/your-giveaways">
            <img
            className="nonActiveTab"
              alt="Your Giveaways Logo"
              src={YourGiveawaysLogo}
              style={{ width: "12rem" }}
            ></img>
          </NavLink>
        </div>
      </div>
      <Wallet />
    </div>
  );
};

export default Navbar;
