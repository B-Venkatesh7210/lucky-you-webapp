import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import EthLogo from "../../img/Ethereum.png";
import Emoji from "../../img/emoji.png";
import Navbar from "../Navbar";
import { useMoralis } from "react-moralis";
import Web3 from "web3";
import config from "../config/config";
import contractABI from "../Contract/contractABI.json";
import { message } from "antd";

const CreateGiveaway = () => {
  const { user, isAuthenticated } = useMoralis();
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    message: "",
    socialLink: "",
    deadline: "",
    amount: "",
  });

  const createGiveawayFrontend = async (e) => {

    e.preventDefault();

    if (!isAuthenticated) {
      alert("Please Connect your Wallet");
      return;
    } else if (formData.amount === 0) {
      alert("Enter giveaway amount greater than 0");
      return;
    }

    let web3js;
    web3js = new Web3(window.web3.currentProvider);
//
    const contract = new web3js.eth.Contract(
      contractABI,
      config.contractAddress
    );

    let _deadline = parseInt(formData.deadline);
    let actualDeadline = (Math.floor(Date.now()/1000)) + (_deadline * 86400); //86400 se multiply kardena
    console.log(actualDeadline);

    try {
      const createGiveawayCall = contract.methods
        .createGiveaway(formData.message, formData.socialLink, actualDeadline)
        .send({
          from: user.get("ethAddress"),
          value: web3js.utils.toWei(formData.amount, "ether"),
        });

      createGiveawayCall.on("error", (error) => {
        //
        console.log(error);
        alert(error);
      });

      contract.events.GiveawayCreated({}, function (error, event) {
        console.log(event);
        //
        navigate("/giveaway-details", { state: event.returnValues });
        
      
      });
    } catch (error) {
//
      alert(error.message);
    }

  };

  return (
    <div className="mainBg2">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "2rem 0rem",
        }}
      >
        <Navbar isSticky />
        <span
          className="whiteText"
          style={{ fontSize: "60px", marginTop: "6rem" }}
        >
          Create a Giveaway
        </span>
        <form
          onSubmit={createGiveawayFrontend}
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <div
            style={{
              height: "15vh",
              width: "80%",
              marginTop: "3rem",
              marginBottom: "1rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <span className="whiteText" style={{ fontSize: "38px" }}>
              Creator
            </span>
            <div className="button2" style={{ height: "4rem", width: "100%" }}>
              <span className="blackText" style={{ fontSize: "28px" }}>
                {user.get("ethAddress")}
              </span>
            </div>
          </div>
          <div
            style={{
              height: "30vh",
              width: "80%",
              margin: "1rem 0rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <span className="whiteText" style={{ fontSize: "38px" }}>
              Giveaway Description <span>(Max 80)</span>
            </span>
            <div className="button2" style={{ height: "10rem", width: "100%" }}>
              <textarea
                className="textField normalText"
                value={formData.message}
                type="text"
                name="message"
                id="message"
                style={{ width: "100%", height: "8rem", fontSize: "28px" }}
                placeholder="Enter Description"
                onChange={(e) => {
                  setFormData({ ...formData, message: e.target.value });
                }}
              ></textarea>
            </div>
          </div>
          <div
            style={{
              height: "15vh",
              width: "80%",
              display: "flex",
              margin: "1.5rem 0rem",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <span className="whiteText" style={{ fontSize: "38px" }}>
              Social Link
            </span>
            <div className="button2" style={{ height: "4rem", width: "100%" }}>
              <input
                className="textField normalText"
                value={formData.socialLink}
                type="text"
                name="socialLink"
                id="socialLink"
                style={{ width: "100%", height: "2rem", fontSize: "28px" }}
                placeholder="Enter Social Link"
                onChange={(e) => {
                  setFormData({ ...formData, socialLink: e.target.value });
                }}
              ></input>
            </div>
          </div>
          <div
            style={{
              height: "15vh",
              width: "80%",
              display: "flex",
              margin: "1.5rem 0rem",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <span className="whiteText" style={{ fontSize: "38px" }}>
              Giveaway Amount
            </span>
            <div
              className="button2"
              style={{
                height: "4rem",
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <input
                className="textField normalText"
                value={formData.amount}
                type="number"
                name="amount"
                id="amount"
                min="0"
                step="any"
                style={{ width: "90%", height: "2rem", fontSize: "24px" }}
                placeholder="Enter Amount"
                onChange={(e) => {
                  setFormData({ ...formData, amount: e.target.value });
                }}
              ></input>
              <img
                alt="Ethereum Logo"
                src={EthLogo}
                style={{ width: "1.5rem", marginRight: "1rem" }}
              ></img>
            </div>
          </div>
          <div
            style={{
              height: "15vh",
              width: "80%",
              display: "flex",
              margin: "1.5rem 0rem",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <span className="whiteText" style={{ fontSize: "38px" }}>
              Deadline
            </span>
            <div
              className="button2"
              style={{
                height: "4rem",
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <input
                className="textField normalText"
                value={formData.deadline}
                min="1"
                type="number"
                name="deadline"
                id="deadline"
                style={{ width: "90%", height: "2rem", fontSize: "24px" }}
                placeholder="Enter Days"
                onChange={(e) => {
                  setFormData({ ...formData, deadline: e.target.value });
                }}
              ></input>
              <span
                className="blackText"
                style={{ fontSize: "28px", marginRight: "1rem" }}
              >
                Days
              </span>
            </div>
          </div>
          <button
            type="submit"
            className="greenButton2"
            style={{ width: "22rem", height: "6rem", marginTop: "3rem" }}
          >
            <span
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                padding: "0rem 1.5rem",
                alignItems: "center",
                fontFamily: "Hand Drawn Shapes",
                fontSize: "48px",
                color: "black",
              }}
            >
              Create
              <img src={Emoji} alt="Emoji" style={{ width: "4rem" }}></img>
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateGiveaway;
