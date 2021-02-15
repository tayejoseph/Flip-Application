export const initState = '';

export default (state = initState, action) => {
  switch (action.type) {
    case 'INITE_GIFTCARDS':
      return action.payload;
    default:
      return state;
  }
};
