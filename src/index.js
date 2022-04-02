import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import "./css/HomePage.css";
import App from "./App";
import { MoralisProvider } from "react-moralis";
import { BrowserRouter } from "react-router-dom";

const serverUrl = "https://vyoiaqjuyaxb.usemoralis.com:2053/server";
const appId = "Cokd9mczsnd1q3YAZsy2zI0IKLlnVIxKWf1Hfdt8";

ReactDOM.render(
  <BrowserRouter>
    <MoralisProvider serverUrl={serverUrl} appId={appId}>
      <App />
    </MoralisProvider>
  </BrowserRouter>,

  document.getElementById("root")
);
