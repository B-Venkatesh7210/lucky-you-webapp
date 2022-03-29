import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import db from "../../firebaseInit";
import { useMoralis } from "react-moralis";
import Grid from "@mui/material/Grid";

const YourNfts = () => {
  const [nfts, setNfts] = useState([]);
  const { user, isAuthenticated } = useMoralis();

  useEffect(() => {
    if (isAuthenticated) {
      db.collection("nfts")
        .where("winner", "==", user.get("ethAddress").toLowerCase())
        .onSnapshot((snapshot) =>
          setNfts(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, []);
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
        <div style={{ height: "20vh" }}>
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
                letterSpacing: "3px"
              }}
            >
              No NFT created yet
            </h1>
          )}

          <Grid container spacing={3} alignItems="center">
            {nfts.map((nft) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  key={nft.url}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <img src={nft.url} alt="file" style={{ width: "25rem" }} />;
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default YourNfts;
