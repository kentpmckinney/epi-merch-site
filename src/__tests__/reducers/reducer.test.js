import reducer from '../reducers/reducer.js';

describe('reducer tests', () => {

  test('add an item', () => {

    const action = { type: 'ADD_ITEM', name: 'Black Shirt', description: 'a very basic black T', available: 500, price: 5.99 }
    const state = reducer({}, action);
    expect(state).toEqual({ name: 'Black Shirt', description: 'a very basic black T', available: 500, price: 5.99 });

  });

});