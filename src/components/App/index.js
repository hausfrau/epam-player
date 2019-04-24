import React, {Component} from 'react';
import ListHeader from '../ListHeader';
import Tracks from '../../containers/Tracks';
import CurrentTrack from '../../containers/CurrentTrack';
import './App.css';


class App extends Component {
  state = {
    tracks: [
      {
        id: 1,
        name: "Track 1",
        duration: "04.20"
      },
      {
        id: 2,
        name: "Track 2",
        duration: "02.00"
      },
      {
        id: 3,
        name: "Track 3",
        duration: "03.32"
      },
      {
        id: 4,
        name: "Track 4",
        duration: "05.10"
      },
      {
        id: 5,
        name: "Track 5",
        duration: "03.48"
      },
    ],
    currentTrackId: 5
  }

  setCurrentTrackFromTracks = (currentTrackId) => {
    this.setState({currentTrackId});
  }

  findTrack = (id) => {
    return this.state.tracks.find(track => track.id === id);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>It's a player</h1>
        </header>
        <ListHeader title="Playlist:"/>
        <Tracks tracks={this.state.tracks} setCurrentTrackFromTracks={this.setCurrentTrackFromTracks}/>
        <CurrentTrack currentTrack={this.findTrack(this.state.currentTrackId)}/>
      </div>
    );
  }
}

export default App;
