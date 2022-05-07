import React from "react";

export default class App15 extends React.Component {
  constructor(props) {
    super()
    this.state = {
      show: true
    }
  }
  delMsg = () => {
    this.setState({
      show: false
    })
  }

  render() {  // React提供的用于渲染和刷新组件的钩子函数，是class组件中唯一必须实现的方法
    let container
    if(this.state.show) {
      container = <Msg />
    }
    return (
      <div>
        { container }
        <button onClick={ this.delMsg }>删除container组件</button>
      </div>
    )
  }
}

class Msg extends React.Component {
  componentWillUnmount() {
    alert('container组件将被卸载')
  }
  render() {
    return (
      <h1>Hello World</h1>
    )
  }
}
