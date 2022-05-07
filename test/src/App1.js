import React from "react"
export default class App1 extends React.Component {
  render() {
    return (
      <div>hello { this.props.name }</div>
    )
  }
}

App1.defaultProps = { // 组件类的defaultProps属性为props设置默认值
  name: '李银河'
}