import reducer from '../app/reducer';

module('reducer', () => {
  test('it exists', (assert) => {
    assert.ok(reducer, 'reducer exists');
  });
});

test('When loading series info, replace the old series info', (assert) => {
  const oldState = { characterData: [], comicData: [], seriesInfo: null, modal: null };
  const action = { type: 'SERIES_INFO@LOAD_COMPLETE', data: { name: 'Spodermon' } };
  const expectedState = { characterData: [], comicData: [], seriesInfo: { name: 'Spodermon' }, modal: null };

  assert.deepEqual(reducer(oldState, action), expectedState);
});

test('When loading character data replace the character data', (assert) => {
  const oldState = { characterData: [], comicData: [], seriesInfo: null, modal: null };
  const action = { type: 'CHARACTERS@FIND_ALL_COMPLETE', data: [{ name: 'Batmon' }] };
  const expectedState = { characterData: [{ name: 'Batmon' }], comicData: [], seriesInfo: null, modal: null };

  assert.deepEqual(reducer(oldState, action), expectedState);
});

test('When loading comic data replace the comic data', (assert) => {
  const oldState = { characterData: [], comicData: [], seriesInfo: null, modal: null };
  const action = { type: 'COMICS@FIND_ALL_COMPLETE', data: [{ name: 'Philled in' }] };
  const expectedState = { characterData: [], comicData: [{ name: 'Philled in' }], seriesInfo: null, modal: null };

  assert.deepEqual(reducer(oldState, action), expectedState);
});

test('When adding modal data replace the old modal description', (assert) => {
  const oldState = { characterData: [], comicData: [], seriesInfo: null, modal: null };
  const action = { type: 'MODAL@SET', data: { message: 'Read More' } };
  const expectedState = { characterData: [], comicData: [], seriesInfo: null, modal: { message: 'Read More' } };

  assert.deepEqual(reducer(oldState, action), expectedState);
});

test('When adding modal data replace the old modal description', (assert) => {
  const oldState = { characterData: [], comicData: [], seriesInfo: null, modal: { message: 'Read More' } };
  const action = { type: 'MODAL@CLEAR' };
  const expectedState = { characterData: [], comicData: [], seriesInfo: null, modal: null };

  assert.deepEqual(reducer(oldState, action), expectedState);
});
