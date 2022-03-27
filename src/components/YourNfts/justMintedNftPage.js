import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import db from "../../firebaseInit";


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
          }}
        >
          <div ref={printRef}>
            {firebaseData && <img src={firebaseData.url} alt="Nft" />}
          </div>
          <div className="metaDataDiv">
            <span>Creator : {`${giveAway.creator} `}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default JustMintedNftPage;
