import React, { useState, useEffect } from "react";
import Web3 from "web3";
import { useMoralis } from "react-moralis";
import abi from "./utils/LuckyYou.json";
import Chains from "./components/Chains";
import Wallet from "./components/Wallet/Wallet";
// import { ethers } from "moralis/node_modules/ethers";
import Moralis from "moralis";


const Test = () => {
  const { authenticate, isAuthenticated, logout, authError, user, web3 } = useMoralis();
  const [close, setClose] = useState(false);
  const contractAddress = "0xc8E515e4dA9FdF7BeEbf87Ca14D8Db35939c4e88";
  const contractABI = abi;
  const [formData, setFormData] = useState({
    message: "",
    deadline: "",
    amount: "",
  });

  const ethers = Moralis.web3Library;

  const createGiveaway = async () => {
    try {
      const web3 = await Moralis.enableWeb3({ provider: "metamask" });
      const provider = web3.getSigner();
      const luckyYouContract = new ethers.Contract(
        contractAddress,
        contractABI,
        provider
      );
      const giveawayTxn = await luckyYouContract.createGiveaway(
        formData.message,
        formData.deadline,
        formData.amount,
        { gasLimit: 300000, value: ethers.utils.parseEther(formData.amount) }
      );
      console.log("Mining...", giveawayTxn.hash);
      await giveawayTxn.wait();
      console.log("Mined---", giveawayTxn.hash);
      console.log(formData);
      setFormData({
        message: "",
        deadline: "",
        amount: "",
      });
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  if (isAuthenticated) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1>Welcome to LUCKY YOU</h1>
          <span style={{ marginBottom: "1rem" }}>
            {user ? user.attributes.username : "Connect your wallet"}
          </span>
          <button onClick={() => logout()}>Log Out</button>
        </div>
        {/* <div>
          <Chains />
        </div> */}
        <div>
          <h2>Create a giveaway</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              createGiveaway();
            }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-evenly",
              height: "40vh",
            }}
          >
            <label>Message</label>
            <textarea
              value={formData.message}
              type="text"
              name="message"
              id="message"
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            ></textarea>
            <label>Deadline</label>
            <input
              value={formData.deadline}
              type="number"
              name="deadline"
              id="deadline"
              onChange={(e) =>
                setFormData({ ...formData, deadline: e.target.value })
              }
            ></input>
            <label>Amount</label>
            <input
              value={formData.amount}
              type="number"
              name="amount"
              id="amount"
              onChange={(e) =>
                setFormData({ ...formData, amount: e.target.value })
              }
            ></input>
            <input type="submit" value="Submit"></input>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>LUCKY YOU</h1>
      {!close &&
        authError &&
        {
          /* <Alert status="error" style={{width: "50%", height: "20vh"}}>
          <AlertIcon boxSize="40px"/>
          <Box flex="1" style={{marginLeft: "1rem"}}>
            <AlertTitle>Authentication has failed</AlertTitle>
            <AlertDescription display="block">
              {authError.message}
            </AlertDescription>
          </Box>
          <CloseButton position="absolute" right="8px" top="8px" onClick={()=> {setClose(!close)}}/>
        </Alert> */
        }}
      <button onClick={() => authenticate()}>Connect Wallet</button>

      {/* <button onClick={}>
      Log Out

      </button> */}
    </div>
  );
}

export default Test;