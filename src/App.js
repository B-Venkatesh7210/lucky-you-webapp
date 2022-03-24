import React, { useState, useEffect } from "react";
import Test from "./Test";

import LandingPage from "./components/LandingPage";
import HomePage from "./components/HomePage/HomePage";
import CreateGiveaway from "./components/CreateGiveaway/CreateGiveaway";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

import Error from "./components/Error";

import ParticipatedGiveaways from "./components/ParticipatedGiveaways/ParticipatedGiveaways";
import YourGiveaways from "./components/YourGiveaways/YourGiveways";
import YourNfts from "./components/YourNfts/YourNfts";
import WonGiveaways from "./components/WonGiveaways/WonGiveaways";
import GiveawayDetails from "./components/GiveawayDetails/GiveawayDetails";
import Timer from "./components/Timer";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LandingPage />}></Route>
        <Route exact path="/home" element={<HomePage />}></Route>
        <Route
          exact
          path="/create-giveaway"
          element={<CreateGiveaway />}
        ></Route>
        <Route
          exact
          path="/participated-giveaways"
          element={<ParticipatedGiveaways />}
        ></Route>
        <Route exact path="/your-giveaways" element={<YourGiveaways />}></Route>
        <Route exact path="/your-nfts" element={<YourNfts />}></Route>
        <Route exact path="/won-giveaways" element={<WonGiveaways />}></Route>
        <Route exact path="/giveaway-details" element={<GiveawayDetails />}></Route>

        <Route path="*" element={<Error />}></Route>
      </Routes>
      {/* <Test/> */}
    </div>

  );
}

export default App;
