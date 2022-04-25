import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Sound from "react-sound";
import { UnlickableButton } from "../buttons/UnlickableButton";
import logo from "../media/PROPERLLERHEAD.png";
import music from "../media/TTTTT.mp3";
import "./HomePage.css";

export const HomePage = () => {
    const [playStatus, setPlayStatus] = useState<
    "STOPPED" | "PLAYING" | "PAUSED"
  >("STOPPED");

  const playMusic = () => setPlayStatus("PLAYING");

    return <div className="HomePage" onClick={playMusic}>
    <h1>TTTTT</h1>
    <img src={logo} className="HomePage-logo" alt="logo" />
    <p>CRAFTERS.</p>
    <UnlickableButton text={"Complaints? Click Here"} />
    <Sound url={music} playStatus={playStatus} loop={true}/>
  </div>
}