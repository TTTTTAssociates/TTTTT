import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Sound from "react-sound";
import { UnlickableButton } from "../buttons/UnlickableButton";
import logo from "../media/PROPERLLERHEAD.png";
import music from "../media/TTTTT.mp3";
import "./HomePage.css";
import Draggable from "react-draggable";

export const HomePage = () => {
    const [playStatus, setPlayStatus] = useState<
    "STOPPED" | "PLAYING" | "PAUSED"
  >("STOPPED");

  const playMusic = () => setPlayStatus("PLAYING");

    return <div className="HomePage" onClick={playMusic}>
    <Draggable>
      <h1>TTTTT</h1>      
    </Draggable>
    <Draggable>
      <div>
        <img src={logo} className="HomePage-logo" alt="logo" />
      </div>
    </Draggable>
    <Draggable>
      <p>CRAFTERS.</p>
    </Draggable>
    <UnlickableButton text={"Complaints? Click Here"} />
    <Draggable>
      <div className="Quote"/>     
    </Draggable>    
    <Sound url={music} playStatus={playStatus} loop={true}/>
  </div>
}