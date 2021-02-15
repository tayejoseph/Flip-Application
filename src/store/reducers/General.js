const initState = {
  bankLists: {},
};

export default (state = initState, action) => {
  switch (action.type) {
    case 'ALT_BANK_LISTS':
      return { ...state, bankLists: action.payload };
    default:
      return state;
  }
};
