import React, { useState } from "react";
import Logo from "../img/LuckyYou Logo.png"

const Navbar = ({ isSticky }) => {
  return (
    <div
      className="mainBg"
      style={ isSticky?{
        position: "fixed",
        top: "0",
        height: "15vh",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        
      }: {}
      }
    >
        <img alt="Lucky You Logo" src={Logo} style={{width: "8%", marginLeft: "2rem"}} />
        <button
          className="button connectWallet"
          style={{ height: "8vh", width: "15%"}}
        >
          <span className="buttonText" style={{ fontSize: "26px" }}>
            Connect Wallet
          </span>
        </button>
    </div>
  );
};

export default Navbar;