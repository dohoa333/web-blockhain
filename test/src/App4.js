import React from "react"
export default function App4() {
  function handler(e) {
    e.preventDefault();
    console.log('链接被点击了');
  }
  return (
    <a href="#" onClick={ handler }>点击</a>
  )
}
