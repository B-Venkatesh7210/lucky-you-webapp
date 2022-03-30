import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import db from "../../firebaseInit";
import { useMoralis } from "react-moralis";
import Grid from "@mui/material/Grid";
import Loader from "../Loader/Loader";

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
  }, []);
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
           
          </div>
        </div>
        // <div className="mainBg2" style={{ zIndex: "-2" }}>
        //   <div
        //     style={{
        //       display: "flex",
        //       flexDirection: "column",
        //       alignItems: "center",
        //       justifyContent: "space-between",
        //       padding: "1rem 2rem",
        //     }}
        //   >
        //     <Navbar isSticky />
        //     <div style={{ height: "20vh" }}>
        //       {nfts.length === 0 && (
        //         <h1
        //           style={{
        //             color: "white",
        //             display: "flex",
        //             alignItems: "center",
        //             justifyContent: "center",
        //             height: "60vh",
        //             fontSize: "60px",
        //             fontFamily: "Hand Drawn Shapes",
        //             letterSpacing: "3px",
        //           }}
        //         >
        //           No NFT created yet
        //         </h1>
        //       )}
        //       <div style={{ height: "10rem" }}></div>
        //       <div
        //         style={{
        //           marginLeft: "6rem",
        //           display: "flex",
        //           flexDirection: "row",
        //           flexWrap: "wrap",
        //         }}
        //       >
        //         {nfts.map((nft) => {
        //           return (
        //             <div
        //               key={nft.url}
        //               style={{
        //                 display: "flex",
        //                 justifyContent: "center",
        //                 margin: "1rem",
        //                 height: "30rem",
        //               }}
        //             >
        //               <img
        //                 src={nft.url}
        //                 alt="file"
        //                 style={{ width: "25rem" }}
        //               />
        //               ;
        //             </div>
        //           );
        //         })}
        //       </div>
        //     </div>
        //   </div>
        // </div>
      }
      {loading && <Loader />}
    </>
  );
};

export default YourNfts;
