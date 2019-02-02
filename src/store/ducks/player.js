import Sound from 'react-sound';

export const Types = {
  LOAD: 'player/LOAD',
  PLAY: 'player/PLAY',
  PAUSE: 'player/PAUSE',
  SELECT: 'player/SELECT'
};

const INITIAL_STATE = {
  currentSong: null,
  status: Sound.status.PLAYING
};

export default function player(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOAD:
      return {
        ...state,
        currentSong: action.payload.song,
        status: Sound.status.PLAYING
      };
    case Types.PLAY:
      return {
        ...state,
        status: Sound.status.PLAYING
      };
    case Types.PAUSE:
      return {
        ...state,
        status: Sound.status.PAUSED
      };
    case Types.SELECT:
      return {
        ...state,
        currentSong: action.payload.song,
        status: Sound.status.PAUSED
      };
    default:
      return state;
  }
}

export const Creators = {
  loadSong: song => ({
    type: Types.LOAD,
    payload: { song }
  }),

  selectSong: song => ({
    type: Types.SELECT,
    payload: { song }
  }),

  play: () => ({ type: Types.PLAY }),

  pause: () => ({ type: Types.PAUSE })
};
