import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App22 from './App22';
const root = ReactDOM.createRoot(document.getElementById('root'));

/* function Clock(props) {
  return(
    <div>
      <h1>hello world!</h1>
      <h2>现在是{ props.date.toLocaleTimeString() }.</h2>
    </div>
  )
} */
// state和props区别
// props不能改变
// state根据用户交互可改变
// 容器组件需要定义state来更新和修改数据
// 子组件通过props来传递数据
function FormattedDate(props) { 
  return <h2>现在是 { props.date.toLocaleTimeString() }.</h2>
}

class Clock extends React.Component {
  state = {
    date: new Date()
  }
  componentDidMount() { // 当组件输出到DOM后会执行componentDidMount()钩子函数，定时器挂载
    let that = this
    this.timerID = setInterval(function() {
      return that.tick(); // 内闭包this指向window，window没有tick()方法，定时器外部定义变量let that=this
    }, 1000)
    // this.timerID = setInterval(() => this.tick(), 1000) // 每秒执行一次tick()
  }
  componentWillUnmount() {  // Clock组件从DOM移除，定时器卸载
    clearInterval(this.timerID)
  }
  tick() {
    this.setState({ // 修改state当前时间
      date: new Date()
    })
  }

  render() {
    return (
      <div>
        <h1>hello world!</h1>
        {/* 类组件，this.props 替换 props */}
        {/* <h2>现在是{ this.props.date.toLocaleTimeString() }.</h2> */}
        
        <FormattedDate date={ this.state.date } />
      </div>
    )
  }
}

// 复合组件
/* let myStyle = { color: 'red', textAlign: 'center' }
class Name extends React.Component {
  render() {
    return <h1 style={myStyle}>网站名称：{ this.props.name }</h1>
  }
}
class Url extends React.Component {
  render() {
    return <h1 data-id="1">网站地址：{ this.props.url }</h1>
  }
}
class Nickname extends React.Component {
  render() {
    return <h1>网站昵称：{ this.props.nickname }</h1>
  }
}


function App(props) {  
  // const ele = <h1>Hello World</h1>
  // root.render(  // render渲染方法
  //   <Clock date={ new Date() } />
  // );
  return (
    <div>
      <Name name = { props.name } />
      <Url url = { props.url } />
      <Nickname nickname = { props.nickname } />
    </div>
  )
} */
const title = '李银河'
const msg = ['React', 'Vue', 'Angular']
const posts = [
  {id: 1, title: '标题一', content: '内容一'},
  {id: 2, title: '标题二', content: '内容二'},
]
root.render(
  // <App name={"以太坊"} url={"https://www.eth.cn"} nickname={"eth"} />
  // <div>
  //   <Clock />
  //   <Clock />
  //   <Clock />
  // </div>
  // <App3 title={title} />
  // <App13 website="bing" />
  // <App18 name="world" />
  // <App20 source="https://api.github.com/users/octocat/gists" />
  <App22 />
  // <App7 unreadMsg={ msg } />
  // <App11 posts={ posts } />
)
// setInterval(tick, 1000)

// 在有许多组件的应用程序中，销毁时释放组件所占用资源非常重要
// Clock组件第一次加载到DOM中时，生成定时器，称为挂载
// 每当Clock生成DOM被移除时，清除定时器，称为卸载
