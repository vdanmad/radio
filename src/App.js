import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactPlayer from 'react-player';

function App() {
  return (
    <div className="App">
	<div className="radio">
      <ReactPlayer url="http://xplayer.neohub.pt:1905/stream/swyh.mp3" />
    </div>
</div>
  );
}

export default App;
