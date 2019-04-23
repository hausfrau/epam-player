import React, {Component} from 'react';
import ListHeader from '../ListHeader';
import Tracks from '../../containers/Tracks';
import './App.css';


class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>It's a player</h1>
                </header>
                <ListHeader title="Playlist:"/>
                <Tracks />
            </div>
        );
    }
}

export default App;
