import React from "react";
import Logo from "../img/LuckyYou Logo.png";
import { Link } from "react-router-dom";
import Ethereum from "../img/Ethereum.png";
import LINK from "../img/LINK.png";
import Filecoin from "../img/FIL.png";

const Home = () => {
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
        <img alt="Lucky You Logo" src={Logo} style={{ width: "36%" }} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
            height: "25vh",
            width: "50%",
          }}
        >
          <span className="whiteText" style={{ fontSize: "28px" }}>
            Your one Golden way to
          </span>
          <span className="yellowText" style={{ fontSize: "60px" }}>
            Create and Participate
          </span>
          <span className="whiteText" style={{ fontSize: "28px" }}>
            in giveaways of Matic tokens.
          </span>
        </div>
        <Link to="/home">
          <button
            className="button tapButton"
            style={{ height: "10vh", width: "15rem", marginTop: "1rem" }}
          >
            <span className="normalText" style={{ fontSize: "28px" }}>
              Enter the Dapp
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

const Guide = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="leftBg">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "45rem",
              height: "40rem",
              // background: "red",
              marginTop: "4rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <img
                alt="Polygon Logo"
                src={Ethereum}
                style={{ width: "6rem" }}
              />
              <span
                className="blackText"
                style={{ fontSize: "100px", marginLeft: "2rem" }}
              >
                Polygon
              </span>
            </div>
            <div
              style={{
                width: "90%",
                height: "70%",
                // background: "green",
                marginTop: "2rem",
              }}
            >
              <span
                className="normalText"
                style={{ fontSize: "30px", textAlign: "center" }}
              >
                Lucky You is deployed on Polygon Mainnet and the users have to
                create and participate in giveaways using Matic tokens. It is
                important for the users to connect their wallet which has to be
                in Polygon Mainnet chain in so that they can enjoy LuckyYou and
                its giveaways.
              </span>
            </div>
          </div>
          <div
            style={{ width: "40rem", height: "40rem", background: "blue" }}
          ></div>
        </div>
      </div>
      <div className="rightBg">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{ width: "40rem", height: "40rem", background: "blue" }}
          ></div>
          <div
            style={{
              width: "45rem",
              height: "40rem",
              // background: "red",
              marginTop: "4rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <span
                className="blackText"
                style={{ fontSize: "100px", marginLeft: "2rem" }}
              >
                Gelato
              </span>
            </div>
            <div
              style={{
                width: "90%",
                height: "70%",
                // background: "green",

                marginLeft: "2rem",
              }}
            >
              <span
                className="normalText"
                style={{
                  fontSize: "26px",
                  textAlign: "center",
                }}
              >
                Nothing happens on the blockchain by itself. When a user has to
                create a giveaway, he also has to give the deadline to that. To
                call the endGiveaway() function of our smart contract, we use
                Gelato's services to automate and call the function. Every
                giveaway has its gelato TaskID and after creation of the
                giveaway, the creator can view the details at Gelato Ops using
                the TaskId.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="leftBg">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "45rem",
              height: "40rem",
              // background: "red",
              marginTop: "4rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <img alt="Chainlink Logo" src={LINK} style={{ width: "6rem" }} />
              <span
                className="blackText"
                style={{ fontSize: "100px", marginLeft: "2rem" }}
              >
                ChainLink
              </span>
            </div>
            <div
              style={{
                width: "90%",
                height: "70%",
                // background: "green",
                marginTop: "2rem",
              }}
            >
              <span
                className="normalText"
                style={{ fontSize: "26px", textAlign: "center" }}
              >
                To declare winner of a giveaway, we have to generate random
                number to select a participant but since in blockchain
                everything is visible to everyone, we cannot make generate
                random number function in our smart contract because for some
                miscreants it would be easy for them to cheat and win every
                giveaway. So to solve this we used ChainLink VRF version 1 to
                generate random number off the chain and declare the winner.
              </span>
            </div>
          </div>
          <div
            style={{ width: "40rem", height: "40rem", background: "blue" }}
          ></div>
        </div>
      </div>
      <div className="rightBg">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{ width: "40rem", height: "40rem", background: "blue" }}
          ></div>
          <div
            style={{
              width: "45rem",
              height: "40rem",
              // background: "red",
              marginTop: "4rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <img
                alt="Filecoin Logo"
                src={Filecoin}
                style={{ width: "6rem" }}
              />
              <span
                className="blackText"
                style={{ fontSize: "100px", marginLeft: "2rem" }}
              >
                Filecoin
              </span>
            </div>
            <div
              style={{
                width: "90%",
                height: "70%",
                // background: "green",

                marginLeft: "2rem",
              }}
            >
              <span
                className="normalText"
                style={{
                  fontSize: "26px",
                  textAlign: "center",
                }}
              >
                After a winner is declared, he is given a random NFT which the
                user has to mint so that the user has the ownership on that NFT.
                The NFTs are stored in IPFS using Filecoin. The user can also
                view the other winners NFT and can also view his personnal NFTs
                by navigating to "your-nfts" page.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TechnologiesUsed = () => {
  return (
    <div
      className="mainBg"
      style={{
        height: "30vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span className="whiteText" style={{ fontSize: "80px" }}>
        Technologies Used
      </span>
    </div>
  );
};

function LandingPage() {
  return (
    <div>
      <Home />
      <TechnologiesUsed />
      <Guide />
    </div>
  );
}

export default LandingPage;
