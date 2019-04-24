import React, {Component} from 'react';
import TracksList from '../../components/TracksList';

class Tracks extends Component {

  setCurrentTrackFromTrackList = (currentTrack) => {
    this.props.setCurrentTrackFromTracks(currentTrack);
  }

  render() {
    return (
      <div>
        The length of tracks is {this.props.tracks.length}
        <TracksList list={this.props.tracks} setCurrentTrackFromTrackList={this.setCurrentTrackFromTrackList}/>
      </div>
    )
  }
}

export default Tracks;
