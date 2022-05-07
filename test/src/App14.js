import React from "react";

export default class App14 extends React.Component {
  constructor(props) {
    super()
    this.state = {
      clickCount: 0,
      website: 'baidu'
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        website: "Google"
      })
    }, 1000)
  }
  getSnapshotBeforeUpdate(props, state) {
    return document.getElementById('div1').innerHTML = "网站（更新前）：" + state.website
  }
  componentDidUpdate(props, state) {
    document.getElementById('div2').innerHTML = "网站（更新后）：" + this.state.website
  }

  render() {  // React提供的用于渲染和刷新组件的钩子函数，是class组件中唯一必须实现的方法
    return (
      <div>
        <h2>网站：{ this.state.website }</h2>
        <div id="div1"></div>
        <div id="div2"></div>
      </div>
    )
  }
}
