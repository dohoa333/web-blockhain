import React from "react"
import { checkPropTypes } from "prop-types" // 引入验证库
export default class MyTitle extends React.Component {
  state = {
    isToggleOn: true,
    id: 456
  }
  handler(e) {
    e.preventDefault();
    console.log('链接被点击');
  }
  // 箭头函数传参
  handler2 = (e, id) => {
    console.log(e);
    console.log(id);
    // console.log(this);
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }
  // bind()方式传参，事件e放在最后
  handler3(id, e) {
    console.log(id);
    e.preventDefault();
    console.log('链接被点击');
  }
  render() {
    return (
      <div>
        {/* <h1>Hello, { this.props.title }</h1> */}
        <a href="#" onClick={ this.handler }>链接</a>
        <br/>

        {/* 箭头函数形式传递，e作为第二个参数 ，事件对象必须显式传递 */}
        <button onClick={ (e) => this.handler2(e, 123) }>
          { this.state.isToggleOn ? 'ON': 'OFF' }
        </button>
        <br/>

        {/* bind方式，事件对象以及更多参数将会隐式传递 */}
        <a href="#" onClick={ this.handler3.bind(this, this.state.id) }>bind()方式传参</a>
      </div>
    )
  }
}
MyTitle.checkPropTypes = {  // checkPropTypes props验证
  title: checkPropTypes.string
}