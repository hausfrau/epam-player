import React, { Component } from 'react';
import TracksList from '../../components/TracksList';

class Tracks extends Component {
    state = {
        tracks: []
    }

    componentDidMount() {
        const tracks = [
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
        ]
        this.setState({ tracks });
    }

    render() {
        return (
            <div>
                The length of tracks is {this.state.tracks.length}
                <TracksList list={this.state.tracks} />
            </div>
        )
    }
}

export default Tracks;