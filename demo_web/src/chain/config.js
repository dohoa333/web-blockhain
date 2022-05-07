import token_abi from "./json/token.json";
import pool_abi from "./json/pool.json";
import Web3 from "web3";

export let globalParam = {
  user: "",
  showDecimal: 4,
  gasM: 210000,
  gasL: 300000,
};

let usdtAddr = "0x55d398326f99059ff775485246999027b3197955"; //usdt合约地址
let idoAddr = "0x1F373ABA28EF46ca3d48C1F88692dDD84d7D74F9"; //ido合约地址
let sftAddr = "0x189ed53638dF1a0B7361E932996C249e57e0CB30"; //sft合约地址
export const TempAddress = {
  usdt: usdtAddr,
  sft: sftAddr,
  ido: idoAddr,
};
export const address = {
  sft: {
    address: TempAddress.sft,
    decimal: 18,
  },
  usdt: {
    address: TempAddress.usdt,
    decimal: 18,
  },
  //////pool
  ido: TempAddress.ido,
};

export const initContracts = (coin) => {
  let contract;
  let web3 = new Web3(window.ethereum);
  if (coin.slice(-3) === "ido") {
    contract = new web3.eth.Contract(pool_abi, address[coin]);
  } else {
    contract = new web3.eth.Contract(token_abi, address[coin].address);
  }
  return {
    web3,
    contract,
  };
};
