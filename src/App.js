import "./App.scss";
import Router from "./Router/Router";
import { useSelector } from "react-redux";
import Login from "./pages/Login/Login";

function App() {
  const { token } = useSelector((store) => store.user);
  return (
    <div className="App">
      <Router />
      {/* {localStorage.getItem("token") ? <Router /> : <Login />} */}
    </div>
  );
}

export default App;
