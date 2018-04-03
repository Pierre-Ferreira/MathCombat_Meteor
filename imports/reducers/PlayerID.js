import * as types from '../constants/ActionTypes';


const playerID = (state = {}, action) => {
  switch (action.type) {
    case types.SET_PLAYER_ID:
      return {
        ...state,
        playerID: action.playerID,
      };
    default:
      return state;
  }
};

export default playerID;
