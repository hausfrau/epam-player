import React from 'react';
import './index.css';

const TracksListItem = (props) => {

  function onTrackClick(_track) {
    props.setCurrentTrackFromTrackItem(_track);
  }

  return (
    <li className="tracks-list-item" onClick={onTrackClick.bind(null, props.track)}>
      {props.track.name} {props.track.duration}
    </li>
  )
}

const TracksList = function (props) {
  return (
    <div>
      <ul className="tracks-list">
        {props.list.map(track => (
          <TracksListItem track={track} key={track.id}
                          setCurrentTrackFromTrackItem={(_track) => props.setCurrentTrackFromTrackList(_track)}/>
        ))}
      </ul>
    </div>
  )
}

export default TracksList;
