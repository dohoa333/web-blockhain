import React from 'react'

function ListItem(props) {
  return <li>{ props.value }</li>
}
/* function ListFun(props) {
  const arr = props.arr
  const lists = arr.map(item =>
    <ListItem key={ item.toString() } value={ item } />
  )
  return (
    <ul>{ lists }</ul>
  )
} */
// jsx中嵌入map()
function ListFun(props) {
  let arr = props.arr // 声明在外面，{}中不能使用let const var等关键字
  return (
    <ul> 
      {        
        arr.map(item =>
          <ListItem key={ item.toString() } value={ item } />
        )
      }
    </ul>
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
