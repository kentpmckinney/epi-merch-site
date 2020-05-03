export default (state = {}, action) => {
  const { name, description, available, price } = action;

  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, { name, description, available, price }]
    case 'DELETE_ITEM':
      return state.filter(item => item.name !== name);
  }
}