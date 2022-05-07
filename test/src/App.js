import logo from './logo.svg'
function App() {
  const element1 = <div tabIndex="0">jsx中声明属性</div>
  return (
    <div>
      {element1}
      <img src={logo} />
    </div>
  );
}

export default App;
