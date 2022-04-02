import React from "react";
import Logo from "../img/LuckyYou Logo.png";
import { Link } from "react-router-dom";
import Ethereum from "../img/Ethereum.png";
import Gelato from "../img/Gelato.png";
import LINK from "../img/LINK.png";
import Filecoin from "../img/FIL.png";
import LinkedIn from "../img/LinkedIN_black.png";
import Github from "../img/Github_black.png";
import Twitter from "../img/Twitter_black.png";
import Youtube from "../img/Youtube_black.png";
import PoweredByPolygon from "../img/poweredByPolygon.png";
import ConnectWalletGif from "../img/Connect Wallet.gif";
import CreatingGiveawayGif from "../img/Creating Giveaway.gif";
import ParticipatingGiveawayGif from "../img/Participating Giveaway.gif";
import MintingGif from "../img/Minting NFT.gif";
import GelatoGif from "../img/Gelato.gif";
import ChainLinkGif from "../img/Chainlink.gif";

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
        <img alt="Powered By Polygon" src={PoweredByPolygon} style={{position: "absolute", width: "15rem", right: "2rem", bottom: "1rem"}}/>
      </div>
    </div>
  );
};

const Guide = () => {
  return (
    <div className="mainBg2" style={{ backgroundImage: "none" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <span className="whiteText" style={{ fontSize: "100px", marginTop: "2rem" }}>
          Guide
        </span>
        <div style={{ height: "2rem" }}></div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "90%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "30rem",
              width: "50%",
            }}
          >
            <span className="guideTitle" style={{ fontSize: "80px" }}>
              Connecting Wallet
            </span>
            <span
              className="guideText"
              style={{
                fontSize: "24px",
                textAlign: "center",
                width: "80%",
                margin: "1rem 0rem",
              }}
            >
              The very first job for every user is to connect their wallet using
              Metamask and the chain to be used is Polygon Mainnet, only then
              you can view, create and participate in giveaways.
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "30rem",
              width: "40%",
            }}
          >
            <img
              className="gif gifAnim"
              alt="Connecting Wallet gif"
              src={ConnectWalletGif}
              style={{ width: "80%", marginRight: "0rem" }}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "90%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "30rem",
              width: "40%",
            }}
          >
            <img
              className="gif gifAnim"
              alt="Creating Giveaway gif"
              src={CreatingGiveawayGif}
              style={{ width: "80%", marginRight: "0rem" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "30rem",
              width: "50%",
            }}
          >
            <span className="guideTitle2" style={{ fontSize: "80px" }}>
              Creating a Giveaway
            </span>
            <span
              className="guideText"
              style={{
                fontSize: "24px",
                textAlign: "center",
                width: "80%",
                margin: "1rem 0rem",
              }}
            >
              Creating a giveaway is very simple. All you have to do is to click
              on "Create Giveaway", fill in the details, determine the deadline
              and amount of the giveaway. Boom! your giveaway is Live now
            </span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "90%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "30rem",
              width: "50%",
            }}
          >
            <span
              className="guideTitle"
              style={{ fontSize: "80px", textAlign: "center" }}
            >
              Participating in Giveaway
            </span>
            <span
              className="guideText"
              style={{
                fontSize: "24px",
                textAlign: "center",
                width: "80%",
                margin: "1rem 0rem",
              }}
            >
              To participate all you have to do is click on Participate button
              of a particular giveaway and pay the participation fees which is
              to be determined by the giveaway amount. After participating you
              have to wait for the giveaway to end with a positive result.
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "30rem",
              width: "40%",
            }}
          >
            <img
              className="gif gifAnim"
              alt="Participating Giveaway gif"
              src={ParticipatingGiveawayGif}
              style={{ width: "80%", marginRight: "0rem" }}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "90%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "30rem",
              width: "40%",
            }}
          >
            <img
              className="gif gifAnim"
              alt="Minting NFT gif"
              src={MintingGif}
              style={{ width: "80%", marginRight: "0rem" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "30rem",
              width: "50%",
            }}
          >
            <span className="guideTitle2" style={{ fontSize: "80px" }}>
              Minting NFT
            </span>
            <span
              className="guideText"
              style={{
                fontSize: "24px",
                textAlign: "center",
                width: "80%",
                margin: "1rem 0rem",
              }}
            >
              When the giveaway ends, the winners has the choice to mint their
              NFT of their favourite colour and flex it to other participants.
              The other participants can also see the minted NFT of the winner
              of a particular giveaway.
            </span>
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
        backgroundImage: "none",
      }}
    >
      <span className="whiteText" style={{ fontSize: "100px" }}>
        Technologies Used
      </span>
    </div>
  );
};

const Technologies = () => {
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
                in Polygon Mainnet chain so that they can enjoy LuckyYou and its
                giveaways.
              </span>
            </div>
          </div>
          <div
            style={{
              width: "40rem",
              height: "40rem",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              className="gif"
              alt="Polygon gif"
              src={ConnectWalletGif}
              style={{ width: "90%", marginRight: "8rem" }}
            />
          </div>
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
            style={{
              width: "40rem",
              height: "40rem",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              className="gif"
              alt="Gelato gif"
              src={GelatoGif}
              style={{ width: "90%", marginLeft: "8rem" }}
            />
          </div>
          <div
            style={{
              width: "45rem",
              height: "40rem",
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
              <img alt="Gelato Logo" src={Gelato} style={{ width: "6rem" }} />
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
                marginTop: "2rem",
              }}
            >
              <span
                className="normalText"
                style={{ fontSize: "26px", textAlign: "center" }}
              >
                To declare winner of a giveaway, we have to generate random
                number to select a participant but since in blockchain
                everything is visible to everyone, we cannot generate random
                number function in our smart contract because for some
                miscreants it would be easy for them to cheat and win every
                giveaway. So to solve this we used ChainLink VRF version 1 to
                generate random number off the chain which will declare a winner
                from the list of participants in a giveaway.
              </span>
            </div>
          </div>
          <div
            style={{
              width: "40rem",
              height: "40rem",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              className="gif"
              alt="Chainlink gif"
              src={ChainLinkGif}
              style={{ width: "90%", marginRight: "8rem" }}
            />
          </div>
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
            style={{
              width: "40rem",
              height: "40rem",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              className="gif"
              alt="Filecoin gif"
              src={MintingGif}
              style={{ width: "90%", marginLeft: "8rem" }}
            />
          </div>
          <div
            style={{
              width: "45rem",
              height: "40rem",
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
                After a winner is declared, they are given a random NFT which the
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


const Footer = () => {
  return (
    <div
      className="mainBg"
      style={{
        backgroundImage: "none",
        height: "20vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ height: "12vh" }}></div>
      <div
        style={{
          width: "100%",
          height: "8vh",
          background: "#f9e286",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "50%",
            height: "8vh",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <a rel="noreferrer" href="" target="_blank">
            <img alt="Youtube" src={Youtube} style={{ width: "2.5rem" }} />
          </a>
          {/* //Youtube Link to be added */}
          <a
            rel="noreferrer"
            href="https://github.com/B-Venkatesh7210/lucky-you-webapp"
            target="_blank"
          >
            <img alt="Github" src={Github} style={{ width: "2.5rem" }} />
          </a>
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/venkatesh-venmus-b0b839121/"
            target="_blank"
          >
            <img alt="LinkedIn" src={LinkedIn} style={{ width: "2.5rem" }} />
          </a>
          <a
            rel="noreferrer"
            href="https://twitter.com/RohitDuhan15"
            target="_blank"
          >
            <img alt="Twitter" src={Twitter} style={{ width: "2.5rem" }} />
          </a>
        </div>
      </div>
    </div>
  );
};

function LandingPage() {
  return (
    <div>
      <Home />
      <Guide />
      <TechnologiesUsed />
      <Technologies />
      <Footer />
    </div>
  );
}

export default LandingPage;
