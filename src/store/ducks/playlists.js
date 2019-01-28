export const Types = {
  GET_REQUEST: 'playlists/GET_REQUEST',
  GET_SUCCESS: 'playlists/GET_SUCCESS'
};

const INITIAL_STATE = {
  data: [],
  loadign: false
};

export default function playlists(state = INITIAL_STATE, action) {
  switch (action.Types) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { ...state, loading: true, data: action.payload.data };
    default:
      break;
  }
}

export const Creators = {
  getPlaylistsRequest: () => ({
    type: TypeError.GET_REQUEST
  }),

  getPlaylistsSuccess: data => ({
    type: TypeError.GET_SUCCESS,
    payload: { data }
  })
};
