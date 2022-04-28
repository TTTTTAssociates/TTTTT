import "bootstrap/dist/css/bootstrap.css";
import { Route } from "react-router";
import { HomePage } from "./home/HomePage";
import { HashRouter, Routes } from "react-router-dom";
import { NavigationBar } from "./navigation/NavigationBar";
import { MissionStatement } from "./mission/MissionStatement";

export const App = () => {
  return (
    <div>
    <NavigationBar/>
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/mission" element={<MissionStatement />}/>
      </Routes>
    </HashRouter>
  </div>
  );
}