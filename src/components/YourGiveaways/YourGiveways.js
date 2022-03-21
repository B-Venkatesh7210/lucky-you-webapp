import React from "react";
import Navbar from "../Navbar";
import GiveawayDiv from "../GiveawayDiv";

const YourGiveaways = () => {
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
        <div style={{height: "10vh"}}>

        </div>
        {<GiveawayDiv />}
      </div>
    </div>
  );
};

export default YourGiveaways;
