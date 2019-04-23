const setCurrentTrack = (_this, { ...currentTrack }) => {
  console.log(`current track is ${currentTrack.name}`);
  console.log(`this is ${_this}`)
  _this.setState({ currentTrack });
}

export default setCurrentTrack;
