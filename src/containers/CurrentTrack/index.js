import React, { Component } from 'react';

class CurrentTrack extends Component {
  state = {
    currentTrack: {
      id: 0,
      name: "",
      duration: "00.00"
    }
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        Current track is {this.state.currentTrack.name} {this.state.currentTrack.duration}
      </div>
    )
  }
}

export default CurrentTrack;
