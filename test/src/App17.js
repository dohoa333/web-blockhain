import React from "react";

export default class App17 extends React.Component {
  constructor(props) {
    super()
    this.state = {
      date: new Date()
    }
  }
  componentDidMount() { // 在组件挂载后（插入DOM树中）立即调用
    this.timerID = setInterval(() => {
      this.tick()      
    }, 1000);
  }
  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {  // React提供的用于渲染和刷新组件的钩子函数，是class组件中唯一必须实现的方法
    return (
      <div>
        <h2>现在时间：{ this.state.date.toLocaleTimeString() }.</h2>
      </div>
    )
  }
}
