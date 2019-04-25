import React, {Component} from 'react';

class CurrentTrack extends Component {
  render() {
    const { name, duration} = this.props.currentTrack;

    return (
      <div>
        Current track is {name}  {duration}
      </div>
    )
  }
}

export default CurrentTrack;
