import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import "./css/HomePage.css"
import App from "./App";
import { MoralisProvider } from "react-moralis";

const serverUrl = "https://cnmzkmj0puwx.usemoralis.com:2053/server";
const appId = "jfYBAv1hRltfFcLJkMlDlsPf7p2Ls88pQ50JnFQw";

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider serverUrl={serverUrl} appId={appId}>
      <App />
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
