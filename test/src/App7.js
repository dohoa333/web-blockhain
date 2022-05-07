import React from "react";

export default function App7(props) {
  const unreadMsg = props.unreadMsg
  return (
    <div>
      <h1>Hello!</h1>
      { unreadMsg.length > 0  && ( 
        <h2>您有 { unreadMsg.length } 条未读信息</h2> 
      ) }
      
    </div>
  )
}