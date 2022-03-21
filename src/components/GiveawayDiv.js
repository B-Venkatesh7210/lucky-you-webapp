import React from "react";
import EthLogo from "../img/Ethereum.png";
import Emoji from "../img/emoji.png";

const GiveawayDiv = () => {
    return (
      <>
        <div
          className="giveAwayDiv"
          style={{
            height: "100%",
            width: "55%",
            marginTop: "3rem",
            padding: "1rem",
          }}
        >
          <div
            className="blackText"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "1rem",
            }}
          >
            <span style={{ fontSize: "1.2rem" }}>0xhhsdjdadfjaiujhda3857</span>
            <span>
              <span className="blackText" style={{ fontSize: "1.2rem" }}>
                Time: 1day 23hrs 14min
              </span>
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "70%",
              }}
            >
              <span
                className="normalText"
                style={{ fontSize: "40px", textAlign: "center" }}
              >
                This is a giveaway for 1 ETH. Subscribe to my channel
              </span>
              <span
                className="normalText"
                style={{
                  fontSize: "30px",
                  color: "blue",
                  textDecoration: "underline",
                }}
              >
                https://www.youtube.com/
              </span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "1rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <span className="blackText" style={{ fontSize: "1.2rem" }}>
                No. of participants
              </span>
              <span className="normalText" style={{ fontSize: "3rem" }}>
                12
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                marginRight: "1rem",
              }}
            >
              <span className="blackText" style={{ fontSize: "1.2rem" }}>
                Giveaway Amount
              </span>
              <span className="normalText" style={{ fontSize: "4rem" }}>
                24{" "}
                <img
                  src={EthLogo}
                  alt="Ethereum Logo"
                  style={{ width: "2rem" }}
                ></img>
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <span className="blackText" style={{ fontSize: "1.2rem" }}>
                Particpation fee
              </span>
              <span className="normalText" style={{ fontSize: "3rem" }}>
                24
                <img
                  src={EthLogo}
                  alt="Ethereum Logo"
                  style={{ width: "1.2rem", marginLeft: "1rem" }}
                ></img>
              </span>
            </div>
          </div>
  
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
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
          </div>
        </div>
      </>
    );
  };

  export default GiveawayDiv;