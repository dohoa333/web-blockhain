import React from 'react'

export default function App11(props) {
  const titleList = (
    <ul>
      {props.posts.map(item =>
        <li key={ item.id }>{ item.title }</li>  
      )}
    </ul>
  )
  const contentList = props.posts.map(item => 
    <div key={ item.id } id={item.id} title={item.title}>
      <h3>{ item.title }</h3>
      <p>{ item.content }</p>
    </div>
  )
  return (
    <div>
      { titleList }
      <hr />
      { contentList }
    </div>
  )
}