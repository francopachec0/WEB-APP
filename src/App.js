import { BrowserRouter } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <SideBar />
    </BrowserRouter>
  );
}

export default App;
