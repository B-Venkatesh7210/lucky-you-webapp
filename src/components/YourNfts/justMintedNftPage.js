import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar";
import db from "../../firebaseInit";
import moment from "moment";
import { getEllipsisTxt } from "../../helpers/formatters";

const JustMintedNftPage = ({ typeOfGiveaway, type }) => {
  const printRef = React.useRef();
  let location = useLocation();
  const [firebaseData, setfirebaseData] = useState();
  const [giveAway, setGiveAway] = useState(typeOfGiveaway);
  const [loading, setLoading] = useState(true);
  // user.ethAddress == +
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
    console.log(type);
    location.state ? setGiveAway(location.state) : setGiveAway(typeOfGiveaway);
    getData();
  }, []);

  const amount = giveAway.amount / 10 ** 18;
  const deadline = moment(giveAway.deadline * 1000).format("MMMM d, YYYY");
  const timestamp = moment(giveAway.timestamp * 1000).format("MMMM d, YYYY");

  return loading ? (
    <div>Loading</div>
  ) : (
    <div className="mainBg2">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
          padding: "2rem 0rem",
        }}
      >
        <Navbar isSticky />
        <div style={{ height: "5vh" }}></div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",

            justifyContent: "space-around",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div ref={printRef}>
            {firebaseData && <img src={firebaseData.url} alt="Nft" />}
          </div>
          <div className="metaDataDiv">
            <span>Creator : {`${giveAway.creator} `}</span>
            <div>
              {firebaseData && <img src={firebaseData.url} alt="Nft" />}
            </div>
            <div
              className="metaDataDiv"
              style={{
                width: "30%",
                display: "flex",
                flexDirection: "column",
                padding: "2rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "baseline",
                }}
              >
                <span className="nftWhite" style={{ fontSize: "24px" }}>
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
                <span className="nftWhite" style={{ fontSize: "24px" }}>
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
                <span className="nftWhite" style={{ fontSize: "24px" }}>
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
                className="nftWhite"
                style={{ fontSize: "24px", marginTop: "0.5rem" }}
              >
                Message:
              </span>
              <span className="nftWhite" style={{ fontSize: "28px" }}>
                {giveAway.message}
              </span>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "baseline",
                  marginTop: "0.5rem",
                }}
              >
                <span className="nftWhite" style={{ fontSize: "24px" }}>
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
                <span className="nftWhite" style={{ fontSize: "24px" }}>
                  Started:
                </span>
                <span
                  className="nftWhite"
                  style={{ fontSize: "28px", marginLeft: "10px" }}
                >
                  {timestamp}
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
                <span className="nftWhite" style={{ fontSize: "24px" }}>
                  Deadline:
                </span>
                <span
                  className="nftWhite"
                  style={{ fontSize: "28px", marginLeft: "10px" }}
                >
                  {deadline}
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
                <span className="nftWhite" style={{ fontSize: "24px" }}>
                  No. of Participants:
                </span>
                <span
                  className="nftWhite"
                  style={{ fontSize: "28px", marginLeft: "10px" }}
                >
                  {giveAway.participants.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default JustMintedNftPage;
