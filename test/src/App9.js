import React from 'react'

// 封装为函数组件
function ListFun(props) {
  const arr = props.arr
  const lists = arr.map(item =>
    <li key={ item.toString() }>
      { item }
    </li>  
  )
  return (
    <ul>{ lists }</ul>
  )
}
export default class App9 extends React.Component {
  render() {
    const arr = ['三国', '水浒', '红楼', '西游']
    // 循环列表
    /* const lists = arr.map(item => 
      <li>{ item }</li>
    ) */
    return (
      <div>
        <ListFun arr={ arr } />
        {/* <ul>{ lists }</ul> */}
      </div>
    )
  }
}
