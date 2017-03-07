export function seriesInfoLoadComplete(data) {
  return {
    type: 'SERIES_INFO@LOAD_COMPLETE',
    data,
  };
}

export function charactersLoadComplete(data) {
  return {
    type: 'CHARACTERS@FIND_ALL_COMPLETE',
    data,
  };
}

export function comicsLoadComplete(data) {
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

export function seriesInfoSearch(name) {
  return (next) => {
    fetch(`http://marvel-is-broke.herokuapp.com/series?limit=1&titleStartsWith=${name}`)
    .then(response => response.json())
    .then((data) => {
      const id = next(seriesInfoLoadComplete(data));
      next(charactersFindForId(id));
      next(comicsFindForId(id));
    });
  };
}

export function charactersFindForId(id) {
  fetch(`http://marvel-is-broke.herokuapp.com/series/${id}/characters`)
  .then(response => response.json())
  .then((data) => {
    next(charactersLoadComplete(data));
  });
}

export function comicsFindForId(id) {
  fetch('http://marvel-is-broke.herokuapp.com/series/1928/comics')
  .then(response => response.json())
  .then((data) => {
    next(comicsLoadComplete(data));
  });
}
