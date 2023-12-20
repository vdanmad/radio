import React from 'react';
import logo from './logo.svg';
import './App.css';
import { WavePlayer } from "nice-audio-player";
import track from './track';



function App() {
  return (
    <div className="App">
	<div className="radio">
      <WavePlayer
        track={props.track}
      />
    </div>
</div>
  );
}

export default App;
