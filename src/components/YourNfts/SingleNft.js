import React, { useState, useEffect } from "react";
import LuckyYouLogo from "../../img/LuckyYou Logo.png";
import EthLogo from "../../img/Ethereum.png";
import moment from "moment";
import { getEllipsisTxt } from "../../helpers/formatters";

const SingleNft = ({ typeOfGiveaway, randNum }) => {

  const deadline = new Date(typeOfGiveaway.deadline * 1000);
  const amount = typeOfGiveaway.amount / 10 ** 18;
  console.log(deadline);

 

  
  return (
    <div
      className={`singleNft singleNft${randNum}`}
      style={{
        width: "30rem",
        height: "30rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "90%",
        }}
      >
        <span className="nftWhite" style={{ fontSize: "28px" }}>
          Creator:
        </span>
        <span className="nftWhite" style={{ fontSize: "40px" }}>
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
          style={{ width: "15rem" }}
        ></img>
        <span className="nftWhite" style={{ fontSize: "40px" }}>
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
            style={{ color: "#FFE338", fontSize: "90px" }}
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
        <span className="nftWhite" style={{ fontSize: "28px" }}>
          Date:
        </span>
        <span className="nftWhite" style={{ fontSize: "40px" }}>
          {moment(deadline).format("MMMM d, YYYY")}
        </span>
      </div>
    </div>
  );
};

export default SingleNft;
