import reducer from '../app/reducer';

module('reducer', () => {
  test('load series info', (assert) => {
    const infoOne = { data: 'This is info about hero 1.' };
    const infoTwo = { type: 'SERIES_INFO@LOAD_COMPLETE', data: 'This is info about hero 2.' };

    assert.deepEqual(reducer(infoOne, infoTwo), 'This is info about hero 2.');
  });
});
