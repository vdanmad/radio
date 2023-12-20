import React, { Component } from 'react'
import AudioPlayer from 'react-playlist-player'

import { Button } from './Styles';

class Player extends Component {
  state = {
    currentPlayList: {}
  }
 
  loadPlayList = () =>
    this.setState({
      currentPlayList: {
        playlistCoverUrl: 'https://i.imgur.com/fKPE2gP.png',
        playlistName: 'NEOHUB',  
        bandName: 'Welcome to the matrix',
        songs: [
          {
            position: '1',
            songName: 'Neo's Radio',
            songUrl: 'http://xplayer.neohub.pt:1905/stream/swyh.mp3'
          }
        ],
        type: 'album'
      }
    })
 
  render() {
    return (
      <div>
        <Button onClick={this.loadPlayList}>
          PLAY
        </Button>
        <AudioPlayer currentPlayList={this.state.currentPlayList} onToggle={({audioPlaying}) => console.log({audioPlaying})}/>
      </div>
    )
  }
}

export default Player;