import { useMoralis } from "react-moralis";
import { getEllipsisTxt } from "../../helpers/formatters";
import Blockie from "../../Blockie";
import { Button, Card, Modal } from "antd";
import { useState, useEffect } from "react";
import Address from "../Address/Address";
import { SelectOutlined } from "@ant-design/icons";
import { getExplorer } from "../../helpers/networks";

const styles = {
  account: {
    height: "42px",
    padding: "0 15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "fit-content",
    borderRadius: "12px",
    backgroundColor: "rgb(244, 244, 244)",
    cursor: "pointer",
  },
  text: {
    color: "#21BF96",
    pointerEvents: "none",
  },
};

function Wallet() {
  const { authenticate, isAuthenticated, logout, user, chainId, web3 } =
    useMoralis();

  if (!isAuthenticated) {
    return (
      <button
        className="button tapButton"
        style={{ height: "8vh", width: "15%", cursor: "pointer", marginRight: "3rem" }}
        onClick={() =>
          authenticate({
            signingMessage: "Welcome to Lucky You",
            chainId: 80001,
          })
        }
      >
        <span className="normalText" style={{ fontSize: "26px" }}>
          Connect Wallet
        </span>
      </button>
    );
  }

  return (
    <>
      <div
        className="button connectWallet"
        style={{
          height: "8vh",
          width: "15%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <span style={{ fontWeight: "700", fontSize: "18px" }}>
          {getEllipsisTxt(user.get("ethAddress"), 6)}
        </span>
        <span
          style={{
            textDecoration: "underline",
            fontSize: "14px",
            fontWeight: "500",
            cursor: "pointer",
            color: "blue",
          }}
          onClick={() => {
            logout();
          }}
        >
          Disconnect
        </span>
      </div>
    </>
  );
}

export default Wallet;
