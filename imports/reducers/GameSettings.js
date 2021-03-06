import uuidv1 from 'uuid';
import * as types from '../constants/ActionTypes';

const initialState = {
  gameId: '',
  gameNoOfQuestions: '',
  gameTable: '',
  gameUpperRangeLimit: '',
  gameType: '',
  gameQuestionTime: '',
  gameInProgress: false,
  gameStartButtonText: 'PLAY',
  gameStartButtonDisabled: false,
  displayWelcomeScreen: true,
};

const gameSettings = (state = initialState, action) => {
  switch (action.type) {
    case types.SAVE_GAME_SETTINGS:
      return {
        ...state,
        gameId: uuidv1(),
        gameNoOfQuestions: action.gameNoOfQuestions,
        gameTable: action.gameTable,
        gameUpperRangeLimit: action.gameUpperRangeLimit,
        gameType: action.gameType,
        gameQuestionTime: action.gameQuestionTime,
        gameInProgress: action.gameInProgress,
      };
    case types.START_GAME:
      return {
        ...state,
        gameInProgress: true,
        gameStartButtonText: 'WHAT YOU LOOKING AT?',
        gameStartButtonDisabled: true,
        displayWelcomeScreen: false,
      };
    case types.END_GAME:
      return {
        ...state,
        gameInProgress: false,
        gameStartButtonText: 'PLAY AGAIN!',
        gameStartButtonDisabled: false,
      };
    case types.CLEAR_GAME: {
      return {
        ...state,
        gameId: '',
        gameNoOfQuestions: '',
        gameTable: '',
        gameUpperRangeLimit: '',
        gameType: '',
        gameQuestionTime: '',
        gameInProgress: false,
        gameStartButtonDisabled: false,
        gameStartButtonText: 'PLAY',
        displayWelcomeScreen: true,
      };
    }
    default:
      return state;
  }
};

export default gameSettings;
