/* 
  React组件生命周期
  组件的生命周期可分为三个状态
  Mouting（挂载）：已插入真实DOM
  Updating（更新）：正在被重新渲染
  Unmouting（卸载）：已移出真实DOM
*/
import React from "react";

export default class App12 extends React.Component {  // 继承React.Component这个内置构造函数的方法，包括私有状态和生命周期实现，class是ES6新特性
  constructor(props) {  // 在React组件挂在之前，会调用它的构造函数
    super()
    this.state = {
      clickCount: 0,
      website: 'baidu'
    }
  }
  handler = () => {
    this.setState({
      clickCount: this.state.clickCount + 1
    })
  }
  static getDerivedStateFromProps(props, state) { // 在调用render方法之前调用，并且在初始化挂载及后续更新时被调用
    /* 
      state.website值取决于props
      getDerivedStateFromProps只有一个目的：组件在props变化时更新state
      该方法必须返回一个对象用于更新state，如果返回null，则不更新任何内容
    */
    return {
      website: props.website
    }
  }

  changeSite = () => {
    this.setState({
      website: "google"
    })
  }

  render() {  // React提供的用于渲染和刷新组件的钩子函数，是class组件中唯一必须实现的方法
    return (
      <div>
        <h2>网站：{ this.state.website }</h2>
        {/* 使用getDerivedStateFromProps更新值，button不能修改 */}
        <button onClick={ this.changeSite }>修改网站名</button>
        <h2>点击次数：{ this.state.clickCount }</h2>
        <button onClick={ this.handler }>点击</button>
        <div id="div1"></div>
        <div id="div2"></div>
      </div>
    )
  }
}
