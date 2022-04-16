import 'bootstrap/dist/css/bootstrap.css';
import logo from './GABE.png';
import music from './TTTTT.mp3';
import Sound from 'react-sound';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>TTTTT</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>CRAFTERS.</p>
      </header>
      <Sound url={music} playStatus={'PLAYING'}/>
    </div>
  );
}

export default App;
