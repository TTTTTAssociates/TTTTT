import 'bootstrap/dist/css/bootstrap.css';
import logo from './GABE.png';
import music from './TTTTT.mp3';
import Sound from 'react-sound';
import './App.css';
import { useState } from 'react';

function App() {
  const [playStatus, setPlayStatus] = useState('STOPPED');

  const playMusic = () => setPlayStatus('PLAYING');

  return (
    <div className="App" onClick={playMusic} onMouseMove={playMusic}>
      <header className="App-header">
        <h1>TTTTT</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>CRAFTERS.</p>
      </header>
      <Sound url={music} playStatus={playStatus}/>
    </div>
  );
}

export default App;
