import React, { useState, useEffect } from "react";

import discord from "../../assets/img/foot_ico_discord.png";
import telegram from "../../assets/img/foot_ico_telegram.png";
import twitter from "../../assets/img/foot_ico_twitter.png";

import "./footer.less";

const Topbar = (props) => {
  useEffect(() => {}, []);
  return (
    <div className="footer">
      <div className="footer_con">
        <div className="footer_left">&#169; All rights reserved, 2021</div>
        <div className="footer_right">
          <a href="http://twitter.com/sey_fert" target="_blank">
            <img src={twitter} alt="" />
          </a>
          <a href="https://t.me/seyfertcommunity" target="_blank">
            <img src={telegram} alt="" />
          </a>
          <a href="#" target="_blank">
            <img src={discord} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Topbar;
