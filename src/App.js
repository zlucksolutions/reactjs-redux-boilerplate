import { useSelector } from "react-redux";
import { useRoutes } from "react-router-dom";
import getRoutes from "./routes";
import "./App.css";
import "./css/style.css";
import { checkAuth } from "./helpers/checkAuth";

function App() {
  const user = useSelector((state) => state.user.user);
  checkAuth();

  const routing = useRoutes(getRoutes(user));

  return <>{routing}</>;
}

export default App;
