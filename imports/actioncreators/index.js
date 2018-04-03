import * as types from '../constants/ActionTypes';

// Player Actiontypes.
export const setPlayerID = playerID => ({
  type: types.SET_PLAYER_ID,
  playerID,
});

// Game actiontypes.
export const saveGameSettings = (
  gameNoOfQuestions,
  gameTable,
  gameUpperRangeLimit,
  gameType,
  gameQuestionTime,
) => ({
  type: types.SAVE_GAME_SETTINGS,
  gameNoOfQuestions,
  gameTable,
  gameUpperRangeLimit,
  gameType,
  gameQuestionTime,
});

export const saveAnswerInfo = answerObject => ({
  type: types.SAVE_ANSWER_INFO,
  answerObject,
});

export const updateCurrentAnswer = currentAnswer => ({
  type: types.UPDATE_CURRENT_ANSWER,
  currentAnswer,
});

export const saveGameScore = (numberOfCorrect, percentageCorrect) => ({
  type: types.SAVE_GAME_SCORE,
  numberOfCorrect,
  percentageCorrect,
});

export const startGame = () => ({
  type: types.START_GAME,
});

export const endGame = () => ({
  type: types.END_GAME,
});

export const clearGame = () => ({
  type: types.CLEAR_GAME,
});
