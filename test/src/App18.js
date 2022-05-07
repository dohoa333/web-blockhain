import React from 'react'

export default class App18 extends React.Component {
  state = {
    opacity: 1.0
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      let opacity = this.state.opacity
      opacity -= .05
      if(opacity < 0.1) {
        opacity = 1.0
      }
      this.setState({
        opacity: opacity
      })
    }, 100)
  }
  render() {
    return (
      <div style={ { opacity: this.state.opacity } }>
        Hello { this.props.name }
      </div>
    )
  }
}
