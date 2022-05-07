import React, { useState, useEffect } from "react";

import wave from "../../assets/home/title_img_wave.png";
import derivatives from "../../assets/home/ecological_ico_derivatives.png";
import insurance from "../../assets/home/ecological_ico_insurance.png";
import markets from "../../assets/home/ecological_ico_markets.png";
import nft from "../../assets/home/ecological_ico_nft.png";
import products from "../../assets/home/ecological_ico_products.png";
import store from "../../assets/home/ecological_ico_store.png";

import altonomy from "../../assets/home/backers_img_altonomy.png";
import au21capital from "../../assets/home/backers_img_au21capital.png";
import binance from "../../assets/home/backers_img_binance.png";
import block from "../../assets/home/backers_img_block.png";
import cointelegraph from "../../assets/home/backers_img_cointelegraph.png";
import dfg from "../../assets/home/backers_img_dfg.png";
import digitalstrategies from "../../assets/home/backers_img_digitalstrategies.png";
import fenbushi from "../../assets/home/backers_img_fenbushi.png";
import gumicryptos from "../../assets/home/backers_img_gumicryptos.png";
import hashkey from "../../assets/home/backers_img_hashkey.png";
import huobi from "../../assets/home/backers_img_huobi.png";
import hypersphere from "../../assets/home/backers_img_hypersphere.png";
import iosgventres from "../../assets/home/backers_img_iosgventres.png";
import KR1 from "../../assets/home/backers_img_KR1.png";
import okex from "../../assets/home/backers_img_okex.png";
import onghash from "../../assets/home/backers_img_onghash.png";
import paka from "../../assets/home/backers_img_paka.png";
import snz from "../../assets/home/backers_img_snz.png";
import sub0capital from "../../assets/home/backers_img_sub0capital.png";
import trgcapital from "../../assets/home/backers_img_trgcapital.png";

import web3img from "../../assets/home/supporters_img_web3.png";
import wmicrosoft from "../../assets/home/supporters_img_wmicrosoft.png";
import wsubstrate from "../../assets/home/supporters_img_wsubstrate.png";
import wxcelerator from "../../assets/home/supporters_img_wxcelerator.png";

import "./home.less";

const imgs = [
  binance,
  hypersphere,
  fenbushi,
  hashkey,
  huobi,
  dfg,
  KR1,
  okex,
  onghash,
  gumicryptos,
  sub0capital,
  digitalstrategies,
  altonomy,
  au21capital,
  trgcapital,
  paka,
  snz,
  iosgventres,
  cointelegraph,
  block,
];

const supimgs = [wmicrosoft, wsubstrate, web3img, wxcelerator];
const Home = (props) => {
  useEffect(() => {}, []);
  return (
    <div className="home">
      {/* 欢迎部分 */}
      <div className="network">
        <div className="network_con">
          <p className="textone">WELCOME TO</p>
          <h1 className="title">SEYFERT NETWORK</h1>
          <p className="texttwo">
            SEYFERT NETWORK is created to cause the supernova explosion of
            blockchain. Various SEYFERT ecosystems such as DAO, predictor,
            cross-chain architecture, and algorithm stabilizer are used to
            incubates the next generation of blockchain networks and achieve the
            final DeFi2.0 ecosystem.
          </p>
        </div>
      </div>

      {/* ABOUT部分 */}
      <div className="about">
        <div className="about_con">
          <div className="wave">
            <img src={wave} alt="" />
          </div>
          <h1 className="title">ABOUT</h1>
          <p className="a_textone">What is SEYFERT NETWORK</p>
          <p className="a_texttwo">
            SEYFERT NETWORK is a scalable DAO-governed DeFi 2.0 ecosystem that
            provides decentralized data and computing predictor services at
            Layer 2 for mainstream blockchains. It connects on-chain smart
            contracts with off-chain Internet data, and provides blockchain with
            unlimited verifiable cross-chain capabilities, enabling more
            blockchain segments and revolutionizing the entire industry.
            Blockchain provides a more convenient, transparent and fair way to
            account for a certain &quot;intrinsic value&quot;, and tokens on
            blockchain allow a wider range of &quot;intrinsic value&quot; to be
            represented.
          </p>
        </div>
      </div>

      {/* 图 */}
      <div className="tu">
        <div className="tu_con"></div>
      </div>

      {/* TOKEN部分 */}
      <div className="token">
        <div className="token_con">
          <div className="wave">
            <img src={wave} alt="" />
          </div>
          <h1 className="title">TOKEN</h1>
          <div className="token_box">
            <div className="box_top">
              <div className="box_left">
                <h2 className="box_h2title">SEYFERT DUST—SFT</h2>
                <p className="box_text">
                  SFT is the SEYFERT NETWORK architecture link and SEYFERT
                  NETWORK cross-chain architecture native token. SEYFERT NETWORK
                  adopts a new charging system for the operation and maintenance
                  of cross-chain nodes. For the consideration of the prophet
                  node operators&#39; own capacity and economic interests,
                  SEYFERT DAO organization decides to use SFT as the cross-chain
                  handling fee original token.
                </p>
                <span className="vertical"></span>
              </div>
              <div className="box_right">
                <h2 className="box_h2title">SEYFERT RING—RST</h2>
                <p className="box_text">
                  The RST acts as a stable fluid in the SEYFERT network as a
                  star ring. RST is a decentralized algorithm stablecoin in
                  SEYFERT NETWORK. The RST is issued by a decentralized smart
                  contract in SEYFERT NETWORK, and anyone can issue an RST by
                  mortgaged TRX.
                </p>
                <span className="vertical"></span>
              </div>
            </div>
            <div className="box_bom">
              <div className="box_left">
                <h2 className="box_h2title">SEYFERT NUCLEUS—SST</h2>
                <p className="box_text">
                  SST is the core of SEYFERT governance. For the good governance
                  of SEYFERT and the overall project, SEYFERT will be fully
                  governed by DAO. Governance will be fully decentralized and
                  open, meaning that all equity holders will be able to
                  participate directly in the governance of the project. This
                  will be done with SST tokens.
                </p>
                <span className="vertical"></span>
              </div>
              <div className="box_right">
                <h2 className="box_h2title">SEYFERT PLANET—SWT</h2>
                <p className="box_text">
                  SWT is the only information channel in the SEYFERT network.
                  SEYFERT uses the API model of the Predictor, in which users,
                  organizations, and decentralized applications participate in
                  requests, the API responds as soon as possible, and SWT is the
                  only payment token in the request service delivery process.
                </p>
                <span className="vertical"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SEYFERT部分 */}
      <div className="seyfert">
        <div className="seyfert_con">
          <div className="seyfert_left">
            <div className="seyfert_box">
              <div className="box_item">
                <img src={nft} alt="" />
              </div>
              <p className="box_p_left">SEYFERT art - NFT</p>
            </div>
            <div className="seyfert_box">
              <div className="box_item">
                <img src={store} alt="" />
              </div>
              <p className="box_p_left">SyNode Prophecies store</p>
            </div>
            <div className="seyfert_box">
              <div className="box_item">
                <img src={insurance} alt="" />
              </div>
              <p className="box_p_left">SEYFERT insurance</p>
            </div>
          </div>
          <div className="seyfert_content">
            <div className="wave">
              <img src={wave} alt="" />
            </div>
            <h1>SEYFERT</h1>
            <h2>ECOLOGICAL</h2>
          </div>
          <div className="seyfert_right">
            <div className="seyfert_box">
              <div className="box_item">
                <img src={derivatives} alt="" />
              </div>
              <p className="box_p_right">Decentralized financial derivatives</p>
            </div>
            <div className="seyfert_box">
              <div className="box_item">
                <img src={products} alt="" />
              </div>
              <p className="box_p_right">Decentralized lending products</p>
            </div>
            <div className="seyfert_box">
              <div className="box_item">
                <img src={markets} alt="" />
              </div>
              <p className="box_p_right">Decentralized computing markets</p>
            </div>
          </div>
        </div>
      </div>

      {/* BACKERS部分 */}
      <div className="backers">
        <div className="backers_con">
          <div className="wave">
            <img src={wave} alt="" />
          </div>
          <h1 className="title">Whitelisted institutions</h1>
          <div className="backers_box">
            {imgs.map((item, i) => {
              return (
                <div className="backers_img" key={i}>
                  <img src={item} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/*  SUPPORTERS部分 */}
      <div className="supporters">
        <div className="supporters_con">
          <div className="wave">
            <img src={wave} alt="" />
          </div>
          <h1 className="title">SUPPORTERS</h1>
          <div className="supporters_box">
            {supimgs.map((item, i) => {
              return (
                <div className="supporters_img" key={i}>
                  <img src={item} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
