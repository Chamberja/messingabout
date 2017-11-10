const initialState = {
  rooms: [
    { id: 1, name: 'Kek' },
    { id: 2, name: 'Whistle' }
  ]
}

function reducer(state, action) {
  if (typeof state === 'undefined') {
    return initialState
  }

  switch(action.type) {
    case 'ADD_ROOM':
      return {
        rooms: [
          ...state.rooms,
          action.payload.room
        ]
      };
      break;

    case 'FETCH_ROOMS_SUCCEEDED':
      return {
        rooms: action.payload.rooms
      };

    default:
      return state;
  }
}

export default reducer;
