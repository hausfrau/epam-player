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

  findTrack = (id) => console.log(id) || this.state.tracks.find(track => track.id === id);

  render() {
    const {tracks, currentTrackId} = this.state;
    const currentTrack = this.findTrack(currentTrackId);
    const setCurrentTrackFromTracks = this.setCurrentTrackFromTracks;

    return (
      <div className="App">
        <header className="App-header">
          <h1>It's a player</h1>
        </header>
        <ListHeader title="Playlist:"/>
        <Tracks tracks={tracks} setCurrentTrackFromTracks={setCurrentTrackFromTracks}/>
        <CurrentTrack currentTrack={currentTrack}/>
      </div>
    );
  }
}

export default App;
