# React

## create-react-app

```bash
npm install create-react-app -g
npx create-react-app my-app
```



## 组件生命周期

组件生命周期分成三个状态

- Mouting（挂载）：已插入真实DOM
- Updating（更新）：正被重新渲染
- Unmouting（卸载）：已移出真实DOM

![preview](https://segmentfault.com/img/bVcZbV5/view)

### 挂载

组件实例被创建并插入DOM中时

- `constructor()`：在React组件挂载之前，会调用它的构造函数
- `getDerivedStateFromProps()`：从Props中获得state，从更新后的props中获取state，让组件在props发生变化时更新它自身的内部state
- `render()`：是class组件唯一必须实现的方法
- `componentDidMount()`：在组件挂载后（插入DOM树中）立即调用

```react
import React from "react";
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));

export default class App12 extends React.Component {  // 继承React.Component这个内置构造函数的方法，包括私有状态和生命周期实现，class是ES6新特性
  constructor(props) {  // 在React组件挂在之前，会调用它的构造函数
    super()
    this.state = {
      clickCount: 0,
      website: 'baidu'
    }
  }
  handler = () => {
    this.setState({
      clickCount: this.state.clickCount + 1
    })
  }
  static getDerivedStateFromProps(props, state) { // 在调用render方法之前调用，并且在初始化挂载及后续更新时被调用
    return {
      /* 
      state.website值取决于props
      getDerivedStateFromProps只有一个目的：组件在props变化时更新state
      该方法必须返回一个对象用于更新state，如果返回null，则不更新任何内容
    */
      website: props.website
    }
  }
	changeSite = () => {
    this.setState({
      website: "bing"
    })
  }
  render() {  // React提供的用于渲染和刷新组件的钩子函数，是class组件中唯一必须实现的方法
    return (
      <div>
        <h2>网站：{ this.state.website }</h2>
        {/* 使用getDerivedStateFromProps更新值，button不能修改 */}
        <button onClick={ this.changeSite }>修改网站名</button>
        <h2>点击次数：{ this.state.clickCount }</h2>
        <button onClick={ this.handler }>点击</button>
      </div>
    )
  }
  componentDidMount() { // 在组件挂载后（插入DOM树中）立即调用
    console.log('componentDidMount');
  }
}
root.render(<App13 website="Google" />)

```

### 更新

当组件state或props发生变化时，组件就会更新

- `getDerviedStateFromProps()`
- `shouldComponentUpdate()`：当props或state发生变化时，shouldComponentUpdate()会在渲染执行之前被调用
- `render()`
- `getSnapshotBeforeUpdate()`：在最近一次渲染输出（提交到DOM节点）之前调用，可以访问更新前的props和state，必须和componentDidMount()一起使用
- `componentDidMount()`：在更新后被立即调用

```react
import React from "react";
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));

export default class App13 extends React.Component {
  constructor(props) {
    super()
    this.state = {
      clickCount: 0,
      website: 'baidu'
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        website: "Google"
      })
    }, 1000)
  }
  getSnapshotBeforeUpdate(props, state) {
    return document.getElementById('div1').innerHTML = "网站（更新前）：" + state.website
  }
  componentDidUpdate(props, state) {
    document.getElementById('div2').innerHTML = "网站（更新后）：" + this.state.website
  }

  render() {  // React提供的用于渲染和刷新组件的钩子函数，是class组件中唯一必须实现的方法
    return (
      <div>
        <h2>网站：{ this.state.website }</h2>
        <div id="div1"></div>
        <div id="div2"></div>
      </div>
    )
  }
}
root.render(<App13 website="Google" />)

```

```react
import React from "react";
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
export default class App14 extends React.Component {
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
root.render(<App14 website="Google" />)

```



### 卸载

- `componentWillUnmount()`：在组件卸载及销毁之前直接调用，该方法不应该调用setState()，该组件将永远不会重新渲染。组件销毁之后，将不会再挂载

```react
import React from "react";
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));

export default class App15 extends React.Component {
  constructor(props) {
    super()
    this.state = {
      show: true
    }
  }
  delMsg = () => {
    this.setState({
      show: false
    })
  }

  render() {  // React提供的用于渲染和刷新组件的钩子函数，是class组件中唯一必须实现的方法
    let container
    if(this.state.show) {
      container = <Msg />
    }
    return (
      <div>
        { container }
        <button onClick={ this.delMsg }>删除container组件</button>
      </div>
    )
  }
}

class Msg extends React.Component {
  componentWillUnmount() {
    alert('container组件将被卸载')
  }
  render() {
    return (
      <h1>Hello World</h1>
    )
  }
}
root.render(<App15 website="Google" />)

```



## React axios

```react
import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById('root'))
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
root.render(<App20 source="https://api.github.com/users/octocat/gists" />)

```



## React表单与事件

```react
import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById('root'))
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
root.render(<App21 />)

```

