import React from 'react';
import './index.scss';

import Confetti from 'react-dom-confetti';
export default class LuckDraw extends React.Component {
  state = {
    isShow: false,  // 弹窗显示
    isDisabled: false, // 按钮点击disabled
    isActive: false,  // 碎片动画
  }

  luckDraw = () => {
    this.result = Math.floor(Math.random()*(8-1+1)+1);	// 随机1~8的整数
    // this.result = 2;	// 先定义一个默认抽中的奖品序号为 2
    this.isAnimation = true;	// 动画循环的开关

    //动画参数
    this.degree = 0;	// 初始角度 默认为0
    this.time = Date.now(); 	// 初始启动动画时间，记录下来
    this.a = 0.5; 	// 加速度
    this.d = -0.5; 	// 减速度
    this.v = 0; 	// 初始速度

    //动画循环
    let frame = () => {
    // 判断 isAnimation 为 false 的时候，停止动画
      if (!this.isAnimation) {
        return;
      }
      // window.requestAnimationFrame这个API是浏览器提供的js全局方法，针对动画效果，感兴趣的同学可以自行搜索学习
      window.requestAnimationFrame(frame);
      this.update();	// 转盘执行帧逻辑的函数（转盘转动的逻辑函数）
    };
    frame();	// 执行动画
  }

  // 帧逻辑 动画的最终目标是转了多圈之后定位到this.degree的角度
  update() { 
    let now = Date.now(); // 转盘开始转动的时间
    let continueTime = now - this.time;
    let a = continueTime < 1000 ? this.a : this.d;  // 判断是加速度还是减速度
    // 到达临界值转盘旋转的速度：旋转时的速度（this.v）小于的值 越大速度越快，时间越短
    if (this.v <= 10 && a < 0) { 
      /**
       * 到达临界值转盘旋转的角度
       * 旋转时的速度（this.v）越大达到临界值时调整角度的速度就越大，
       * 数越小调整角度的速度小 （大于200后体现的不明显）
       */
      this.v = 50;

      let nowDeg = this.degree % 360; // 到达临界值，实际停止角度
      // console.log(123, this.degree, nowDeg);
      // 实际的停止角度 大于 定义的停止角度
      if (nowDeg > this.result * 45) {
        // 定义的总度数 = (实际总度数/360°)向上取整后*360° + 抽中的奖品序号*45°
        this.finalDeg = Math.ceil(this.degree / 360) * 360 + this.result * 45;
        // console.log("临界值1", this.a, this.v, this.finalDeg);
      } else {
        // 定义总旋转度数 = (实际总度数/360°)向下取整后*360° + 抽中的奖品序号*45°
        this.finalDeg = Math.floor(this.degree / 360) * 360 + this.result * 45;
        // console.log("临界值2", this.v, this.finalDeg);
      }
    } else {
      // 未到达临界值，速度每次都加上加速度的值，让速度从开始加速到减速再到停止
      this.v += a;
    }
    // 总的角度 = 转盘的速度 * 1 （这里的1是一帧）
    this.degree += this.v;
    // console.log('度数', this.v, this.degree)
    // 实际总角度大于定义总角度 且 定义总角度不为零
    if (this.degree >= this.finalDeg && this.finalDeg !== 0) {
      // console.log('this.degree, this.finalDeg', this.degree, this.finalDeg);
      // 把定义的总角度赋值给实际总角度
      this.degree = this.finalDeg;
      // 转盘停止后，停止抽奖动画
      this.isAnimation = false;
      // 转盘停止后的提示，传奖品序号
      // console.log('奖品序号：'+this.result);
      this.showDiv();
    }
    // 抽奖转盘旋转的角度 （样式）
    this.setState({ rotate: this._rotateStyle(this.degree) });
  }
  // 转盘旋转的角度 （样式）
  _rotateStyle(deg) {
    return { WebkitTransform: `rotate3d(0,0,1,${deg}deg)` };
  }
  // 弹窗
  showDiv = () => {
    this.setState({
      isShow: true,
      isDisabled: true,
      isActive: true
    })
  }
  // 弹窗关闭
  closeDiv = () => {
    this.setState({
      isShow: false,
      isDisabled: false,
      isActive: false
    })
  }
  
  
  render() {
    const { rotate } = this.state;

    const config = {
      angle: 90,
      spread: 360,
      startVelocity: 40,
      elementCount: 70,
      dragFriction: 0.12,
      duration: 3000,
      stagger: 3,
      width: "10px",
      height: "10px",
      perspective: "500px",
      colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
    };

    return (
      <div className="luckDraw">
        <div className="box">
          {/* 底座 */}
          <div className="base">  
            {/* 转盘 */}
             <div className="turntable" style={rotate}></div>
            {/* 指针 */}
            <div className="btn">
              <button onClick={this.luckDraw} disabled={this.state.isDisabled}></button>
            </div>
          </div>
        </div>
        {/* 弹窗 */}
        <div className={`mask ${this.state.isShow ? 'show' : 'hide'}`}>
          {/* 碎片动画 */}
          <Confetti active={ this.state.isActive } config={ config }/>
          {/* 红包界面 */}
          <div className={`opened ${this.state.isShow ? 'show' : 'hide'}`}>
            <header>
              <em>￥</em>  
            </header>
            <main>
              <h3>获得奖品：{this.result}</h3>
              <h5 onClick={this.closeDiv}>领取</h5>
            </main>
          </div>
        </div>
      </div>
    )
  }
}
