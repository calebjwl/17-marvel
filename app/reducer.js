import { combineReducers } from 'redux';

function seriesInfo(state = null, action) {
  switch (action.type) {
    case 'SERIES_INFO@LOAD_COMPLETE':
      return action.data;
    default:
      return state;
  }
}

function characterData(state = [], action) {
  switch (action.type) {
    case 'CHARACTERS@FIND_ALL_COMPLETE':
      return action.data;
    default:
      return state;
  }
}

function comicData(state = [], action) {
  switch (action.type) {
    case 'COMICS@FIND_ALL_COMPLETE':
      return action.data;
    default:
      return state;
  }
}

function modal(state = null, action) {
  switch (action.type) {
    case 'MODAL@SET':
      return action.data;
    case 'MODAL@CLEAR':
      return null;
    default:
      return state;
  }
}

export default combineReducers({
  seriesInfo,
  characterData,
  comicData,
  modal,
});
