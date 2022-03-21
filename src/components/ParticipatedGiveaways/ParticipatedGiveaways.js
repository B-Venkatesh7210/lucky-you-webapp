import React from "react";
import Navbar from "../Navbar";
import GiveawayDiv from "../GiveawayDiv";

const ParticipatedGiveaways = () => {
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
        <span
          className="whiteText"
          style={{
            fontSize: "60px",
            marginTop: "6rem",
          }}
        >
          <span>Participated Giveaways</span>
        </span>
        {<GiveawayDiv />}
      </div>
    </div>
  );
};

export default ParticipatedGiveaways;
