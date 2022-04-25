import "bootstrap/dist/css/bootstrap.css";
import { Route } from "react-router";
import { HomePage } from "./home/HomePage";
import { BrowserRouter, Routes } from "react-router-dom";
import { NavigationBar } from "./navigation/NavigationBar";
import { MissionStatement } from "./mission/MissionStatement";

export const App = () => {
  return (
    <div>
    <NavigationBar/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/mission" element={<MissionStatement />}/>
      </Routes>
    </BrowserRouter>
  </div>
  );
}