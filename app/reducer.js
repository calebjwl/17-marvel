import { combineReducers } from 'redux';

function seriesInfo(state, action) {
  switch (action.type) {
    case 'SERIES_INFO@LOAD_COMPLETE':
      return action.data;
    default:
      return state;
  }
}

function characterData(state, action) {
  switch (action.type) {
    case 'CHARACTERS@FINDALL_COMPLETE':
      return action.data;
    default:
      return state;
  }
}

function comicData(state, action) {
  switch (action.type) {
    case 'COMICS@FINDALL_COMPLETE':
      return action.data;
    default:
      return state;
  }
}

function setModal(state, action) {
  switch (action.type) {
    case 'MODAL@SET':
      return action.data;
    default:
      return state;
  }
}

function clearModal(state, action) {
  switch (action.type) {
    case 'MODAL@CLEAR':
      return action.data;
    default:
      return state;
  }
}

export default combineReducers({
  seriesInfo,
  characterData,
  comicData,
  setModal,
  clearModal
});
