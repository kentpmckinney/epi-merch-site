export default (state = [], action) => {
  const { type, key, name, description, available, price } = action;

  switch (type) {
    case 'ADD_ITEM':
      return [{ key, name, description, available, price }, ...state];
    case 'DELETE_ITEM':
      return state.filter(item => item.key !== key);
    case 'EDIT_ITEM':
      return state.map(item => item.key === key ? { key, name, description, available, price } : item);
    default:
      return state;
  }
}