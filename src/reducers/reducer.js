export default (state = [], action) => {
  const { type, id, name, description, available, price } = action;

  switch (type) {
    case 'ADD_ITEM':
      return [{ id, name, description, available, price }, ...state];
    case 'DELETE_ITEM':
      return state.filter(item => item.id !== id);
    case 'EDIT_ITEM':
      return state.map(item => item.id === id ? { id, name, description, available, price } : item);
    default:
      return state;
  }
}