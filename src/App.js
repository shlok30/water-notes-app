import { Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/nav";
import Homepage from "./pages/homepage";
import LoginPage from "./pages/login";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path = "/login" element = {<LoginPage />} />
        <Route path = "/homepage" element = {<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
