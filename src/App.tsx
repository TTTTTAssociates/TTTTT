import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import Sound from "react-sound";
import "./App.css";
import logo from "./media/PROPERLLERHEAD.png";
import music from "./media/TTTTT.mp3";

function App() {
  const [playStatus, setPlayStatus] = useState<
    "STOPPED" | "PLAYING" | "PAUSED"
  >("STOPPED");

  const playMusic = () => setPlayStatus("PLAYING");

  return (
    <div className="App" onClick={playMusic}>
      <header className="App-header">
        <h1>TTTTT</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>CRAFTERS.</p>
      </header>
      <Sound url={music} playStatus={playStatus} />
    </div>
  );
}

export default App;
