import * as types from '../constants/ActionTypes';

const initialState = {
  _id: '',
  name: '',
  surname: '',
  school: '',
  birthday: '',
  grade: '',
  parentID: '',
  createdAt: '',
  updatedAt: '',
};

const playerInfo = (state = {}, action) => {
  switch (action.type) {
    case types.SET_PLAYER_INFO:
      return {
        ...state,
        _id: action.playerInfo._id,
        name: action.playerInfo.name,
        surname: action.playerInfo.surname,
        school: action.playerInfo.school,
        birthday: action.playerInfo.birthday,
        grade: action.playerInfo.grade,
        parentID: action.playerInfo.parentID,
        createdAt: action.playerInfo.createdAt,
        updatedAt: action.playerInfo.updatedAt,
      };
    default:
      return state;
  }
};

export default playerInfo;
