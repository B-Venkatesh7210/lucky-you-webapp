import React from "react";
import LuckyYouLogo from "../../img/LuckyYou Logo.png";
import EthLogo from "../../img/Ethereum.png";
import GiveawayDiv from "../TypesOfGiveawayDivs/GiveawayDiv";
import moment from "moment";
import { getEllipsisTxt } from "../../helpers/formatters";

const SingleNft = ({ typeOfGiveaway }) => {
  const deadline = new Date(typeOfGiveaway.deadline * 1000);
  const amount = typeOfGiveaway.amount / 10 ** 18;
  console.log(deadline);
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
          {getEllipsisTxt(typeOfGiveaway.creator)}
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
        <img
          alt="Luck You Logo"
          src={LuckyYouLogo}
          style={{ width: "20rem" }}
        ></img>
        <span className="nftWhite" style={{ fontSize: "50px" }}>
          {getEllipsisTxt(typeOfGiveaway.winner)}
        </span>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: "60%",
          }}
        >
          <span
            className="nftWhite"
            style={{ color: "#FFE338", fontSize: "120px" }}
          >
            {amount}
          </span>
          <img
            alt="Ethereum Logo"
            src={EthLogo}
            style={{ width: "4rem", marginLeft: "1rem" }}
          ></img>
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
          {moment(deadline).format("MMMM d, YYYY")}
        </span>
      </div>
    </div>
  );
};

export default SingleNft;
