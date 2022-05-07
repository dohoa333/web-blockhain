import React from "react"

export default class App5 extends React.Component {
  render() {
    function UserGreeting(params) {
      return <h1>欢迎回来</h1>
    }
    function GuestGreeting(params) {
      return <h1>请先注册</h1>
    }
    function Greeting(props) {
      const isLoggedIn = props.isLoggedIn
      if(isLoggedIn) 
        return <UserGreeting />
      else
        return <GuestGreeting />
    }

    return (
      <Greeting isLoggedIn={ false } />
    )
  }
}
