import React from "react";

export default class App16 extends React.Component {
  constructor(props) {
    super()
    this.state = {
      website: 'baidu'
    }
  }
  shouldComponentUpdate() {
    /* 
      shouldComponentUpdate()方法会返回一个布尔值，指定React是否继续渲染，默认true，即state每次发生变化，组件都会重新渲染
      shouldComponentUpdate() 返回值用于判断React组件的输出是否受当前state和props更改影响，当props或state发生变化，shouldComponentUpdate()会在渲染执行之前被调用
    */
    return false
  }
  changeWebSite = () => {
    this.setState({
      website: "google"
    })
  }

  render() {  // React提供的用于渲染和刷新组件的钩子函数，是class组件中唯一必须实现的方法
    return (
      <div>
        <h1>网站：{ this.state.website }</h1>
        <button onClick={ this.changeWebSite }>修改网站</button>
      </div>
    )
  }
}
