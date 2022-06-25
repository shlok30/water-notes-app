import { Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/nav";
import Sidebar from "./components/sidebar";
import Homepage from "./pages/homepage";
import LoginPage from "./pages/login";
import ArchivePage from "./pages/archive";
import TrashPage from "./pages/trash";

function App() {
  return (
    <>
      <Nav />
      <div className="flex m5-top">
        <Sidebar />
        <Routes>
          <Route path = "/login" element = {<LoginPage />} />
          <Route path = "/homepage" element = {<Homepage />} />
          <Route path = "/archive" element = {<ArchivePage />} />
          <Route path = "/trash" element ={<TrashPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
