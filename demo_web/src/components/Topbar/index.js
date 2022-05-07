import React, { useState, useEffect } from "react";
import menus from "../../router/config";
import logo from "../../assets/img/logo.png";
import { Modal, Drawer, message } from "antd";
import { useWallet } from "use-wallet";
import { CloseOutlined, UnorderedListOutlined } from "@ant-design/icons";
import "./topbar.less";
import { AppConfig } from "../../config";
import { globalParam, initContracts, address } from "../../chain/config";
import seyfertWhitepaper from "../../assets/seyfertWhitepaper.pdf";
import BigNumber from "bignumber.js";
const Topbar = (props) => {
  // 是否显示PLUBLIC SALE弹窗
  const [isModalPlublic, setIsModalPlublic] = useState(false);
  // 是否显示Coming soon弹窗
  const [isModalCS, setIsModalCS] = useState(false);
  // 进度
  const [schedule, setSchedule] = useState("0");
  // 是否连接了钱包
  const [isWallet, setIsWallet] = useState(false);
  // 钱包地址
  const [connectWallet, setConnectWallet] = useState("");
  const [isMove, setIsMove] = useState(false);
  const [visible, setVisible] = useState(false);
  let { status, connect, account: addressdz, balance } = useWallet();
  const [sftPrice, setSftPrice] = useState(0);
  const [hasToken, setHasToken] = useState(0);
  useEffect(() => {
    if (status === "connected") {
      AppConfig.addr = addressdz;
      globalParam.user = addressdz;
      setIsWallet(true);
      setConnectWallet(addressdz);
    }
    getWidth();
    getInfo();
  }, [status, addressdz]);
  useEffect(() => {
    connect("injected");
    try {
      window.ethereum
        .request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: AppConfig.chainIds }],
        })
        .then((result) => {
          //window.location.reload();
        });
    } catch (error) {
      console.error(error);
    }
  }, []);
  const getInfo = async () => {
    try {
      let sftNum = new BigNumber(1).times(1e18).toFixed(0);
      let calcTokenToUsdt = await initContracts("ido")
        .contract.methods.calcTokenToUsdt(sftNum)
        .call();
      setSftPrice(
        new BigNumber(calcTokenToUsdt)
          .div(new BigNumber(10).pow(address["sft"].decimal))
          .toFixed(1)
      );
      //进度量
      // let hasTokenCount = await initContracts("ido")
      //     .contract.methods.hasTokenCount()
      //     .call();
      // setHasToken(new BigNumber(hasTokenCount)
      //     .div(new BigNumber(10).pow(address['sft'].decimal)).toFixed(2))
      //console.log(hasTokenCount)
      let maxTokenCount = await initContracts("ido")
        .contract.methods.maxTokenCount()
        .call();
      let hasTokenCount = await initContracts("ido")
        .contract.methods.hasTokenCount()
        .call();
      let numB =
        new BigNumber(Number(hasTokenCount))
          .div(Number(maxTokenCount))
          .toFixed(4) * 100;
      setSchedule(numB);
    } catch (error) {
      console.error(error);
    }
  };
  const showModalPlublic = () => {
    setIsModalPlublic(true);
    setVisible(false);
  };
  const getWidth = () => {
    let width = window.document.body.clientWidth;
    if (width > 750) {
      setIsMove(false);
    } else {
      setIsMove(true);
    }
  };

  const handleCancelPlublic = () => {
    setIsModalPlublic(false);
  };
  const showModalCS = () => {
    setIsModalCS(true);
    setVisible(false);
  };

  const handleCancelCS = () => {
    setIsModalCS(false);
  };

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  // 内容用***代替
  const against = (t) => {
    if (!t) return "";
    return t.substring(0, 6) + "****" + t.substring(t.length - 4, t.length);
  };
  // 购买
  const purchase = async (num) => {
    let allowance = await initContracts("usdt")
      .contract.methods.allowance(addressdz, address["ido"])
      .call();
    console.log(allowance, addressdz, address["ido"]);
    if (Number(allowance) == 0 || Number(allowance) < Number(num)) {
      await initContracts("usdt")
        .contract.methods.approve(
          address["ido"],
          "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
        )
        .send({
          from: addressdz,
          gas: globalParam.gasM,
        });
      return message.success("Authorization succeeded");
    } else {
      let usdtNum = new BigNumber(num).times(1e18).toFixed(0);
      console.log(usdtNum);
      if (usdtNum <= 0) {
        return message.error("Effective quantity");
      }
      let balance = await initContracts("usdt")
        .contract.methods.balanceOf(addressdz)
        .call();
      if (Number(balance) < Number(usdtNum)) {
        return message.error("Insufficient balance");
      }
      let maxTokenCount = await initContracts("ido")
        .contract.methods.maxTokenCount()
        .call();
      let hasTokenCount = await initContracts("ido")
        .contract.methods.hasTokenCount()
        .call();
      if (Number(hasTokenCount) >= Number(maxTokenCount)) {
        return message.error("Project closed");
      }
      console.log(
        "项目情况",
        addressdz,
        usdtNum,
        balance,
        maxTokenCount,
        hasTokenCount
      );
      let _plyr = await initContracts("ido")
        .contract.methods._plyr(addressdz)
        .call();
      let maxCount = await initContracts("ido")
        .contract.methods.maxCount()
        .call();
      let calcTokenToUsdt = await initContracts("ido")
        .contract.methods.calcTokenToUsdt(maxCount)
        .call();
      if (Number(_plyr.amount) + Number(usdtNum) > Number(calcTokenToUsdt)) {
        return message.error(
          "Maximum purchase quantity exceeded,The maximum single person is 5000U"
        );
      }

      await initContracts("ido")
        .contract.methods.stake(usdtNum)
        .send({ from: globalParam.user, gas: globalParam.gasL });
      return message.success("Successful");
    }
  };
  // 连接Metamask
  const setConnect = async () => {
    // 连接操作
    await connect("injected");
  };
  return (
    <div className="topbar">
      <div className="topbar-con">
        <div className="topbar-left">
          <img className="logo" src={logo} alt="" />
          SEYFERT
        </div>
        {isMove ? (
          <div className="move_menu" onClick={showDrawer}>
            <UnorderedListOutlined />
          </div>
        ) : (
          <div className="topbar-right">
            <div className="topbar-item" onClick={showModalPlublic}>
              <span>PLUBLIC SALE</span>
            </div>
            <div className="topbar-item" onClick={showModalCS}>
              <span>GAMEFI</span>
            </div>
            <div className="topbar-item" onClick={showModalCS}>
              <span>GOVERMANCE</span>
            </div>
            <div className="topbar-item">
              <a href={seyfertWhitepaper} target="_blank">
                <span>DOC</span>
              </a>
            </div>
            <div className="topbar-item" onClick={showModalCS}>
              <span>Go to APP</span>
            </div>
            {isWallet ? (
              <div className="topbar-item topbar-item-wallet">
                <span>{against(connectWallet)}</span>
              </div>
            ) : (
              <div
                className="topbar-item topbar-item-wallet"
                onClick={setConnect}
              >
                <span onClick={setConnect}>Connect Wallet</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* PLUBLIC SALE弹窗 */}
      <Modal
        centered={true}
        closable={false}
        visible={isModalPlublic}
        onCancel={handleCancelPlublic}
        footer={null}
        className="plublic"
        width="6rem"
      >
        <div className="icon">
          <CloseOutlined onClick={handleCancelPlublic} />
        </div>
        <p className="textone">Token price: 1SFT={sftPrice}U</p>
        <p className="textone">Participation amout: 1,000,000 SFT</p>
        <div className="num">
          <div className="num_box" onClick={() => purchase(500)}>
            500
          </div>
          <div className="num_box" onClick={() => purchase(1000)}>
            1000
          </div>
          <div className="num_box" onClick={() => purchase(2000)}>
            2000
          </div>
          <div className="num_box" onClick={() => purchase(5000)}>
            5000
          </div>
        </div>
        <p className="texttwo">
          Activity progress
          <span style={{ display: schedule == 100 ? "block" : "none" }}>
            :（Completed）
          </span>
        </p>
        <div className="progress">
          <div
            className={
              schedule > 15 ? "progress_bar" : "progress_bar progress_bar_min"
            }
            style={{ width: schedule + "%" }}
          >
            <span>{schedule}%</span>
          </div>
        </div>
      </Modal>
      {/* Coming soon弹窗 */}
      <Modal
        centered={true}
        closable={false}
        visible={isModalCS}
        onCancel={handleCancelCS}
        footer={null}
        className="coming-soon"
        width="6rem"
      >
        <div className="icon">
          <CloseOutlined onClick={handleCancelCS} />
        </div>
        <p className="text">Coming soon!</p>
        <div className="btn" onClick={handleCancelCS}>
          I Know
        </div>
      </Modal>

      {/* 移动端菜单框 */}
      <Drawer
        placement="right"
        onClose={onClose}
        visible={visible}
        closable={false}
        width="50%"
        className="menu-box"
      >
        <div className="topbar-item" onClick={showModalPlublic}>
          <span>PLUBLIC SALE</span>
        </div>
        <div className="topbar-item" onClick={showModalCS}>
          <span>GAMEFI</span>
        </div>
        <div className="topbar-item" onClick={showModalCS}>
          <span>GOVERMANCE</span>
        </div>
        <div className="topbar-item">
          <a href={seyfertWhitepaper} target="_blank">
            <span>DOC</span>
          </a>
        </div>
        <div className="topbar-item" onClick={showModalCS}>
          <span>Go to APP</span>
        </div>
        {isWallet ? (
          <div className="topbar-item topbar-item-wallet">
            <span>{against(connectWallet)}</span>
          </div>
        ) : (
          <div className="topbar-item topbar-item-wallet" onClick={setConnect}>
            <span>Connect Wallet</span>
          </div>
        )}
      </Drawer>
    </div>
  );
};
export default Topbar;
