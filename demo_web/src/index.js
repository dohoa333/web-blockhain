import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { UseWalletProvider } from "use-wallet";
import { AppConfig } from "./config";
ReactDOM.render(
    <UseWalletProvider chainId={1}>
    <App />
    </UseWalletProvider>
    , document.getElementById("root"));
