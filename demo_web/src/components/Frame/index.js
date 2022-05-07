import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import Topbar from "../Topbar/index";
import Footer from "../Footer/index";
const Frame = (props) => {
  useEffect(() => {}, []);
  return (
    <div>
      <Topbar></Topbar>
      <div>{props.children}</div>
      <Footer></Footer>
    </div>
  );
};
export default withRouter(Frame);
