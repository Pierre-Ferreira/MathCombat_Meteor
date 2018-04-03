import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import gameSettings from './GameSettings';
import gameAnswers from './GameAnswers';
import gameCurrentAnswer from './GameCurrentAnswer';
import gameScore from './GameScore';
import playerID from './PlayerID';

const gameInfo = combineReducers({
  gameSettings,
  gameAnswers,
  gameCurrentAnswer,
  gameScore,
  playerID,
  routing: routerReducer,
});

export default gameInfo;
