const initState = {
  crytoRate: '',
};

export default (state = initState, action) => {
  switch (action.type) {
    case 'UPDATE_CYPTO_RATE':
      return { ...state, crytoRate: action.payload };
    default:
      return state;
  }
};
