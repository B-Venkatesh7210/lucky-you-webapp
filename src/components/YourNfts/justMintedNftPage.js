import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar";
import db from "../../firebaseInit";
import { getEllipsisTxt } from "../../helpers/formatters";
import Loader from "../Loader/Loader";
import Moment from "react-moment";
import config from "../config/config";

const JustMintedNftPage = ({ typeOfGiveaway }) => {
  const printRef = React.useRef();
  let location = useLocation();
  const [firebaseData, setfirebaseData] = useState();
  const [giveAway, setGiveAway] = useState(typeOfGiveaway);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const data = await db
      .collection("nfts")
      .doc(location.state ? location.state.uniqueId : typeOfGiveaway.uniqueId)
      .get();
    setfirebaseData(data.data());
    setLoading(false);

    console.log(data.data());
  };
  useEffect(() => {
    setLoading(true);
    location.state ? setGiveAway(location.state) : setGiveAway(typeOfGiveaway);
    getData();
  }, []);

  const amount = parseInt(giveAway.amount) / 10 ** 18;
  const deadline = new Date(typeOfGiveaway.deadline * 1000);
  const timestamp = new Date(typeOfGiveaway.timestamp * 1000);
  const nftLink =
    "https://rinkeby.rarible.com/token/" +
    config.nftContractAddress +
    ":" +
    typeOfGiveaway.uniqueId +
    "?tab=details";

  return (
    <>
      {
        <div className="mainBg2">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Navbar isSticky />
            <div
              style={{
                display: "flex",
                flexDirection: "row",

                justifyContent: "space-around",
                alignItems: "center",
                width: "80%",
                marginTop: "10rem",
              }}
            >
              <div ref={printRef}>
                {firebaseData && (
                  <img
                    className="singleNft"
                    src={firebaseData.url}
                    alt="Nft"
                    style={{ width: "30rem", borderRadius: "40px" }}
                  />
                )}
              </div>

              <div
                className="metaDataDiv"
                style={{
                  width: "30%",
                  display: "flex",
                  flexDirection: "column",
                  padding: "1.5rem 1rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "baseline",
                  }}
                >
                  <span className="blackText" style={{ fontSize: "24px" }}>
                    Unique ID:
                  </span>
                  <span
                    className="nftWhite"
                    style={{ fontSize: "28px", marginLeft: "10px" }}
                  >
                    {giveAway.uniqueId}
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "baseline",
                    marginTop: "0.5rem",
                  }}
                >
                  <span className="blackText" style={{ fontSize: "24px" }}>
                    Creator:
                  </span>
                  <span
                    className="nftWhite"
                    style={{ fontSize: "28px", marginLeft: "10px" }}
                  >
                    {getEllipsisTxt(giveAway.creator)}
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "baseline",
                    marginTop: "0.5rem",
                  }}
                >
                  <span className="blackText" style={{ fontSize: "24px" }}>
                    Winner:
                  </span>
                  <span
                    className="nftWhite"
                    style={{ fontSize: "28px", marginLeft: "10px" }}
                  >
                    {getEllipsisTxt(giveAway.winner)}
                  </span>
                </div>

                <span
                  className="blackText"
                  style={{ fontSize: "24px", marginTop: "0.5rem" }}
                >
                  Message:
                </span>
                <span
                  className="nftWhite"
                  style={{ fontSize: "28px", wordBreak: "break-word" }}
                >
                  {giveAway.message}
                </span>
                <span
                  className="blackText"
                  style={{ fontSize: "24px", marginTop: "0.5rem" }}
                >
                  Social Link:
                </span>
                <span style={{ fontSize: "28px", wordBreak: "break-word" }}>
                  <a
                    rel="noreferrer"
                    href={typeOfGiveaway.socialLink}
                    target="_blank"
                    className="normalText"
                    style={{
                      fontSize: "30px",
                      color: "blue",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    {typeOfGiveaway.socialLink}
                  </a>
                </span>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "baseline",
                    marginTop: "0.5rem",
                  }}
                >
                  <span className="blackText" style={{ fontSize: "24px" }}>
                    Amount:
                  </span>
                  <span
                    className="nftWhite"
                    style={{ fontSize: "28px", marginLeft: "10px" }}
                  >
                    {amount}
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "baseline",
                    marginTop: "0.5rem",
                  }}
                >
                  <span className="blackText" style={{ fontSize: "24px" }}>
                    Started:
                  </span>
                  <span
                    className="nftWhite"
                    style={{ fontSize: "28px", marginLeft: "10px" }}
                  >
                    <Moment date={timestamp} format="DD MMM YYYY"></Moment>
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "baseline",
                    marginTop: "0.5rem",
                  }}
                >
                  <span className="blackText" style={{ fontSize: "24px" }}>
                    Deadline:
                  </span>
                  <span
                    className="nftWhite"
                    style={{ fontSize: "28px", marginLeft: "10px" }}
                  >
                    <Moment date={deadline} format="DD MMM YYYY"></Moment>
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "baseline",
                    marginTop: "0.5rem",
                  }}
                >
                  <span className="blackText" style={{ fontSize: "24px" }}>
                    No. of Participants:
                  </span>
                  <span
                    className="nftWhite"
                    style={{ fontSize: "28px", marginLeft: "10px" }}
                  >
                    {giveAway.participants.length}
                  </span>
                </div>
                <button
                  className="greenButton tapButton2"
                  style={{
                    fontSize: "28px",
                    wordBreak: "break-word",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    marginTop: "1rem",
                    marginLeft: "4rem",
                    height: "3rem",
                    width: "12rem",
                  }}
                >
                  <a
                    rel="noreferrer"
                    href={nftLink}
                    target="_blank"
                    className="normalText"
                    style={{
                      fontSize: "28px",
                      lineHeight: "0px",
                      color: "black",
                      textDecoration: "none",
                      cursor: "pointer",
                      textAlign: "center",
                      marginTop: "1rem",
                    }}
                  >
                    Jump to NFT
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      }
      {loading && <Loader />}
    </>
  );
};
export default JustMintedNftPage;
