import React, { useState } from "react";
import EthLogo from "../../img/Ethereum.png";
import Emoji from "../../img/emoji.png";
import Navbar from "../Navbar";

const CreateGiveaway = () => {
  const [formData, setFormData] = useState({
    message: "",
    socialLink: "",
    deadline: "",
    amount: "",
  });

  return (
    <div className="mainBg">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "2rem 0rem",
        }}
      >
        <Navbar isSticky/>
        <span
          className="whiteText"
          style={{ fontSize: "60px", marginTop: "6rem" }}
        >
          Create a Giveaway
        </span>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
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
                0xhhsdjdadfjaiujhda3857
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
                className="textField normalText2"
                value={formData.amount}
                type="number"
                name="amount"
                id="amount"
                style={{ width: "90%", height: "2rem", fontSize: "24px" }}
                placeholder="Enter Amount"
                onChange={(e) => {
                  setFormData({ ...formData, amount: e.target.value });
                }}
              ></input>
              <img alt="Ethereum Logo" src={EthLogo} style={{width: "1.5rem", marginRight: "1rem"}}></img>
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
                className="textField normalText2"
                value={formData.deadline}
                type="number"
                name="deadline"
                id="deadline"
                style={{ width: "90%", height: "2rem", fontSize: "24px" }}
                placeholder="Enter Days"
                onChange={(e) => {
                  setFormData({ ...formData, deadline: e.target.value });
                }}
              ></input>
              <span className="normalText2" style={{fontSize: "28px",marginRight: "1rem"}}>
                Days
              </span>
            </div>
          </div>
          <button
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
              <img
                src={Emoji}
                alt="Emoji"
                style={{width: "4rem"}}
              ></img>
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateGiveaway;