import React from 'react'

// 父组件设置state，子组件通过props获取父组件传递过来的值
export default class App2 extends React.Component {
  state = {
    name: '以太坊',
    site: 'https://www.eth.com'
  }

  render() {
    return (
      <div>
        <Name name={ this.state.name } />
        <Link site={ this.state.site } />
      </div>
    )
  }
}

class Name extends React.Component {
  render() {
    return (
      <h1>{ this.props.name }</h1>
    )
  }
}

class Link extends React.Component {
  render() {
    return (
      <h1>{ this.props.site }</h1>
    )
  }
}