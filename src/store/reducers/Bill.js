const initState = {};

export default (state = initState, action) => {
  switch (action.type) {
    case 'ALT_BILL_CATEGORIES':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
