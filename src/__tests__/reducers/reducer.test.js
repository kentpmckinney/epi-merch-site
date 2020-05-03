import reducer from '../../reducers/reducer.js';

describe('reducer tests', () => {

  test('add an item', () => {
    const action = { type: 'ADD_ITEM', name: 'Black Shirt', description: 'a very basic black T', available: 500, price: 5.99 }
    const state = reducer([], action);
    expect(state).toEqual([{ name: 'Black Shirt', description: 'a very basic black T', available: 500, price: 5.99 }]);
  });

  test('delete an item', () => {
    let state = [{ name: 'Black Shirt', description: 'a very basic black T', available: 500, price: 5.99 }];
    const action = { type: 'DELETE_ITEM', name: 'Black Shirt' }
    state = reducer([], action);
    expect(state).toEqual([]);
  });

  test('edit an item', () => {
    let state = [{ name: 'Black Shirt', description: 'a very basic black T', available: 500, price: 5.99 }];
    const action = { type: 'EDIT_ITEM', name: 'Black Shirt 2', description: 'a very basic black T 2', available: 90, price: 4.99 }
    state = reducer([], action);
    expect(state).toEqual([{ name: 'Black Shirt 2', description: 'a very basic black T 2', available: 90, price: 4.99 }]);
  });
});
