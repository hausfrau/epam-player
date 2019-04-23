import React from 'react';
import './index.css';
import setCurrentTrack from '../../setCurrentTrack';
import CurrentTrack from '../../containers/CurrentTrack';

const TracksListItem = function ({track}) {
  // this.setCurrentTrack.bind(this);

  function onTrackClick(_track) {
    console.log(_track.name);
    console.log(_track.duration);
    console.log(_track.id);
    setCurrentTrack.apply(CurrentTrack, { _track });
  }

  return (
    <li className="tracks-list-item" onClick={onTrackClick.bind(null, track)}>
      {track.name} {track.duration}
    </li>
  )
}

const TracksList = props => {
  return (
    <div>
      <ul className="tracks-list">
        {props.list.map(track => (
          <TracksListItem track={track} key={track.id}/>
        ))}
      </ul>
    </div>
  )
}

export default TracksList;
