import React, { Component } from 'react'
class Content extends Component {
  render() {
    return (
      <div>
        <input type="text" value={ this.props.myDataProp } onChange={ this.props.updateStateProp } />
        <h4>{ this.props.myDataProp }</h4>
      </div>
    )
  }
}
export default class App21 extends Component {
  state = {
    value: 'Hello World'
  }
  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }
  render() {
    let value = this.state.value
    return (
      <div>
        <Content myDataProp={ value } updateStateProp={ this.handleChange } />
      </div>
    )
  }
}
