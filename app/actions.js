export function loadSeriesInfo(data) {
  return {
    type: 'SERIES_INFO@LOAD_COMPLETE',
    data,
  };
}

export function findAllCharacters(data) {
  return {
    type: 'CHARACTERS@FIND_ALL_COMPLETE',
    data,
  };
}

export function findAllComics(data) {
  return {
    type: 'COMICS@FIND_ALL_COMPLETE',
    data,
  };
}

export function setModal(data) {
  return {
    type: 'MODAL@SET',
    data,
  };
}

export function clearModal() {
  return {
    type: 'MODAL@CLEAR',
  };
}
