import React, {Component} from 'react';
import TracksList from '../../components/TracksList';

class Tracks extends Component {
  setCurrentTrackFromTrackList = (currentTrack) => this.props.setCurrentTrackFromTracks(currentTrack);

  render() {
    const tracks = this.props.tracks;
    const length = tracks.length;
    const setCurrentTrackFromTrackList = this.setCurrentTrackFromTrackList;

    return (
      <div>
        The length of tracks is {length}
        <TracksList list={tracks} setCurrentTrackFromTrackList={setCurrentTrackFromTrackList}/>
      </div>
    )
  }
}

export default Tracks;
