const initState = {
  token: '',
  user: {},
  account: {},
};

const user = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { ...state, ...action.payload };
    case 'LOGIN_FAILURE':
      return {};
    case 'UPDATE_USER_DETAILS':
      return { ...state, user: action.payload };
    case 'REGISTER_SUCCESS':
      return { ...state, ...action.payload };
    case 'UPDATE_ACCOUNT_DETAILS':
      return { ...state, account: action.payload };
    case 'UPDATE_USER_DETAILS':
      return { ...state, user: action.payload };
    case 'LOGOUT_SUCCESS':
      return { ...initState };
    default:
      return state;
  }
};

export default user;
