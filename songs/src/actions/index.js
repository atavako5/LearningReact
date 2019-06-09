// Action creator
export const selectSong = song => {
  // return and action
  return {
    type: "SONG_SELECTED",
    payload: song
  };
};
