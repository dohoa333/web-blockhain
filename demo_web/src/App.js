import "./App.less";
import Router from "./router";
import Frame from "./components/Frame/index";
import {
  BrowserRouter,
  HashRouter,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./i18n/index";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Frame>
          <Router />
        </Frame>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
