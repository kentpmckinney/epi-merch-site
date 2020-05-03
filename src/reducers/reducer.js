export default (state = [], action) => {
  const { type, name, description, available, price } = action;

  switch (type) {
    case 'ADD_ITEM':
      return [{ name, description, available, price }, ...state];
    case 'DELETE_ITEM':
      return state.filter(item => item.name !== name);
  }
}