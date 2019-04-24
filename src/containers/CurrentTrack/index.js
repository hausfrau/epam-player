import React, {Component} from 'react';

class CurrentTrack extends Component {
  render() {
    return (
      <div>
        Current track is {this.props.currentTrack.name} {this.props.currentTrack.duration}
      </div>
    )
  }
}

export default CurrentTrack;
