import { GlobalStyle } from "./style";
import { IconStyle } from "./assets/iconfont/iconfont";
import routes from "./routes/index.js";
import { useRoutes } from "react-router-dom";

function App() {
  let element = useRoutes(routes);

  return (
    <div>
      <GlobalStyle></GlobalStyle>
      <IconStyle></IconStyle>
      {element}
    </div>
  );
}

export default App;
