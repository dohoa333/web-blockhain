import loadable from "react-loadable";
import Loading from "../components/Loading";
const importViw = (url) => {
  return loadable({
    loader: () => import(`${url}`),
    loading: Loading,
  });
};

const Home = importViw("./Home");
export default {
  Home,
};
