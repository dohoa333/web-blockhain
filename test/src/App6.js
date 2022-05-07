import React from "react";

export default class App6 extends React.Component {
  state = {
    isLoggedIn: false
  }
  handlerLogin = () => {
    this.setState({ 
      isLoggedIn: true
    })
  }
  handlerLogout = () => {
    this.setState({ 
      isLoggedIn: false 
    })
  }
  render() {
    function UserGreeting() {
      return <h1>欢迎回来</h1>
    }
    function GuestGreeting() {
      return <h1>请先注册</h1>
    }
    function LoginButton(props) {
      return (
        <button onClick={ props.onClick }>登录</button>
      )
    }
    function LogoutButton(props) {
      return (
        <button onClick={ props.onClick }>退出</button>
      )
    }
    function Greeting(props) {
      const isLoggedIn = props.isLoggedIn
      if(isLoggedIn) 
        return <UserGreeting />
      else
        return <GuestGreeting />
    }

    const isLoggedIn = this.state.isLoggedIn
    let button
    /* if(isLoggedIn) {
      button = <LogoutButton onClick={ this.handlerLogout } />
    } else {
      button = <LoginButton onClick={ this.handlerLogin } />
    } */
    // 三目运算
    button = isLoggedIn ? <LogoutButton onClick={ this.handlerLogout } /> : <LoginButton onClick={ this.handlerLogin } />

    return (
      <div>
        <Greeting isLoggedIn={ isLoggedIn } />
        { button }
      </div>
    )
  }
}
