import * as types from '../constants/ActionTypes';

const initialState = {
  numberOfCorrect: 0,
  percentageCorrect: 0,
};

const gameScore = (state = initialState, action) => {
  switch (action.type) {
    case types.SAVE_GAME_SCORE:
      return {
        ...state,
        numberOfCorrect: action.numberOfCorrect,
        percentageCorrect: action.percentageCorrect,
      };
    case types.CLEAR_GAME: {
      return {
        ...state,
        numberOfCorrect: 0,
        percentageCorrect: 0,
      };
    }
    default:
      return state;
  }
};

export default gameScore;
