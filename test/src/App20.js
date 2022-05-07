import React, { Component } from 'react'
import axios from 'axios'

export default class App20 extends Component {
  state = {
    uname: '',
    lastGistUrl: ''
  }
  async componentDidMount() {
    this.serverRequest = await axios.get(this.props.source)
    .then(result => {
      console.log(result);
      let lastGist = result.data[0]
      console.log(lastGist);
      this.setState({
        uname: lastGist.owner.login,
        lastGistUrl: lastGist.owner.html_url
      })
    })
    .catch(err => {
      console.log(err);
    })
  }
  render() {
    return (
      <div>
        { this.state.uname } 最新地址：
        <a href={ this.state.lastGistUrl }>{ this.state.lastGistUrl }</a>
      </div>
    )
  }
}
