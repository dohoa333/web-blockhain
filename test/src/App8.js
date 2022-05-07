import React from "react";
import './index.css'
export default class App8 extends React.Component {
  state = {
    showWarning: true
  }
  handerToggle = () => {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }))
  }
  render() {
    function WarningBanner(props) {
      if(!props.warn)
        return null
      return (
        <div className="warning">警告</div>
      )
    }
    return (
      <div>
        <WarningBanner warn={ this.state.showWarning } />
        <button onClick={ this.handerToggle }>{ this.state.showWarning ? '隐藏' : '显式' }</button>
      </div>
    )
  }
}
