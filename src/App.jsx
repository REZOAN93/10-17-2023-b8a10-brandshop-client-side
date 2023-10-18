import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Components/Shared/Header/Header";

function App() {
  return (
    <div className=" font-basicFont">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
