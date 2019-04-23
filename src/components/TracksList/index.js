import React from 'react';
import './index.css';

const TracksListItem = ({ track }) => (
    <li>
        {track.name} {track.duration}
    </li>
)

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