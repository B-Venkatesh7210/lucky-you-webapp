import React from "react";
import Logo from "../../img/LuckyYou Logo.png";
import EthLogo from "../../img/Ethereum.png";
import Emoji from "../../img/emoji.png";
import Navbar from "../Navbar";

const HomePage = () => {
  return (
    <div className="mainBg">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "2rem 2rem",
        }}
      >
      <Navbar isSticky />
        <img
          alt="Lucky You Logo"
          src={Logo}
          style={{ width: "36%", marginTop: "7rem" }}
        />
        <button
          className="button createGiveawayBtn"
          style={{ height: "10vh", width: "20%", marginTop: "1.5rem" }}
        >
          <span className="buttonText" style={{ fontSize: "28px" }}>
            Create a Giveaway
          </span>
        </button>
        <span
          className="whiteText"
          style={{ fontSize: "60px", marginTop: "6rem" }}
        >
          List of Giveaways
        </span>
        {<GiveawayDiv />}
      </div>
    </div>
  );
};

const GiveawayDiv = () => {
  return (
    <>
      <div
        className="giveAwayDiv"
        style={{ height: "50vh", width: "55%", marginTop: "3rem" }}
      >
        <div className="giveawayDataDiv blackText">
          <span style={{ fontSize: "1.2rem" }}>0xhhsdjdadfjaiujhda3857</span>
          <span>
            <span className="blackText" style={{ fontSize: "1.2rem" }}>
              Time: 1day 23hrs 14min
            </span>
          </span>
        </div>
        <div className="giveawayDataDiv" style={{ margin: "2.8rem 1rem" , width:"100%"}}>
          <span
            className="buttonText"
            style={{
              fontSize: "1.7rem",
              fontWeight: "400",
            }}
          >
            This is a giveaway for 1 Eth.
            <br />
            Subscribe to my channel https://www.youtube.com/c/BlockExplorerMedia
          </span>
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              marginRight: "1rem"
            }}
          >
            <span className="blackText" style={{ fontSize: "1.2rem" }}>
              Giveaway Amount
            </span>
            <span className="buttonText" style={{ fontSize: "4rem" }}>
              24{" "}
              <img
                src={EthLogo}
                alt="Ethereum Logo"
                style={{ width: "10%" }}
              ></img>
            </span>
          </span>
        </div>

        <div className="giveawayDataDiv">
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              
            }}
          >
            <span className="blackText" style={{ fontSize: "1.2rem" }}>
              No. of participants
            </span>
            <span className="buttonText" style={{ fontSize: "3rem" }}>
              12
            </span>
          </span>
          <button
            className="greenButton"
            style={{ width: "17rem", height: "4rem" }}
          >
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "Hand Drawn Shapes",
                fontSize: "32px",
                color: "black",
              }}
            >
              Participate
              <img
                src={Emoji}
                alt="Emoji"
                style={{ width: "18%", marginLeft: "0.5rem" }}
              ></img>
            </span>
          </button>
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <span className="blackText" style={{ fontSize: "1.2rem" }}>
              Particpation fee
            </span>
            <span className="buttonText" style={{ fontSize: "3rem" }}>
              24
              <img
                src={EthLogo}
                alt="Ethereum Logo"
                style={{ width: "10%", marginLeft: "0.2rem" }}
              ></img>
            </span>
          </span>
        </div>
      </div>
    </>
  );
};

export default HomePage;
