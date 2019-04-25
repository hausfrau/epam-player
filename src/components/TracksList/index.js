import React from 'react';
import './index.css';

const TracksListItem = (props) => {
  const track = props.track;
  const { name, duration } = track;


  function onTrackClick(_track) {
    props.setCurrentTrackFromTrackItem(_track.id);
  }

  return (
    <li className="tracks-list-item" onClick={onTrackClick.bind(null, track)}>
      {name} {duration}
    </li>
  )
}

const TracksList = function (_props) {
  const { list, setCurrentTrackFromTrackList } = _props;

return (
    <div>
      <ul className="tracks-list">
        {console.log(list) || list.map(track => (
          <TracksListItem track={track} key={track.id}
                          setCurrentTrackFromTrackItem={(_track) => console.log(_track.id) || setCurrentTrackFromTrackList(_track)}/>
        ))}
      </ul>
    </div>
  )
}

export default TracksList;
