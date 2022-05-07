const element2 = React.createElement(
  'h1',
  {className: 'active'},
  'Hello world!' // babel会将JSX转换为对react.createElement()的调用
)
ReactDOM.render(
  element2,
  document.getElementById('root2')
)