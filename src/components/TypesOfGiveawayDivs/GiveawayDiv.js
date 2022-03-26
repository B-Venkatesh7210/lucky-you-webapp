import React, { useState, useEffect } from "react";
import EthLogo from "../../img/Ethereum.png";
import Emoji from "../../img/emoji.png";
import { getEllipsisTxt } from "../../helpers/formatters";
import { useMoralis } from "react-moralis";
import Web3 from "web3";
import config from "../config/config";
import { useNavigate } from "react-router-dom";
import contractABI from "../Contract/contractABI.json";
import Timer from "../Timer";

const GiveawayDiv = ({ typeOfGiveaway}) => {
  var newArray = [];
  const [participants, setParticipants] = useState([]);
  const navigate = useNavigate();
  const smallTimer = true;
  const amount = typeOfGiveaway.amount / 10 ** 18;
  const participationFee = typeOfGiveaway.participationFee / 10 ** 18;

  const { user, isAuthenticated } = useMoralis();

  const participateGiveaway = async () => {
    if (!isAuthenticated) {
      alert("Please Connect your Wallet");
      return;
    }

    let web3js;
    web3js = new Web3(window.web3.currentProvider);

    const contract = new web3js.eth.Contract(
      contractABI,
      config.contractAddress
    );

    try {
      let participationFee = typeOfGiveaway.amount / 10 ** 20;
      const participateGiveawayCall = contract.methods
        .participate(typeOfGiveaway.uniqueId)
        .send({
          from: user.get("ethAddress"),
          value: web3js.utils.toWei(String(participationFee), "ether"),
        });

      participateGiveawayCall.on("error", (error) => {
        console.log(error);
        alert(error);
      });

      contract.events.GiveawayParticipated({}, function (error, event) {
        console.log(event);
        navigate("/participated-giveaways", { state: event });
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(typeOfGiveaway.participants);
    console.log(user.get("ethAddress"));

    for (var i = 0; i < typeOfGiveaway.participants.length; i++) {
      if (typeOfGiveaway.participants[i])
        newArray[i] = typeOfGiveaway.participants[i].toLowerCase();
    }
    setParticipants(newArray);
    console.log(newArray);
  }, []);

  return user ? (
    user.get("ethAddress") ? (
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
            <span style={{ fontSize: "1.2rem" }}>
              Creator : {getEllipsisTxt(typeOfGiveaway.creator)}
            </span>
            <span>
              <span
                className="blackText"
                style={{
                  fontSize: "1.2rem",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <span>Time :</span>
                {typeOfGiveaway.isLive ? (
                  <Timer
                    endTime={typeOfGiveaway.deadline}
                    smallTimer={smallTimer}
                  />
                ) : (
                  <span style={{ marginLeft: "10px" }}>Giveaway has ended</span>
                )}
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
                {typeOfGiveaway.message}
              </span>
              <span
                className="normalText"
                style={{
                  fontSize: "30px",
                  color: "blue",
                  textDecoration: "underline",
                }}
              >
                {typeOfGiveaway.socialLink}
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
                {typeOfGiveaway.participants.length}
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
                {amount}{" "}
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
                Participation fee
              </span>
              <span className="normalText" style={{ fontSize: "3rem" }}>
                {participationFee}
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
            {typeOfGiveaway.isLive ? (
              participants.includes(
                user.get("ethAddress") && user.get("ethAddress").toLowerCase()
              ) ? (
                <button
                  className="greenButton"
                  style={{
                    width: "17rem",
                    height: "4rem",
                    background: "#8C8C8C",
                    cursor: "auto",
                  }}
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
                    Participated
                  </span>
                </button>
              ) : (
                <button
                  className="greenButton"
                  style={{ width: "17rem", height: "4rem" }}
                  onClick={participateGiveaway}
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
              )
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  width: "80%",
                  justifyContent: "space-evenly",
                }}
              >
                <button
                  className="greenButton"
                  style={{ width: "17rem", height: "5rem" }}
                >
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "space-around",
                      fontFamily: "Hand Drawn Shapes",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",

                        fontSize: "24px",
                        color: "black",
                      }}
                    >
                      Winner
                      <img
                        src={Emoji}
                        alt="Emoji"
                        style={{ width: "12%", marginLeft: "0.5rem" }}
                      ></img>
                    </span>
                    <span style={{ fontSize: "28px" }}>
                      {getEllipsisTxt(typeOfGiveaway.winner)}
                    </span>
                  </span>
                </button>
                <div>
                  <button
                    className="greenButton"
                    style={{ width: "17rem", height: "5rem" }}
                    onClick={() => {
                      navigate("/nft-details", { state: typeOfGiveaway });
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        fontFamily: "Hand Drawn Shapes",
                        fontSize: "32px",
                        color: "black",
                      }}
                    >
                      {typeOfGiveaway.winner.toLowerCase() ===
                      user.get("ethAddress").toLowerCase() ? (
                        <span>Your NFT</span>
                      ) : (
                        <span>Their NFT</span>
                      )}
                      <img
                        src={Emoji}
                        alt="Emoji"
                        style={{ width: "18%", marginLeft: "0.5rem" }}
                      ></img>
                    </span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </>
    ) : (
      <></>
    )
  ) : (
    <></>
  );
};

export default GiveawayDiv;