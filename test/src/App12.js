/* 
  setState
  1. 不能在组件内部通过this.state修改状态，该状态会在调研setState()后被替换
  2. setState()并不会立即改变this.state，而是创建一个即将处理的state。setState()并不一定时同步的，为了提升性能React会批量执行state和DOM渲染
  3. setState()总是会出发一次组件重绘，除非在shouldComponentUpdate()中实现一些条件渲染逻辑
*/

import React from "react";

export default class App12 extends React.Component {  // 继承React.Component这个内置构造函数的方法，包括私有状态和生命周期实现，class是ES6新特性
  // props访问外部输入属性
  // state访问内部私有状态
  constructor(props) {
    super() // ES6中，construction函数通过super访问其父类的构造函数
    this.state = {
      clickCount: 0  
    }
  }
  /* state = {
    clickCount: 0
  } */
  handler1 = () => {
    this.setState({
      clickCount: this.state.clickCount + 1
    })
  }
  handler2(num) {
    this.setState({
      clickCount: this.state.clickCount + num
    })
  }
  render() {  // React提供的用于渲染和刷新组件的钩子函数
    return (
      <div>
        <h2>点击次数：{ this.state.clickCount }</h2>
        <button onClick={ this.handler1 }>+1</button>
        <button onClick={ this.handler2.bind(this, 2) }>+N</button>
      </div>
    )
  }
}
