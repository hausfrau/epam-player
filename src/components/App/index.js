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
    currentTrack: {
      id: 0,
      name: "",
      duration: "00.00"
    }
  }

  setCurrentTrackFromTracks = (currentTrack) => {
    this.setState({currentTrack});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>It's a player</h1>
        </header>
        <ListHeader title="Playlist:"/>
        <Tracks tracks={this.state.tracks} setCurrentTrackFromTracks={this.setCurrentTrackFromTracks}/>
        <CurrentTrack currentTrack={this.state.currentTrack}/>
      </div>
    );
  }
}

export default App;
