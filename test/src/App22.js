import React from "react";
let Web3 = require('web3')

export default class App22 extends React.Component {
  render() {
    if (typeof Web3 !== 'undefined') {
      console.log(1);
      Web3 = new Web3(Web3.currentProvider);
    } else {
      console.log(2);
      // set the provider you want from Web3.providers
      Web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }

    return (
      <div>App22</div>
    )
  }
}
