import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import db from "../../firebaseInit";
import { useMoralis } from "react-moralis";
import Loader from "../Loader/Loader";
import config from "../config/config";

const YourNfts = () => {
  const [nfts, setNfts] = useState([]);
  const { user, isAuthenticated } = useMoralis();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isAuthenticated) {
      db.collection("nfts")
        .where("winner", "==", user.get("ethAddress").toLowerCase())
        .onSnapshot((snapshot) =>
          setNfts(snapshot.docs.map((doc) => doc.data()))
        );
      setLoading(false);
    }
  }, [isAuthenticated]);
  return (
    <>
      {
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
            <div style={{ height: "15vh" }}></div>
            <div
              className="scrollYourNft"
              style={{
                height: "80vh",
                width: "90%",
                overflow: "scroll",
              }}
            >
              {nfts.length === 0 && (
                <h1
                  style={{
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "60vh",
                    fontSize: "60px",
                    fontFamily: "Hand Drawn Shapes",
                    letterSpacing: "3px",
                  }}
                >
                  No NFT created yet
                </h1>
              )}
              <div
                style={{
                  marginLeft: "6rem",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "start",
                  flexWrap: "wrap",
                }}
              >
                {nfts.slice(0).reverse().map((nft) => {

                  return (
                    
                      <div
                        key={nft.url}
                        onClick={() => {
                      const nftLink =
                        "https://opensea.io/assets/matic/" +
                        config.nftContractAddress +
                        "/" +
                        nft.tokenId;
                        window.open(nftLink, "_blank")
                    }}
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          margin: "1rem",
                          cursor: "pointer"
                        }}
                      >
                        <img
                          className="nftHover"
                          src={nft.url}
                          alt="file"
                          style={{ width: "20rem", borderRadius: "40px" }}
                        />
                      </div>
                  
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      }
      {loading && <Loader />}
    </>
  );
};

export default YourNfts;
