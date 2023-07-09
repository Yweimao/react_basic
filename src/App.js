import { GlobalStyle } from "./style";
import { IconStyle } from "./assets/iconfont/iconfont";
import routes from "./routes/index.js";
import { useRoutes } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  let element = useRoutes(routes);

  return (
    <Provider store={store}>
      <GlobalStyle></GlobalStyle>
      <IconStyle></IconStyle>
      {element}
    </Provider>
  );
}

export default App;
