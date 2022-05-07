import React, { Component } from 'react'

class Content extends React.Component {
  componentWillMount() {
    console.log('Component Will Mount');
  }
  componentDidMount() {
    console.log('Component Did Mount');
  }
  shouldComponentUpdate() {
    return true
  }
  componentDidUpdate() {
    console.log('Component Did Update');
  }
  componentWillUnmount() {
    console.log('Component Will Unmount');
  }
  render() {
    return (
      <div>{ this.props.myNum }</div>
    )
  }
}

export default class App19 extends Component {
  state = {
    data: 0
  }
  setNewNumber = () => {
    this.setState({
      data: this.state.data + 1
    })
  }
  render() {
    return (
      <div>
        <button onClick={ this.setNewNumber }>+1</button>
        <Content myNum={ this.state.data } />
      </div>
    )
  }
}
