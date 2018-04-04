import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import gameSettings from './GameSettings';
import gameAnswers from './GameAnswers';
import gameCurrentAnswer from './GameCurrentAnswer';
import gameScore from './GameScore';
import playerInfo from './PlayerInfo';

const gameInfo = combineReducers({
  gameSettings,
  gameAnswers,
  gameCurrentAnswer,
  gameScore,
  playerInfo,
  routing: routerReducer,
});

export default gameInfo;
